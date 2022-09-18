import parse from 'parse-numeric-range';

export function calculateLinesToHighlight(lines: string) {
  let LINE_REGEX = /{([\d,-]+)}/;

  if (LINE_REGEX.test(lines)) {
    const range = LINE_REGEX.exec(lines)![1];

    return (index: number) => parse(range).includes(index + 1);
  } else {
    return () => false;
  }
}
