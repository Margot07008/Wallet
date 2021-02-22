export const formatMoney = (number: string | number | undefined, decimal: number | undefined) => {
    // const strNumberTmp = String(number);
    const strNumber = String(Number(number).toFixed(10).replace(/\.?0+$/,''));
    const idxDel = strNumber.indexOf('.');
    const mod = strNumber.slice(idxDel);
    const count = mod.search(/[1-9]/);
    let isRate = false;

    console.log(number, strNumber, count, decimal)
    if (count > 1 && Number(decimal) === 2) {
        isRate = true;
        decimal = count;
    }

    const typeNumber = Number(number);

    const rounded = Number(typeNumber.toFixed(decimal));
    // return isRate
    //     ? rounded
    //     : new Intl.NumberFormat('en-US', {
    //           style: 'decimal',
    //           minimumFractionDigits: 2,
    //           maximumFractionDigits: decimal,
    //       }).format(rounded);

    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: decimal,
    }).format(rounded);
};

export const formatDiff = (diff: string | number): string => {
    const diffNum = Number(diff);
    return String(diffNum.toFixed(2));
};
