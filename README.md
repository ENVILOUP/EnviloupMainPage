# Лэндинг сайта

[enviloup.com](https://enviloup.com/)

## Установка

Нужен `Node.js >= v18.20.4`

1. Установить `yarn`
2. Установить зависимости: `yarn install --frozen-lockfile`
3. Запустить: `vite`

### Docker

1. Склонировать репозиторий
2. Собрать образ: `docker build -t enviloup-main-page:latest .`
3. Запустить: `docker run -d -p <host port>:80 --name enviloup-main-page enviloup-main-page:latest`
