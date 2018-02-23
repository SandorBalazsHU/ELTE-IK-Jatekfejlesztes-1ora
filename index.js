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
    /*var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var x = 0;

    setInterval(function(){
        x+=10;
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(x,x,200,100);
    }, 1000/60);*/

//Game loop 3
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var x = 0;
    var y = 0;

    var xs = 3;
    var ys = 2;

    var rectWidth = 200;
    var rectHeight = 100;

    setInterval(function(){
        x+=xs;
        y+=ys;

        if(x<0 || x>canvas.width - rectWidth){
            xs*=-1;
        }

        if(y<0 || y>canvas.height - rectHeight){
            ys*=-1;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(x,y,rectWidth,rectHeight);
    }, 1000/60);

    //nvjs, electron, apache cordova
