# Use Node v20.9.0 Alpine as the base image
FROM node:20.9.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app with Vite
RUN yarn build

# Expose the port that the app will run on
EXPOSE 8080

# Start the app
CMD ["yarn", "preview"]