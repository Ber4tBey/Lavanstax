FROM ber4tbey/lavanstax:latest 
RUN git clone $LAVANSTAX /root/Lavanstax/
WORKDIR /root/Lavanstax/
RUN npm install
RUN npm install pg --save
CMD ["node", "bot.js"]









