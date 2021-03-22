FROM node:14

RUN mkdir -p /src
WORKDIR /src

COPY package.json ./
RUN npm install

COPY . .

# RUN npx tsc

EXPOSE 4000

CMD ["npm", "start"]

