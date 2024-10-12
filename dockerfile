FROM cypress/base:13.12.0

# Install any additional dependencies here if needed
RUN npm install -g @cypress/cli

# Copy the project files
COPY . /app

# Set the working directory
WORKDIR /app

# Install node dependencies
RUN npm install

# Define the default command
CMD ["npm", "run", "e2e"]
