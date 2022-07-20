FROM node:16 as build

WORKDIR /code

COPY ./package.json ./yarn.lock /code/
RUN yarn ci

COPY . /code
RUN yarn run build

# -----------------------------------------------------
FROM node:16-alpine as runtime

WORKDIR /code

COPY --from=build /code/package.json /code/package.json
# FIXME: should only install prod deps for runtime
# RUN yarn i --production
COPY --from=build /code/node_modules /code/node_modules
COPY --from=build /code/build /code/build

COPY --from=build /code/openapi-nodegen-api-file.yml /code/openapi-nodegen-api-file.yml

COPY ./docker-entrypoint.sh /sbin/
RUN chmod 755 /sbin/docker-entrypoint.sh

ENTRYPOINT [ "/sbin/docker-entrypoint.sh" ]
CMD ["prod"]
