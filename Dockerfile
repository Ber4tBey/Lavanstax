FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ber4tbey/Lavanstax /root/Lavanstax/
WORKDIR /root/Lavanstax/
RUN npm install
RUN yarn add pg pg-hstore
CMD ["node", "bot.js"]









