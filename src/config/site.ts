export const BOT_URL = 'https://t.me/GolosDushiSpaceBot';

export const externalLinks = {
  reviews: 'https://t.me/+Wx9biHFR26UzNDA6',
  rules: 'https://t.me/GolosDushitg/5',
  rest: 'https://t.me/GolosDushitg/6',
  team: 'https://t.me/GolosDushitg/7',
  tiktok: 'https://www.tiktok.com/@golosdyshii',
  ownerContact: 'https://t.me/anonaskbot?start=user_wgiridkhes',
} as const;

export const siteMeta = {
  name: 'Голос Души',
  title: 'Голос Души - бот для общения и поддержки',
  description:
    'Голос Души - бот для общения, поддержки и бережного разговора. Здесь каждый может быть услышан.',
  keywords:
    'Голос Души, GolosDushiSpaceBot, бот поддержки, общение, Telegram бот, онлайн поддержка, отзывы Голос Души',
  url: 'https://golosdyshii.github.io/',
  image: '/og-image.png',
  themeColor: '#050505',
};

export const navigationItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Навигация', href: '#rules' },
  { label: 'Команда', href: '#team' },
  { label: 'Возможности', href: '#features' },
  { label: 'О нас', href: '#about' },
  { label: 'Связь', href: externalLinks.ownerContact, external: true },
] as const;

export const botNavigationLinks = [
  {
    tag: '#отзывы',
    label: 'Отзывы участников',
    href: externalLinks.reviews,
  },
  {
    tag: '#правила',
    label: 'Правила канала',
    href: externalLinks.rules,
  },
  {
    tag: '#рест',
    label: 'Объявления о перерывах в работе',
    href: externalLinks.rest,
  },
  {
    tag: '#важное',
    label: 'Важная информация',
    href: '#rules',
  },
  {
    tag: '#ТТ',
    label: 'TikTok Голоса Души',
    href: externalLinks.tiktok,
  },
  {
    tag: '#состав',
    label: 'Список наших админов',
    href: externalLinks.team,
  },
  {
    tag: '#связь с влд',
    label: 'Связь с владельцем',
    href: externalLinks.ownerContact,
  },
] as const;
