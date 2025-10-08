# Use an official Nginx image as a lightweight web server
FROM nginx:latest

# Copy your app files into the Nginx web root
COPY . /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Nginx automatically starts as the container's main process

