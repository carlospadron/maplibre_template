#!/bin/bash

sudo apt-get install libsqlite3-dev
sudo apt-get install zlib1g-dev
git clone https://github.com/felt/tippecanoe.git
cd tippecanoe
make -j
sudo make install