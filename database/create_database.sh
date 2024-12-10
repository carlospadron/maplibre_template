#!/bin/bash

# Variables
DB_NAME="gis"
DB_USER="postgres"

# Create the database
sudo -u $DB_USER psql -c "CREATE DATABASE $DB_NAME;"

echo "Database '$DB_NAME' created successfully."