#!/bin/bash

FIRST_PARAM=$1
SECOND_PARAM=$2
THIRD_PARAM=$3
FOURTH_PARAM=$4
FiFTH_PARAM=$5
SIXTH_PARAM=$6

MODULE_NAME=${SECOND_PARAM}
RUN_PATH=${FOURTH_PARAM}
PARAMSPATH=${SIXTH_PARAM}
BACKUP_PATH=${RUN_PATH}_back

HELP_TIPS="\033[32;49;1m -m module_name -path run_path -f param.propertis文件的绝对路径 \n -m 模块名,demo: h5center_web\n -path 运行目录\n -f 参数后面为param.propertis文件的绝对路径 \033[39;49;0m"

echo -e "\033[32;49;1m [-----------------运行目录：${RUN_PATH}--------------] \033[39;49;0m"
echo -e "\033[32;49;1m [-----------------备份目录：${BACKUP_PATH}-----------] \033[39;49;0m"


#全量安装
setup_install() {
  if [ -d ${RUN_PATH} ]; then
    # 将运行目录下的setting.js替换安装包的setting.js
    yes|cp -f ${RUN_PATH}/nginx/html/static/setting.js ./software/nginx/html/static/setting.js
    rm -rf ${BACKUP_PATH}
    mv ${RUN_PATH} ${BACKUP_PATH}
  fi
  mkdir -p ${RUN_PATH}
  echo -e "\033[32;49;1m [-----------------拷贝文件到安装目录--------------] \033[39;49;0m"
  cp -rf ./version ./software/* ${RUN_PATH}
}

#增量安装
update_install() {
  if [ "${RUN_PATH}" == "/" ] || [ -z ${RUN_PATH} ] || [ "${BACKUP_PATH}" == "/" ] || [ -z ${BACKUP_PATH} ]; then
    echo -e "\033[31;49;1m [----------RUN_PATH or BACKUP_PATH 为 / 或为空，请检查配置--------] \033[39;49;0m"
    exit 1
  fi

  #创建备份目录BACKUP_PATH
  rm -rf ${BACKUP_PATH}
  cp -rf ${RUN_PATH} ${BACKUP_PATH}

  echo -e "\033[32;49;1m [-----------------拷贝文件到安装目录--------------] \033[39;49;0m"
  if [ -f ${RUN_PATH}/nginx/html/static/setting.js ]; then
    # 将运行目录下的setting.js替换安装包的setting.js
    cp -f ${RUN_PATH}/nginx/html/static/setting.js ./software/nginx/html/static/setting.js
  fi
  cp -f ${RUN_PATH}/nginx/conf/nginx.conf ./software/nginx/conf/nginx.conf
  cp -rf ./version ./software/* ${RUN_PATH}
}

# 注册命令
register_cmd() {
  echo -e "\033[32;49;1m [--------------拷贝执行脚本到/bin目录-------------] \033[39;49;0m"

  yes | cp script/restart_${MODULE_NAME}.sh /bin/restart_${MODULE_NAME}
  chmod 755 /bin/restart_${MODULE_NAME}

  yes | cp script/start_${MODULE_NAME}.sh /bin/start_${MODULE_NAME}
  chmod 755 /bin/start_${MODULE_NAME}

  yes | cp script/status_${MODULE_NAME}.sh /bin/status_${MODULE_NAME}
  chmod 755 /bin/status_${MODULE_NAME}

  yes | cp script/stop_${MODULE_NAME}.sh /bin/stop_${MODULE_NAME}
  chmod 755 /bin/stop_${MODULE_NAME}
}

#替换nginx参数
nginx_sed() {
  cat ${PARAMSPATH} | while read LINE; do
    param_key=$(echo ${LINE} | awk -F '=' '{print $1}')
    param_value=$(echo ${LINE} | awk -F '=' '{print $2}')
    if [ ${param_key} ]; then
      sed -i "s/${param_key}/${param_value//\//\\/}/g" ${RUN_PATH}/nginx/conf/nginx.conf
    fi
  done
}

# 检查安装环境
check_env()
{
  echo -e "\033[32;49;1m [-----------------开始检查安装环境---------------] \033[39;49;0m"
  if [ ! -f /etc/yum.repos.d/openresty.repo ];then
    wget -P /etc/yum.repos.d/ https://openresty.org/package/centos/openresty.repo -O /etc/yum.repos.d/openresty.repo
    sudo yum check-update
    sudo yum -y install openresty
    /bin/stop_${MODULE_NAME}
    yes|cp -f /usr/local/openresty/nginx/sbin/nginx ./software/nginx/sbin/nginx
    chmod +x ./software/nginx/sbin/nginx
  else
    /bin/stop_${MODULE_NAME}
    yes|cp -f /usr/local/openresty/nginx/sbin/nginx ./software/nginx/sbin/nginx
    chmod +x ./software/nginx/sbin/nginx
  fi
}

#判断命令，参数少于5个或者param.properties文件不存在则提示

if [ $# -lt 4 ]; then
  echo -e ${HELP_TIPS}
  exit 1
elif [ $# == 4 ] && [ ${FIRST_PARAM} != "-m" ]; then
  echo -e ${HELP_TIPS}
  exit 1
elif [ $# -gt 5 ] && [ ${FiFTH_PARAM} == "-f" ]; then
  if [ ! -f ${PARAMSPATH} ]; then
    echo -e "\033[31;49;1m [----------param.properties 文件不存在!   ${PARAMSPATH}--------] \033[39;49;0m"
    exit 1
  fi
fi

if [ $# -gt 5 ]; then
  # 检查安装环境
  check_env

  # 注册命令
  register_cmd

  echo -e "\033[32;49;1m [----------开始执行全量安装：setup_install-----------] \033[39;49;0m"
  setup_install

  echo -e "\033[32;49;1m [------------------修改nginx配置----------------] \033[39;49;0m"
  nginx_sed

  echo -e "\033[32;49;1m [---安装完成后，重启程序：restart_${MODULE_NAME}--] \033[39;49;0m"
  restart_${MODULE_NAME}

elif [ $# -le 4 ]; then
  # 检查安装环境
  check_env

  # 注册命令
  register_cmd

  echo -e "\033[32;49;1m [-----------开始执行增量安装：update_install----------] \033[39;49;0m"
  update_install

  echo -e "\033[32;49;1m [---安装完成后，重启程序：restart_${MODULE_NAME}--] \033[39;49;0m"
  restart_${MODULE_NAME}

fi

exit 0
