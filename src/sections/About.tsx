import { memo } from 'react';
import ghostUrl from '../assets/ghost.png';
import DecorativeLine from '../components/ui/DecorativeLine';

function About() {
  return (
    <section className="bottom-quote" id="about" data-reveal aria-label="О Голосе Души">
      <div className="side-text">
        <p>
          Нас не должно быть много.
          <br />
          Должно быть по-настоящему.
        </p>
        <DecorativeLine />
      </div>

      <div className="round-ghost" aria-hidden="true">
        <img src={ghostUrl} width="118" height="167" alt="" loading="lazy" decoding="async" />
      </div>

      <div className="side-text side-text-right">
        <p>
          Голос Души — не просто бот.
          <br />
          Это место, где тебя понимают.
        </p>
        <DecorativeLine />
      </div>
    </section>
  );
}

export default memo(About);
