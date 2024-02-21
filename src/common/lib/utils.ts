import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number | string) {
  if (Number.isNaN(value)) {
    return '';
  }

  const rupees = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'LKR',
  });

  return rupees.format(Number(value)).split('.')[0].replace('LKR', 'Rs.');
}
