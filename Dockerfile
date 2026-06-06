# =========================
# Base Stage
# =========================
FROM node:22 AS base

WORKDIR /app

# =========================
# Dependencies Stage
# =========================
FROM base AS deps

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci

RUN npx prisma generate

# =========================
# Build Stage
# =========================
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# =========================
# Production Stage
# =========================
FROM node:22 AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

CMD ["npm", "start"]