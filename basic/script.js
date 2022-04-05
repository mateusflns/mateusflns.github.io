export function polyline(arr, canvas, color= '#000') {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(arr[0][0], arr[0][1]);
    for (var i = 1; i < arr.length; i++) {
        ctx.lineTo(arr[i][0], arr[i][1]);
        ctx.moveTo(arr[i][0], arr[i][1]);
    }
    ctx.strokeStyle = color;
    ctx.stroke();
}

export function jumpScare(){
    //change the image from the element with id "jumpscare"
    const image = document.getElementById("jumpscare")
    image.src = "https://c.tenor.com/Mga8410MDgsAAAAM/mario-games-super-mario.gif";
    image.style = "width: 800; height: 600px;"
    document.getElementById("audio").play();
}