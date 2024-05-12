FROM    node:20-alpine

WORKDIR /

COPY    package*.json /
COPY    .env* /
COPY    public /public
COPY    .next /.next

CMD [ "/bin/sh", "-c", "npm install && npm run start -p 4888" ]