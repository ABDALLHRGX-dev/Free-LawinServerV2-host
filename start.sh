#!/bin/bash

# تثبيت الحزم أولاً (إذا لم يتم تثبيتها)
bash install_packages.sh

# تشغيل proxy.js و start.sh معًا
node proxy.js &
node index.js
