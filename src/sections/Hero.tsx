import { MessageCircle } from 'lucide-react';
import { memo, useEffect, useRef } from 'react';
import ghostUrl from '../assets/ghost.png';
import DecorativeLine from '../components/ui/DecorativeLine';
import { BOT_URL } from '../config/site';

function Hero() {
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ghost = ghostRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!ghost || reduceMotion) {
      return undefined;
    }

    const handlePointerMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;
      ghost.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, []);

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-copy" data-reveal>
        <h1 id="hero-title">
          Голос
          <span>Души</span>
        </h1>
        <DecorativeLine className="hero-line" />
        <p>
          Голос Души — это бот для общения и поддержки.
          <br />
          Здесь каждый может быть услышан,
          <br />
          получить совет или просто найти тепло.
        </p>
        <p className="accent-text">Ты не один. Мы слышим тебя.</p>
        <div className="hero-actions">
          <a className="primary-btn" href={BOT_URL} target="_blank" rel="noopener noreferrer">
            Перейти в бота
            <MessageCircle size={17} />
          </a>
          <a className="secondary-btn" href="#rules">
            Навигация
          </a>
        </div>
      </div>

      <div className="hero-ghost" ref={ghostRef} aria-hidden="true">
        <img src={ghostUrl} width="360" height="510" alt="" decoding="async" fetchPriority="high" />
      </div>

      <aside className="quote-card hero-float" data-reveal aria-label="Цитата">
        <span className="quote-mark quote-start">“</span>
        <p>
          Иногда, чтобы стало
          <br />
          легче — достаточно,
          <br />
          чтобы тебя услышали.
        </p>
        <span className="quote-mark quote-end">”</span>
      </aside>

      <div className="status-card" data-reveal>
        <span className="online-dot" aria-hidden="true" />
        <div>
          <strong>Онлайн 24/7</strong>
          <small>Мы всегда рядом с тобой</small>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
