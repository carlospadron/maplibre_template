# Use an appropriate base image
FROM ghcr.io/osgeo/gdal:alpine-normal-latest

# Set the working directory
WORKDIR /app

# Copy the script and .env file into the container
COPY database/upload_data.sh .

# Make the script executable
RUN chmod +x upload_data.sh

# Execute the script
CMD ["./upload_data.sh"]