#!/bin/bash

# Load environment variables from .env file
export $(grep -v '^#' .env | xargs)

# Upload GeoPackage to PostgreSQL
ogr2ogr -f "PostgreSQL" PG:"host=$DB_HOST port=$DB_PORT dbname=$DB_NAME user=$DB_USER password=$DB_PASSWORD" -lco SCHEMA=$SCHEMA_NAME "$GEOPACKAGE_PATH"

echo "GeoPackage uploaded to PostgreSQL database '$DB_NAME' successfully."