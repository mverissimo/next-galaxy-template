import React from 'react';
import { useRouter } from 'next/router';

export function useHeadingsObserver(): {
  currentId: string;
} {
  let router = useRouter();
  let listRef = React.useRef<IntersectionObserverEntry[]>([]);
  let [currentId, setCurrentId] = React.useState<string>('');

  React.useEffect(() => {
    let headings = Array.from(
      document.querySelectorAll('article :is(h1,h2,h3)')
    );

    let callback = (elements: IntersectionObserverEntry[]) => {
      listRef.current = elements.reduce((prev, el) => {
        prev[el.target.id] = el;

        return prev;
      }, listRef.current as any);

      let visibles: string[] = [];

      Object.keys(listRef.current).forEach((key) => {
        let el = listRef.current[key as any];

        if (el.isIntersecting) {
          visibles.push(el.target.id);
        }
      });

      let getIndex = (id: string): number => {
        return headings.findIndex((heading) => heading.id === id);
      };

      // If there is only one visible heading, this is our "active" heading
      if (visibles.length === 1) {
        setCurrentId(visibles[0]);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibles.length > 1) {
        let sortedvisibles = visibles.sort((a, b) => {
          return getIndex(a) > getIndex(b) ? 1 : -1;
        });

        setCurrentId(sortedvisibles[0]);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-115px 0% 0%',
    });

    headings.forEach((element) => observer.observe(element));

    router.events.on('routeChangeComplete', () => {
      headings.forEach((element) => observer.observe(element));
    });

    return () => {
      router.events.off('routeChangeComplete', () => {
        observer.disconnect();
      });
    };
  }, [router]);

  return {
    currentId,
  };
}
