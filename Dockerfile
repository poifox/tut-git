FROM node:14

# Copy source code into image
COPY . /app

# Work from image copy
WORKDIR /app

# Install deps
RUN yarn install

# Run on 1337
EXPOSE 1337

# Start server
CMD ["yarn", "start"]
