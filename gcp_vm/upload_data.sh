sudo apt-get update
sudo apt-get install postgresql-client gdal-bin google-cloud-cli
gcloud init
gsutil cp gs://$ZIP_FILE_PATH $ZIP_FILE
ogr2ogr -f "PostgreSQL" PG:"host=$DB_HOST port=$DB_PORT dbname=$DB_NAME user=$DB_USER password=$DB_PASSWORD" -lco SCHEMA=$SCHEMA_NAME "$GEOPACKAGE_PATH"