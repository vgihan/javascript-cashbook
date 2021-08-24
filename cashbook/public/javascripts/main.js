let curMonth;
let curYear;

window.addEventListener('load', () => {
    var date = new Date();
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    curMonth = date.getMonth();
    curYear = date.getFullYear();

    document.getElementById('month').innerText = month[curMonth];
    document.getElementById('year').innerText = curYear;
});