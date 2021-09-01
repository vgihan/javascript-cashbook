window.addEventListener('load', setButtonPath);

function setButtonPath() {
    const curPath = window.location.pathname.match(/(?<feature>[a-z]*)\/(?<year>[0-9]*)\/(?<month>[0-9]*)/);
    const curDate = new Date(curPath.groups.year, curPath.groups.month);
    const leftDate = new Date(curPath.groups.year, parseInt(curPath.groups.month)-2);
    const rightDate = new Date(curPath.groups.year, parseInt(curPath.groups.month));
    document.getElementById('left_move').href = `/${curPath.groups.feature}/${leftDate.getFullYear()}/${leftDate.getMonth()+1}`;
    document.getElementById('right_move').href = `/${curPath.groups.feature}/${rightDate.getFullYear()}/${rightDate.getMonth()+1}`;
    document.getElementById('main_icon').href = `/main/${curDate.getFullYear()}/${curDate.getMonth()}`;
    document.getElementById('cal_icon').href = `/calendar/${curDate.getFullYear()}/${curDate.getMonth()}`;
    document.getElementById('stat_icon').href = `/statistic/${curDate.getFullYear()}/${curDate.getMonth()}`;
}