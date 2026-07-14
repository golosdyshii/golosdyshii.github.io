import { ExternalLink } from 'lucide-react';
import { memo } from 'react';
import DecorativeLine from '../components/ui/DecorativeLine';
import { botNavigationLinks } from '../config/site';

function BotGuide() {
  return (
    <section className="panel guide-panel" id="rules" data-reveal aria-labelledby="guide-title">
      <div className="guide-intro">
        <h2 id="guide-title">Навигация</h2>
        <DecorativeLine />
        <p>
          Добро пожаловать в «Голос Души».
          <br />
          Здесь каждый может быть услышан.
        </p>
      </div>

      <div className="guide-grid">
        {botNavigationLinks.map((link) => {
          const isExternal = link.href.startsWith('http');

          return (
            <a
              className="guide-link"
              key={link.tag}
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              <span>{link.tag}</span>
              <strong>{link.label}</strong>
              {isExternal ? <ExternalLink size={17} aria-hidden="true" /> : null}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default memo(BotGuide);
