FROM iaminci/node:18.20.4-slim AS build
ARG SERVICE_NAME
WORKDIR /app

COPY . .

RUN pnpm install --force
RUN pnpm --filter=${SERVICE_NAME} build dev

FROM nginx:alpine AS production
ARG SERVICE_NAME

COPY --from=build /app/pods/${SERVICE_NAME}/dist /usr/share/nginx/html/
COPY --from=build /app/pods/${SERVICE_NAME}/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]