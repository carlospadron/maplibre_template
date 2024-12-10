#!/bin/bash

# Update package lists
sudo apt-get update

# Install PostgreSQL
sudo apt-get install -y postgresql postgis

# Start PostgreSQL service
sudo systemctl start postgresql

# Enable PostgreSQL service to start on boot
sudo systemctl enable postgresql

# Print PostgreSQL version to verify installation
psql --version

echo "PostgreSQL installation completed successfully."