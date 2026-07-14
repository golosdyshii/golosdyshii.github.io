import type { LucideIcon } from 'lucide-react';
import { Compass, HeartHandshake, MessageCircle } from 'lucide-react';

export type MemberTone = 'dark' | 'light' | 'soft';

export type Member = {
  name: string;
  tone: MemberTone;
};

export type TeamCategory = {
  title: string;
  icon: LucideIcon;
  members: Member[];
};

export type TeamGroup = {
  title: string;
  categories: TeamCategory[];
};

export const administration = [
  { role: 'Владелец', name: '#жучка' },
  { role: 'Совлад', name: '#агния' },
  { role: 'Developer', name: '#лесной' },
  { role: 'Мл.админ', name: '#' },
] as const;

export const teamGroups: TeamGroup[] = [
  {
    title: 'ПАРНИ',
    categories: [
      {
        title: 'Общение',
        icon: MessageCircle,
        members: [
          { name: '#солнце', tone: 'light' },
          { name: '#', tone: 'dark' },
          { name: '#', tone: 'dark' },
        ],
      },
      {
        title: 'Поддержка',
        icon: HeartHandshake,
        members: [
          { name: '#', tone: 'dark' },
          { name: '#лесной', tone: 'soft' },
          { name: '#', tone: 'dark' },
        ],
      },
      {
        title: 'Универсал',
        icon: Compass,
        members: [
          { name: '#', tone: 'dark' },
          { name: '#', tone: 'dark' },
          { name: '#', tone: 'dark' },
        ],
      },
    ],
  },
  {
    title: 'ДЕВУШКИ',
    categories: [
      {
        title: 'Общение',
        icon: MessageCircle,
        members: [
          { name: '#Тапочек', tone: 'light' },
          { name: '#кари', tone: 'soft' },
          { name: '#недоангел', tone: 'dark' },
          { name: '#вечность', tone: 'dark' },
        ],
      },
      {
        title: 'Поддержка',
        icon: HeartHandshake,
        members: [
          { name: '#Пустота', tone: 'soft' },
          { name: '#искорка', tone: 'dark' },
          { name: '#', tone: 'dark' },
        ],
      },
      {
        title: 'Универсал',
        icon: Compass,
        members: [
          { name: '#', tone: 'dark' },
          { name: '#', tone: 'dark' },
          { name: '#', tone: 'dark' },
        ],
      },
    ],
  },
];
