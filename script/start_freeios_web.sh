#!/bin/bash
/opt/wisecloud/freeios_web/nginx/sbin/nginx -c /opt/wisecloud/freeios_web/nginx/conf/nginx.conf -p /opt/wisecloud/freeios_web/nginx/
ps aux | grep /opt/wisecloud/freeios_web/nginx/sbin/nginx
exit 0
