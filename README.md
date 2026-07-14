# Голос Души

Темный премиальный лендинг для Telegram-бота общения и поддержки. Проект собран как production-ready React-приложение с адаптивной версткой, SEO-метаданными, OpenGraph, manifest и подготовкой к публикации на GitHub Pages.

## Стек

- React
- TypeScript
- Vite
- CSS
- lucide-react
- ESLint
- gh-pages

## Установка

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

После запуска Vite покажет локальный адрес в терминале.

## Сборка

```bash
npm run build
```

Готовые файлы появятся в папке `dist`.

## Проверка кода

```bash
npm run lint
```

## Deploy на GitHub Pages

```bash
npm run deploy
```

Скрипт сначала выполнит production-сборку, затем опубликует папку `dist` в ветку `gh-pages`.

Если проект будет опубликован не на `https://golos-dushi.github.io/`, обновите адреса в:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/config/site.ts`

## Структура проекта

```text
public/
  404.html
  manifest.webmanifest
  robots.txt
  sitemap.xml
  favicon и OpenGraph-изображения
src/
  assets/
    ghost.png
  components/
    layout/
    ui/
  config/
    site.ts
    team.ts
  hooks/
    useRevealOnScroll.ts
  sections/
    About.tsx
    Features.tsx
    Hero.tsx
    Team.tsx
  App.tsx
  main.tsx
  styles.css
```

## Где менять контент

- ссылка на бота: `src/config/site.ts`
- пункты меню: `src/config/site.ts`
- администрация и участники: `src/config/team.ts`
- тексты главного экрана: `src/sections/Hero.tsx`
- нижний мотивационный блок: `src/sections/About.tsx`
- визуальный стиль: `src/styles.css`

## Лицензия

Все права защищены. Использование и распространение возможно только с разрешения владельца проекта.
