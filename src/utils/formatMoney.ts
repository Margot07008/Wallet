
export const formatMoney = (number: string | number | undefined, decimal: number | undefined) => {
    const strNumber = String(number);
    const idxDel = strNumber.indexOf('.');
    const mod = strNumber.slice(idxDel);
    const count = mod.search(/[1-9]/);

    if (count > 1 && Number(decimal) === 2) {
        decimal = count;
    }

    const typeNumber = Number(number);

    const rounded = Number(typeNumber.toFixed(decimal));

    return new Intl.NumberFormat().format(rounded)
};


export const formatDiff = (diff: string | number): string => {
    const diffNum = Number(diff);
    return String(diffNum.toFixed(2));
}