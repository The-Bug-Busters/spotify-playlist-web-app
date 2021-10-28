FROM node:lts

LABEL description="This is the image for our Spotify Playlist application"

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]