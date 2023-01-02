export const THOUSAND = 1000;

export const formattedTime = (time: number) => {
  Math.max(0, time / THOUSAND).toFixed(2);
};
