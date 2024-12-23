sudo apt-get update
sudo apt-get install postgresql-client gdal-bin awscli
sudo snap install aws-cli --classic

aws s3 cp s3://$ZIP_FILE_PATH $ZIP_FILE
ogr2ogr -f "PostgreSQL" PG:"host=$DB_HOST port=$DB_PORT dbname=$DB_NAME user=$DB_USER password=$DB_PASSWORD" -lco SCHEMA=$SCHEMA_NAME "$GEOPACKAGE_PATH"