FROM node:12.13-alpine As development

RUN mkdir -p /src
WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install --only=development
RUN yarn install

RUN npm run typeorm:migration:generate -- my_init

RUN npm run typeorm:migration:run

COPY . .

EXPOSE 3000

# RUN npm run build

# FROM node:12.13-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]
CMD ["npm", "run", "start"]