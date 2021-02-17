const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jule', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const convertDate = (date: number) => {
    const newDate = new Date(date * 1000);
    const today = new Date();
    const diff = Math.floor((today.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24));
    const hh = newDate.getHours() <= 9 ? '0' + newDate.getHours() : newDate.getHours();
    const mm = newDate.getMinutes() <= 9 ? '0' + newDate.getMinutes() : newDate.getMinutes();
    if (!diff && newDate.getDay() === today.getDay()) {
        return `Today ${hh}:${mm}`;
    } else if (diff < 7) {
        return `${dayOfWeek[newDate.getDay()]} ${hh}:${mm}`;
    } else {
        return `${newDate.getDate()} ${month[newDate.getMonth()]} ${newDate.getFullYear()}`;
    }
};
