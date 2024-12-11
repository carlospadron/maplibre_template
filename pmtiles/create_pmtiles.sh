#!/bin/bash

GEOPACKAGE_PATH=data/oproad_gpkg_gb/Data/oproad_gb.gpkg
LAYER=road_link

ogr2ogr -t_srs EPSG:3857 data/data.json $GEOPACKAGE_PATH $LAYER
#all zoom levels
#tippecanoe -zg --projection=EPSG:3857 -o data/data.pmtiles -l $LAYER data/data.json
#zoom levels 10 and beyond
tippecanoe -Z10 --projection=EPSG:3857 -o data/data.pmtiles -l $LAYER data/data.json