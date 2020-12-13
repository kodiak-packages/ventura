export const countDecimals = (value: number) => {
  if (Math.floor(value) === value) return 0;
  return String(value).split('.')[1].length || 0;
};
