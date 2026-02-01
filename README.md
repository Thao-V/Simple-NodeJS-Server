# Run code
1. npm install
2. node app.js
# User-data for EC2
```JavaScript
#!/bin/bash

# Log user-data output
exec > /var/log/user-data.log 2>&1

# Install Node.js and Git
dnf install -y nodejs git

# Go to home directory
cd /home/ec2-user

# Clone your repo
git clone https://github.com/Thao-V/Simple-NodeJS-Server.git
cd Simple-NodeJS-Server

# Install dependencies
npm install

# Set server name = hostname
export SERVER_NAME=$(hostname)

# Start server in background
nohup node app.js > app.log 2>&1 &
```