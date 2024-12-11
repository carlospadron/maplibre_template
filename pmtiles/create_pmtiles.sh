#!/bin/bash

GEOPACKAGE_PATH=data/oproad_gpkg_gb/Data/oproad_gb.gpkg
LAYER=road_link

ogr2ogr -t_srs EPSG:3857 data/data.json $GEOPACKAGE_PATH $LAYER
tippecanoe -zg --projection=EPSG:3857 -o data/data.pmtiles -l $LAYER data/data.json