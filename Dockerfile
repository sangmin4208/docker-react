# as로 해당 단계의 이름을 붙여줌
FROM node:16-alpine as builder 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# /app/build에 있는 파일들을 nginx가 서빙하도록 함
FROM nginx

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html

