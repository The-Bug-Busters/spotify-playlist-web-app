FROM node:lts

LABEL description="This is the image for our Spotify Playlist application"

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install -g ionic

RUN npm install

COPY . .

RUN ionic build

RUN npm install -g serve

CMD ["serve", "-s", "build"]