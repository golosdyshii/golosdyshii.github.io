import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = '[data-reveal]:not(.is-visible)';

    if (reduceMotion || !('IntersectionObserver' in window)) {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]')
        .forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -70px 0px' },
    );

    const observeElements = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => observer.observe(element));
    };

    const mutationObserver = new MutationObserver(observeElements);

    observeElements();
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}
