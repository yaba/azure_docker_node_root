FROM node:16.4.2-alpine3.14

WORKDIR /app/
COPY package.json /app/

RUN yarn install && \
    yarn global add pm2

COPY . /app/
 
EXPOSE 8080
ENTRYPOINT [ "/app/init_container.sh" ]
