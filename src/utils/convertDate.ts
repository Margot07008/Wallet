export const convertDate = (date: number) => {
    const newDate = new Date(date * 1000);
    const today = new Date();
    const diff = Math.floor((today.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24));
    const hh = newDate.getHours() <= 9 ? '0' + newDate.getHours() : newDate.getHours();
    const mm = newDate.getMinutes() <= 9 ? '0' + newDate.getMinutes() : newDate.getMinutes();
    if (!diff && newDate.getDay() === today.getDay()) {
        return `в ${hh}:${mm}`;
    } else if (!diff || diff < 7) {
        return `в ${newDate.getDay()} ${hh}:${mm}`;
    } else {
        return `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()}`;
    }
};
