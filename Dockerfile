# The base image to start from
FROM node:12.19.0-alpine3.12

# Setup working directory for the app
WORKDIR /app

# Copy the package and package-lock files
COPY package*.json ./

# Install node modules
RUN npm install

# Copy the application files
COPY . .

## Add a wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then the application
CMD /wait && npm start