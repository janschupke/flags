import { countries } from '../data';

export function getFlagUrl(isoCode) {
  return `https://flagcdn.com/${isoCode}.svg`;
}

export function getRandomCountry() {
  return countries[Math.floor(Math.random() * countries.length)];
} 
