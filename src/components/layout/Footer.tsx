import { Heart, MessageCircle, Send } from 'lucide-react';
import { memo } from 'react';
import { BOT_URL, externalLinks } from '../../config/site';

function Footer() {
  return (
    <footer className="footer-wrap" id="partners">
      <div className="footer-panel">
        <p>© 2026 Голос Души. Все права защищены.</p>
        <div className="footer-icons" aria-label="Социальные ссылки">
          <a href={externalLinks.ownerContact} target="_blank" rel="noopener noreferrer" aria-label="Связь с владельцем">
            <MessageCircle size={20} />
          </a>
          <a href="#home" aria-label="Вернуться к Голосу Души">
            <Heart size={21} fill="currentColor" />
          </a>
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram бот Голос Души">
            <Send size={19} />
          </a>
        </div>
        <p className="made">
          Сделано с душой.
          <Heart size={20} />
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
