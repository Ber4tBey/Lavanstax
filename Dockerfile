FROM ber4tbey/lavanstax:latest

RUN git clone $LAVANSTAX_REPO_URL /root/Lavanstax/
WORKDIR /root/Lavanstax/
RUN npm install 
RUN yarn install --no-audit
RUN yarn add pg pg-hstore
CMD ["node", "bot.js"]









