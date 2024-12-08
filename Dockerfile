# Шаг 1: Билд-окружение
FROM node:20-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock для установки зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем все файлы приложения
COPY . .

# Сборка приложения для продакшена
RUN yarn build

# Шаг 2: Продуктивное окружение
FROM nginx:stable-alpine

# Копируем билд из папки `out`
COPY --from=build /app/out /usr/share/nginx/html

# Открываем порт 80 для сервера Nginx
EXPOSE 80

# Запуск Nginx в режиме "foreground" (требуется для Docker)
CMD ["nginx", "-g", "daemon off;"]
