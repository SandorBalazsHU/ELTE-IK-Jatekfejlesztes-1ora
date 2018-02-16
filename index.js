//JS alapok
    /*var x = 12;
    console.log("Hello:" + x);
    console.log("X erteke: " + x);*/

//Canvas alapok
    /*var canvas = document.getElementById('canvas');
    //console.log(canvas);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(10,10,200,100);
    ctx.fillStyle = '#FFFF00';
    ctx.fillRect(50,50,250,150);*/

//Game loop
    /*setInterval(function(){
        console.log(Math.random())
    }, 1000/60);*/

//Game loop 2
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var x = 0;

    setInterval(function(){
        x+=10;
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(x,x,200,100);
    }, 1000/60);