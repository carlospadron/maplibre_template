#!/bin/bash

# Upload GeoPackage to PostgreSQL
ogr2ogr -f "PostgreSQL" PG:"host=$DB_HOST port=$DB_PORT dbname=$DB_NAME user=$DB_USER password=$DB_PASSWORD" "$GEOPACKAGE_PATH"

echo "GeoPackage uploaded to PostgreSQL database '$DB_NAME' successfully."