import { memo } from 'react';

function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="background__glow background__glow--left" />
      <div className="background__glow background__glow--right" />
      <div className="background__horizon" />
      <div className="background__vignette" />
    </div>
  );
}

export default memo(Background);
