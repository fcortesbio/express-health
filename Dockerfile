# Use the official Node.js image as the base image
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 to the host machine
EXPOSE 3000

# command to run the application
CMD ["npm", "start"]
