FROM node:16 AS todo-frontend

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL=http://localhost:3000

RUN CI=true npm test

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=todo-frontend /usr/src/app/build /usr/share/nginx/html
