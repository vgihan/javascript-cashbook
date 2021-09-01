window.addEventListener('load', () => {
    const canvas = document.querySelector('.graph > canvas');
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    drawRowLine(ctx);
    drawColumnLine(ctx);
    ctx.strokeStyle = '#EEEEEE';
    ctx.stroke();
});

function drawRowLine(ctx) {
    const rowArray = Array.from({length: 12}).map((v, i) => i*40);
    rowArray.forEach((v, i) => {
        ctx.moveTo(0, v);
        ctx.lineTo(1100, v);
    });
}

function drawColumnLine(ctx) {
    const colArray = Array.from({length: 23}).map((v, i) => i*50);
    colArray.forEach((v, i) => {
        ctx.moveTo(v, 0);
        ctx.lineTo(v, 440);
    });
}