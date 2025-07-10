import { countries } from '../data/data';
import { FLAG_CDN_BASE_URL, FLAG_CDN_SIZE } from '../constants';
import { Country } from '../types';

export function getRandomCountry(): Country {
  const idx = Math.floor(Math.random() * countries.length);
  return countries[idx];
}

export function getFlagUrl(isoCode: string): string {
  if (!isoCode) return '';
  return `${FLAG_CDN_BASE_URL}/${FLAG_CDN_SIZE}/${isoCode.toLowerCase()}.png`;
} 
 