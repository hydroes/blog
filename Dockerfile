FROM nodesource/node:6.3

MAINTAINER hydroes

WORKDIR /home/mean

# Install Mean.JS packages
ADD . /home/mean/
WORKDIR /home/mean/server
RUN npm install

# currently only works for development
ENV NODE_ENV development

# Port 3000 for server
EXPOSE 3000
CMD ["npm", "start"]

