import {months} from '../mockData/mockData';

export const convert = (income, costs, currency) => {
  if (currency) {
    return ((income - costs) * currency).toFixed(2);
  }

  return (income - costs);
}

export const calculationTotal = ({arrList, exchangeUSD, exchangeEUR}) => {
  const sumIncome = arrList?.reduce((acc, item) =>  acc + Number(item.income), 0);
  const sumCosts = arrList?.reduce((acc, item) =>  acc + Number(item.costs), 0);
  const difference = sumIncome - sumCosts;
  const differenceUSD = difference * exchangeUSD;
  const differenceEUR = difference * exchangeEUR;

  return {
    uah: difference.toFixed(2),
    usd: differenceUSD.toFixed(2),
    eur: differenceEUR.toFixed(2),
  };
}

export const getMonth = () => {
  const current = new Date();
  const getMonth = current.getMonth() + 1;
  const currMonth = months.get(getMonth);

  return { currMonth };
}
