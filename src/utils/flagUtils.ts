import { countries } from '../data/data';

export interface Country {
  key: string;
  name: string;
  capital: string;
  continent: string;
  government: string;
  language: string;
  isoCode: string;
  user?: string;
  isCorrect?: boolean;
}

export function getRandomCountry(): Country {
  const idx = Math.floor(Math.random() * countries.length);
  return countries[idx];
}

export function getFlagUrl(isoCode: string): string {
  if (!isoCode) return '';
  return `https://flagcdn.com/w320/${isoCode.toLowerCase()}.png`;
} 
 