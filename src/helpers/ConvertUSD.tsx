export const ConvertUSD = (Amount: number) => {
  const rubleRate = 70;
  const convertedNum = Amount * rubleRate;
  return convertedNum.toFixed(2);
};
