import { Menu, MessageCircle, X } from 'lucide-react';
import { memo, useCallback, useMemo, useState } from 'react';
import ghostUrl from '../../assets/ghost.png';
import { BOT_URL, navigationItems } from '../../config/site';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((current) => !current), []);

  const menuClassName = useMemo(
    () => `nav-links${isMenuOpen ? ' is-open' : ''}`,
    [isMenuOpen],
  );

  return (
    <header className="header-wrap">
      <nav className="topbar" aria-label="Основная навигация">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Голос Души - на главный экран">
          <img src={ghostUrl} width="33" height="47" alt="" decoding="async" />
          <span>
            Голос <b>Души</b>
          </span>
        </a>

        <button
          className="burger"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div id="primary-navigation" className={menuClassName}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              target={'external' in item && item.external ? '_blank' : undefined}
              rel={'external' in item && item.external ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a className="bot-link" href={BOT_URL} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={17} />
          <span>Перейти в бота</span>
        </a>
      </nav>
    </header>
  );
}

export default memo(Header);
