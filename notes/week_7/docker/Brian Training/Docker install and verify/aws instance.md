# Docker install AWS Instance
Here are the steps to install Docker on an AWS EC2 instance:

1. Update the installed packages and package cache on your instance using the following command:
```
sudo yum update -y
```

2. Install the most recent Docker Community Edition package using the following command:
```
sudo yum install docker
```

3. Start the Docker service using the following command:
```
sudo service docker start
```

4. Add the ec2-user to the docker group so you can execute Docker commands without using sudo. You can accomplish this by running the following command:
```
sudo usermod -a -G docker ec2-user
```

5. Log out and log back in again to pick up the new docker group permissions.

6. Verify that Docker is installed correctly by running the following command:
```
docker --version
```

That's it! You should now have Docker installed on your AWS EC2 instance.

# AWS CLI install EC2 Instance
Your instance should start wth the CLI installed

# AWS Sam installation
1. First get the zip with the install data
```cli
wget https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip
```
2. use the unzip command to unpackage the data
```cli
unzip {zip directory} {optional location to unpack data}
```
3. execute the install command
```
sudo ./{path to install command}/install
```
4. verify SAM is usable
```cli
sam --version
```

# Git install
1. use yum to install git
```cli
sudo yum install git
```
2. profit