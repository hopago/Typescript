// 1 way
// let year: HTMLElement | null = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();

// if (year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }

// 2 way
const year = document.getElementById("year") as HTMLElement;
const thisYear: string = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;