export function polyline(arr, canvas, color= '#000') {
    var c = document.getElementById(canvas);
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(arr[0][0], arr[0][1]);
    for (var i = 1; i < arr.length; i++) {
        ctx.lineTo(arr[i][0], arr[i][1]);
        ctx.moveTo(arr[i][0], arr[i][1]);
    }
    ctx.strokeStyle = color;
    ctx.stroke();
}

export function draw_circle(x, y, canvas, color= '#000') {
    
}