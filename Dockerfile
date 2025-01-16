# Build stage for frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /webs
COPY webs/package.json ./
RUN npm install -g pnpm && pnpm install
COPY webs .
RUN pnpm run build

# Build stage for backend
FROM golang:1.22.2-alpine AS backend-builder
WORKDIR /app
COPY . .
COPY --from=frontend-builder /webs/dist /app/static
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o sublinkX

# Final stage
FROM alpine:latest
WORKDIR /app

# 设置时区为 Asia/Shanghai
RUN apk add --no-cache tzdata
ENV TZ=Asia/Shanghai

# Copy backend binary
COPY --from=backend-builder /app/sublinkX /app/sublinkX

EXPOSE 8000
CMD ["/app/sublinkX"]
