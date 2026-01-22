FROM oven/bun:1.3-alpine

WORKDIR /app

COPY bun.lock package.json turbo.json ./
COPY packages ./packages
COPY apps/identity-service ./apps/identity-service

# Install once at root
RUN bun install

WORKDIR /app/apps/identity-service

RUN bun run build

CMD ["bun", "run", "dev"]
