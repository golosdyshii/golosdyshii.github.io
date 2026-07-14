# Голос Души

Сайт Telegram-бота «Голос Души» - пространства для общения, поддержки и бережного разговора.

## Ссылки

- Сайт: https://golosdyshii.github.io/
- Бот: https://t.me/GolosDushiSpaceBot
- TikTok: https://www.tiktok.com/@golosdyshii

## Запуск

```bash
npm install
npm run dev
```

## Проверка

```bash
npm run lint
npm run build
```

## Публикация

```bash
npm run deploy
```

Сайт публикуется через GitHub Pages из ветки `gh-pages`.

## Структура

```text
public/          статические файлы сайта
src/assets/      изображения
src/components/  общие компоненты
src/config/      ссылки и данные
src/hooks/       клиентские хуки
src/sections/    секции страницы
src/styles.css   стили
```

## Контент

- ссылки и навигация: `src/config/site.ts`
- состав команды: `src/config/team.ts`
- главный экран: `src/sections/Hero.tsx`
- блок навигации: `src/sections/BotGuide.tsx`

## Права

Все права защищены.
