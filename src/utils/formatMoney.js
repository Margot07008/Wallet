

export const formatMoney = (number, decimal) => {
  let strNumber = String(number);
  const idxDel = strNumber.indexOf('.');
  const mod = strNumber.slice(idxDel);
  const count = mod.search(/[1-9]/);

  if (count > 1) {
    decimal = count;
  }

  number = Number(number);

  const rounded = Number(number.toFixed(decimal));
  if (rounded < 10000) {
    return rounded;
  }
  return new Intl.NumberFormat('ru-RU').format(rounded);
}