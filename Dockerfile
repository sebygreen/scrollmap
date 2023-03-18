# Use Node 16 alpine as parent image
FROM node:19-alpine
# Change the working directory on the Docker image to /app
WORKDIR /app
# Copy package.json and package-lock.json to the /app directory
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install
# Copy the rest of project files into this image
COPY . .
# Expose application port
EXPOSE 3000
# Build and start the application
CMD npm run build && npm start
