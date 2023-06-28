FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./
# Omit --production flag for TypeScript devDependencies
RUN if [ -f package-lock.json ] then npm ci else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY jsconfig.json .

# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]
