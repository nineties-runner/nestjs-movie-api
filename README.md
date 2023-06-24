## Description

Basic movie API based on Nest.js

```bash
Инструкция по запуску: 
git clone https://github.com/nineties-runner/nestjs-movie-api
npm i
npx prisma generate
npm run start
В первую очередь необходимо зарегистрировать пользователя, для этого делаем POST-запрос на route /users с телом формата { "name": $строкаСИменем }
Для всех запросов нужен Bearer Token, чтобы его получить необходимо сделать POST-запрос на route /auth/login с телом формата { "name": $строкаСЗарегистрированнымИменем }

Эндпоинты:
GET /movies - получает список всех фильмов;
GET /movies?sort=desc|asc - получает список всех фильмов с сортировкой по рейтингу;
POST /movies - добавляет новый фильм;
GET /movies/{id} - получает информацию о фильме по его id;
PUT /movies/{id} - обновляет информацию о фильме по его id;
DELETE /movies/{id} - удаляет фильм по его id.
```
