FROM node:lts

LABEL description="This is the image for our Spotify Playlist application"

WORKDIR /usr/src/app

COPY ["package.json", "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]