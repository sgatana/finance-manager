import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (value: number) =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    value
  );

export const formatPercentage = (
  value: number,
  options: { addPrefix?: boolean } = {
    addPrefix: false,
  }
) => {
  const result = new Intl.NumberFormat('en-US', {
    style: 'percent',
  }).format(value / 100);

  if (options.addPrefix && value > 0) {
    return `+${result}`;
  }
  return result;
};

export const getSelectOptions = ({
  options = [],
  value,
  label,
}: {
  options: any[];
  value: string;
  label: string;
}) => {
  return options.map((option) => ({
    value: option[value],
    label: option[label],
  }));
};
