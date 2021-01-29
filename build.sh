#!/bin/sh

#模块版本号
ver="P80_V5"


pwdDir=`pwd`
moduleName=$1
buildDir=${JENKINS_HOME}/workspace
curday=$(date +%Y%02m%02d)
buildtime=$(date +"%Y-%02m-%02d %02H:%02M:%02S")
desdir="output"


if [ $# -ne "1" ];then
    echo "demo: sh build.sh 模块名"
    echo "请在build.sh后面加上参数：模块名"
    exit 1
fi


packageData()
{
	cd ${buildDir}/${JOB_NAME}

	rm -rf .svn

	#产生version文件
	echo "NEName=${moduleName}" > version
	echo "Version=${ver}" >> version
	echo "Provider=CloudStream" >> version
	echo "BuildTime=$curday" >> version

	#创建打包输出目录
	if [ ! -d $desdir ]
	then
		mkdir -v $desdir
	else
		rm -rf $desdir/*
	fi;

	echo "***开始打包！"

	#进入output目录
	cd ${desdir}

	#创建包目录
	if [ ! -d ${moduleName}_${ver}_${curday} ]
	then
		mkdir -v ${moduleName}_${ver}_${curday}
	else
		rm -rf ${moduleName}_${ver}_${curday}/*
	fi;

	cd ${moduleName}_${ver}_${curday}

	#复制需要的所有打包文件到此目录下
	cp ${buildDir}/${JOB_NAME}/param.properties .
	cp -r ${buildDir}/${JOB_NAME}/script .
	cp ${buildDir}/${JOB_NAME}/setup.sh .
	cp ${buildDir}/${JOB_NAME}/version .
	cp -rf ${buildDir}/${JOB_NAME}/software .
  cp -rf ${buildDir}/${JOB_NAME}/dist/* ./software/nginx/html/

	#返回output目录
	cd ../

	#打包命令
	tar -zcf "${moduleName}"_"${ver}"_$curday.tar.gz ${moduleName}_${ver}_${curday}
	rm -rf ${moduleName}_${ver}_${curday}
	echo "***打包结束！"
	#2018/4/18
}

packageData;

exit 0;
