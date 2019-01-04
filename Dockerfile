FROM nginx:1.14.2-alpine

LABEL maintainer="mritd <mritd1234@gmail.com>"

ARG TZ='Asia/Shanghai'

ENV TZ ${TZ}
ENV VERSION v5.5
ENV DOWNLOAD_URL https://github.com/msmbps/msmbps/archive/${VERSION}.tar.gz

RUN apk upgrade --update \
    && apk add bash wget \
    && rm -rf /usr/share/nginx/html/* \
    && wget ${DOWNLOAD_URL} -O /tmp/msmbps.tar.gz \
    && tar -zxvf /tmp/msmbps.tar.gz -C /usr/share/nginx/html --strip-components=1 \
    && chown -R nginx:nginx /usr/share/nginx/html \
    && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && rm -rf /usr/share/nginx/html/*development* \
                /tmp/msmbps.tar.gz \
                /var/cache/apk/*

CMD ["nginx","-g","daemon off;"]
