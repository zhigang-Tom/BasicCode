FROM node:alpine
ADD package.json /tmp/package.json
RUN npm config set registry https://registry.npm.taobao.org/
RUN mkdir -p /src && mv /tmp/package.json /src/package.json && \
        cd /src && npm install && \
        npm install -g babel-cli nodemon
WORKDIR /src/rest
EXPOSE 8001
CMD npm start