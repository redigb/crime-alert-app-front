# Usar node para construir
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Servir con nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]