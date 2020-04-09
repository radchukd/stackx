FROM node:latest
COPY . .
RUN npm install
CMD npm run build && npm run start