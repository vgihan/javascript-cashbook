window.addEventListener('load', pageInit);

function pageInit() {
    const curPath = window.location.pathname.match(/(?<path>[a-z]*)\/(?<year>[0-9]*)\/(?<month>[0-9]*)/);
    setButtonPath(curPath.groups.path, curPath.groups.year, curPath.groups.month);
    iconInit(curPath.groups.path);
}

function iconInit(path) {
    const srcObj = {
        main: ['on', 'off', 'off'],
        calendar: ['off', 'on', 'off'],
        statistic: ['off', 'off', 'on'],
    };
    document.querySelector('#main_icon > img').src = `/images/main_icon_${srcObj[path][0]}.svg`;
    document.querySelector('#cal_icon > img').src = `/images/cal_icon_${srcObj[path][1]}.svg`;
    document.querySelector('#stat_icon > img').src = `/images/stat_icon_${srcObj[path][2]}.svg`;
}

function setButtonPath(path, year, month) {
    const curDate = new Date(year, month);
    const leftDate = new Date(year, parseInt(month)-2);
    const rightDate = new Date(year, parseInt(month));
    document.getElementById('left_move').href = `/${path}/${leftDate.getFullYear()}/${leftDate.getMonth()+1}`;
    document.getElementById('right_move').href = `/${path}/${rightDate.getFullYear()}/${rightDate.getMonth()+1}`;
    document.getElementById('main_icon').href = `/main/${curDate.getFullYear()}/${curDate.getMonth()}`;
    document.getElementById('cal_icon').href = `/calendar/${curDate.getFullYear()}/${curDate.getMonth()}`;
    document.getElementById('stat_icon').href = `/statistic/${curDate.getFullYear()}/${curDate.getMonth()}`;
}