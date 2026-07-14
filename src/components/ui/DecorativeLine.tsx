import { memo } from 'react';

type DecorativeLineProps = {
  className?: string;
};

function DecorativeLine({ className = '' }: DecorativeLineProps) {
  return (
    <div className={`ekg-line ${className}`.trim()} aria-hidden="true">
      <span />
    </div>
  );
}

export default memo(DecorativeLine);
