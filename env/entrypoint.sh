#!/bin/sh

sed -i "s|\$PORT|$PORT|g" /etc/nginx/conf.d/default.conf

exec "$@"