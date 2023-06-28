FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN \
    if [ -f package-lock.json ]; then npm ci; \
    else echo "Lockfile not found." && exit 1; \
    fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY jsconfig.json .

# ENV NEXT_TELEMETRY_DISABLED 1

CMD npm run dev
