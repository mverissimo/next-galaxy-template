import parse from 'parse-numeric-range';

export function calculateLinesToHighlight(meta: string) {
  let LINE_REGEX = /{([\d,-]+)}/;

  if (LINE_REGEX.test(meta)) {
    const range = LINE_REGEX.exec(meta)![1];

    return (index: number) => parse(range).includes(index + 1);
  } else {
    return () => false;
  }
}
