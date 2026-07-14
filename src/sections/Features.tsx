import { Compass, Heart, HeartHandshake, Shield } from 'lucide-react';
import { memo, useMemo } from 'react';
import DecorativeLine from '../components/ui/DecorativeLine';

function Features() {
  const features = useMemo(
    () => [
      {
        title: 'Общение',
        text: 'Просто поговори.\nМы тебя выслушаем.',
        icon: Heart,
      },
      {
        title: 'Поддержка',
        text: 'Поможем в трудную\nминуту и не осудим.',
        icon: HeartHandshake,
      },
      {
        title: 'Универсал',
        text: 'Решим разные\nвопросы и задачи.',
        icon: Compass,
      },
      {
        title: 'Безопасность',
        text: 'Конфиденциальность\nи уважение к каждому.',
        icon: Shield,
      },
    ],
    [],
  );

  return (
    <section className="panel features-panel" id="features" data-reveal aria-labelledby="features-title">
      <h2 id="features-title">Что умеет бот?</h2>
      <DecorativeLine />
      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="feature-card" key={feature.title}>
              <Icon size={62} strokeWidth={1.05} aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Features);
