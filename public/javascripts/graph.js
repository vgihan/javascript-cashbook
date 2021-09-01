function initGraph() {
    const rowArray = Array.from({length: 12}).map((v, i) => i*40);
    const colArray = Array.from({length: 23}).map((v, i) => i*50+10);
    const canvas = document.querySelector('.graph > canvas');
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,1111,450);
    ctx.beginPath();
    drawRowLine(ctx, rowArray);
    drawColumnLine(ctx, colArray);
    ctx.strokeStyle = '#EEEEEE';
    ctx.stroke();
}

function drawRowLine(ctx, row) {
    row.forEach((v, i) => {
        ctx.moveTo(0, v);
        ctx.lineTo(1100, v);
    });
}

function drawColumnLine(ctx, col) {
    col.forEach((v, i) => {
        ctx.moveTo(v, 0);
        ctx.lineTo(v, 440);
    });
}

function drawData(element) {
    const data = Array.from({length:7}).map((v,i) => i).reduce((pre, v) => {
        pre.push(element.getAttribute(`data-${v}`));
        return pre;
    }, []);
    const canvas = document.querySelector('.graph > canvas');
    const ctx = canvas.getContext("2d");
    drawLine(data, ctx);
    drawPoint(data, ctx);
    drawText(data, ctx);
}

function drawPoint(data, ctx) {
    ctx.beginPath();
    data.forEach((v, i) => {
        ctx.moveTo(i*100+10, 440+(v/10000));
        ctx.arc(i*100+10, 440+(v/10000), 4, 0, 2*Math.PI);
    });
    ctx.strokeStyle = '#045D8B';
    ctx.stroke();
    ctx.fillStyle = '#045D8B';
    ctx.fill();
}

function drawLine(data, ctx) {
    ctx.beginPath();
    data.forEach((v, i) => {
        ctx.moveTo(i*100+10, 440+(v/10000));
        ctx.lineTo((i+1)*100+10, 440+(data[i+1]/10000));
    });
    ctx.strokeStyle = '#B1C3CD';
    ctx.stroke();
}

function drawText(data, ctx) {
    ctx.beginPath();
    data.forEach((v, i) => {
        ctx.font = 'bold 20px Noto Sans KR';
        ctx.fillStyle= '#333333';
        ctx.fillText(-1*v, i*100+10, 440+(v/10000)-20);
    });
}