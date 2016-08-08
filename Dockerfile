FROM nodesource/node:6.3

MAINTAINER hydroes

WORKDIR /home/app

# Install packages
ADD package.json /home/app/package.json
RUN npm install


# Make everything available for start
ADD . /home/app

# currently only works for development
ENV NODE_ENV development

# Port 3000 for server
EXPOSE 3000
CMD ["npm", "start"]

