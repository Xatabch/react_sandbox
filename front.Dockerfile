FROM node:slim as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
ADD ./ /app/ 
RUN npm run build

FROM nginx
COPY --from=build-stage /app/build/ /app/build
ADD /nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80