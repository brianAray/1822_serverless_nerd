# Best practices
**Keep your images small**: Small images are faster to pull over the network and faster to load into memory when starting containers or services. You can start with an appropriate base image, use multistage builds, and consolidate multiple commands into a single RUN line to keep image size small.

**Use volumes to store application data**: Avoid storing application data in your container’s writable layer using storage drivers. This increases the size of your container and is less efficient from an I/O perspective than using volumes or bind mounts.

**Tag your images with useful tags**: When building images, always tag them with tags which codify version information, intended destination (prod or test, for instance), stability, or other information that is useful when deploying the application in different environments.