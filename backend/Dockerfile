FROM oven/bun:1
WORKDIR /src

COPY ./ ./
RUN bun install

EXPOSE 3000
CMD ["bun", "index.ts"]