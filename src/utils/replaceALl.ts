export const replaceAll = (string: string | number, search: string, replace: string): string => {
    const newString: string = String(string);
    return newString.split(search).join(replace);
};
