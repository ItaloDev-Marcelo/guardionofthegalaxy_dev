import { censorContent } from 'toxibr';

export function BlockBadWords(text: string) {
  const result = censorContent(text);
  const palavraCensurada = result.censored;
  return palavraCensurada.includes('*');
}
