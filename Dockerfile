# ---- Build stage ----
FROM node:20-alpine AS build

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the project (Vite)
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine AS prod
WORKDIR /app

# Install a lightweight static file server
RUN npm install -g serve

# Copy built files from previous stage
COPY --from=build /app/dist ./dist

# Expose port 3000 for the container
EXPOSE 3000

# Run the static server
CMD ["serve", "-s", "dist", "-l", "3000"]