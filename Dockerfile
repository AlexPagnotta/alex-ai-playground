# Use the official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies for Alpine Linux
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (including dev dependencies for development)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"] 