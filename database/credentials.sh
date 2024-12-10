#!/bin/bash

# Export environment variables
export GEOPACKAGE_PATH="database/data/oproad_gpkg_gb/Data/oproad_gb.gpkg"
export DB_NAME="alpha"
export DB_USER="alpha_owner"
export DB_PASSWORD="nKrLM3g5oNiW"
export DB_HOST="ep-lucky-resonance-a2vu2npg.eu-central-1.aws.neon.tech"
export DB_PORT="5432"

echo "Environment variables set:"
echo "GEOPACKAGE_PATH=$GEOPACKAGE_PATH"
echo "DB_NAME=$DB_NAME"
echo "DB_USER=$DB_USER"
echo "DB_PASSWORD=$DB_PASSWORD"
echo "DB_HOST=$DB_HOST"
echo "DB_PORT=$DB_PORT"