#!/bin/bash
port=`cat /klindosserver/config/port.txt`
sudo python -m http.server $port --directory /klindosserver/files/