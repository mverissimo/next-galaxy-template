export function cn(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(' ');
}
