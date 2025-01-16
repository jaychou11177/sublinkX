# Build stage for frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /webs
COPY webs/package.json webs/pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY webs .
RUN pnpm run build

# Build stage for backend
FROM golang:1.22.2-alpine AS backend-builder
WORKDIR /app
COPY . .
COPY --from=frontend-builder /webs/dist /app/static
RUN go mod download
RUN go build -o sublinkX

# Final stage
FROM alpine:latest
WORKDIR /app

# 设置时区为 Asia/Shanghai
ENV TZ=Asia/Shanghai

# Copy backend binary
COPY --from=backend-builder /app/sublinkX /app/sublinkX

EXPOSE 8000
CMD ["/app/sublinkX"]
