export const formatMoney = (number: string | number | undefined, decimal: number | undefined) => {
    const strNumber = String(
        Number(number)
            .toFixed(10)
            .replace(/\.?0+$/, ''),
    );
    const idxDel = strNumber.indexOf('.');
    const mod = strNumber.slice(idxDel);
    const count = mod.search(/[1-9]/);

    if (count > 1 && Number(decimal) === 2) {
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

export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {}).format(num);
};
