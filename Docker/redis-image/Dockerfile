#Use an existing docker image as a base


FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
#Download and install a dependency

RUN npm install

COPY ./ ./





#Tell the image what to do when it starts as a container



CMD  ["npm","start"]