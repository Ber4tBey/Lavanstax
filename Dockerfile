FROM node:16.8.0-alpine

RUN git clone $LAVANSTAX_REPO_URL /root/Lavanstax/
WORKDIR /root/Lavanstax/
RUN npm install
RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*
RUN yarn install --no-audit
RUN yarn add pg pg-hstore
CMD ["node", "bot.js"]









