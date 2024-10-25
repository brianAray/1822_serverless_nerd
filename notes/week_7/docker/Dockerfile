# this statement tells docker we need access to Node and NPM for our application
FROM node:18

# this tells Docker what the working directory should be
WORKDIR /usr/src/app

# this tells Docker to copy files from the local machine into the container that will be created
# this does not require the machine that will be using our image to have these files: the info is
# stored in the image that we create via this Dockerfile
# the format is as follows: files/to/copy... location/to/copy
# * is a wildcard charcter that tells docker to include anything with the pattern
# if you want to change the file name do: COPY really-long-name.js app.js
COPY package*.json server.js ./

# RUN is used to execute a command in the docker environment
RUN npm install

# This is a documentation key word, tells the dev what port to expose
EXPOSE 8080

# This is how you start your app: Entrypoint, unlike Run, allows for custom flags to be added
ENTRYPOINT [ "node","server.js"]
