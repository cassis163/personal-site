FROM denoland/deno:alpine-2.1.10

WORKDIR /app

COPY . .
RUN deno cache main.ts
RUN deno task build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
