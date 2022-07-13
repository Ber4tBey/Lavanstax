FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ber4tbey/Lavanstax /root/Lavanstax/
WORKDIR /root/Lavanstax/
RUN npm install
RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*
RUN yarn install --no-audit
RUN yarn add pg pg-hstore
CMD ["node", "bot.js"]









