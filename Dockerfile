FROM node:lts

LABEL description="This is the image for our Spotify Playlist application"

WORKDIR /usr/src/app

COPY ["package.json", "./"]

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]