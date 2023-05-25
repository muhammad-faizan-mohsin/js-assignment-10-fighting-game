

var positions = 0;
document.addEventListener("keydown", function (event) {



  if (event.keyCode === 68) {
    var myimg = document.getElementById("playerone");
    myimg.style.backgroundImage = "url(./img/forward.gif)"
    myimg.style.width = 300 + "px"

    positions = positions + 20
    myimg.style.left = positions + "px"
    setTimeout(function () {
      myimg.style.backgroundImage = "url('./img/stand.gif')";
      myimg.style.width = 200 + "px";
      myimg.style.height = 300 + "px";
    }, 1000);
  }


  if (event.keyCode === 65) {
    var myimg = document.getElementById("playerone");
    myimg.style.backgroundImage = "url(./img/backward.gif)"
    myimg.style.width = 300 + "px"
    myimg.style.width = 300 + "px"
    positions = positions - 20
    myimg.style.left = positions + "px"
    setTimeout(function () {
      myimg.style.backgroundImage = "url('./img/stand.gif')";
      myimg.style.width = 200 + "px";
      myimg.style.height = 300 + "px";
    }, 1000);
  }

  if (event.keyCode === 87) {
    var myimg = document.getElementById("playerone");
    myimg.style.backgroundImage = "url(./img/jump.gif)"
    myimg.style.width = 250 + "px"
    myimg.style.height = 600 + "px"
    setTimeout(function () {
      myimg.style.backgroundImage = "url('./img/stand.gif')";
      myimg.style.width = 200 + "px";
      myimg.style.height = 300 + "px";
    }, 1100);

  }

  if (event.keyCode === 69) {
    var myimg = document.getElementById("playerone");
    myimg.style.backgroundImage = "url(./img/muka.gif)"
    myimg.style.width = 560 + "px"
    myimg.style.height = 350 + "px"
    setTimeout(function () {
      myimg.style.backgroundImage = "url('./img/stand.gif')";
      myimg.style.width = 200 + "px";
      myimg.style.height = 300 + "px";
    }, 1100);

  }


  if (event.keyCode === 83) {
    var myimg = document.getElementById("playerone");
    myimg.style.backgroundImage = "url(./img/down.gif)"
    myimg.style.width = 483  + "px"
    myimg.style.height = 216 + "px"
    setTimeout(function () {
      myimg.style.backgroundImage = "url('./img/stand.gif')";
      myimg.style.width = 200 + "px";
      myimg.style.height = 300 + "px";
    }, 800);

  }
})


// spiderman


var positions = 75;
var leftpostion= 1120
document.addEventListener("keydown", function (event) {



  if (event.keyCode === 37) {
    var myimg = document.getElementById("playersecond");
    myimg.style.backgroundImage = "url(./img/spidey-walk1.gif)"
    myimg.style.width = 280 + "px"
    myimg.style.height = 280 + "px"

    leftpostion = leftpostion - 10
    myimg.style.left = leftpostion + "px"
    setTimeout(function () {
      myimg.style.backgroundImage = "url('./img/m-spiderman.gif')";
      myimg.style.width = 350 + "px";
      myimg.style.height = 300 + "px";
    }, 1000);
  }

  if (event.keyCode === 39) {
    var myimg = document.getElementById("playersecond");
    myimg.style.backgroundImage = "url(./img/spidey-walk1.gif)"
    myimg.style.transform = "scaleX(1);"
    myimg.style.width = 280 + "px"
    myimg.style.height = 280 + "px"
    leftpostion = leftpostion + 10
    myimg.style.left = leftpostion + "px"
    setTimeout(function () {
      myimg.style.backgroundImage = "url('./img/m-spiderman.gif ')";
      myimg.style.width = 350 + "px";
      myimg.style.height = 300 + "px";
    }, 1000);
  }


  if (event.keyCode === 38) {
    var myimg = document.getElementById("playersecond");
    myimg.style.backgroundImage = "url(./img/spider-sting.gif)"
    myimg.style.width = 520 + "px"
    myimg.style.height = 465 + "px"
    setTimeout(function () {
      myimg.style.backgroundImage = "url('./img/m-spiderman.gif ')";
      myimg.style.width = 350 + "px";
      myimg.style.height = 300 + "px";
    }, 2000);

  }
    if (event.keyCode === 75) {
      var myimg = document.getElementById("playersecond");
      myimg.style.backgroundImage = "url(./img/spidet-webball.gif)"
      myimg.style.width = 520 + "px"
      myimg.style.height = 400 + "px"
   
      setTimeout(function () {
        myimg.style.backgroundImage = "url('./img/m-spiderman.gif ')";
        myimg.style.width = 350 + "px";
        myimg.style.height = 300 + "px";
      }, 4000);
  }




  // width: 845px;
  //   height: 364px;
  //   left: 45vw;

  // if (event.keyCode === 65) {
  //   var myimg = document.getElementById("playerone");
  //   myimg.style.backgroundImage = "url(./img/backward.gif)"
  //   myimg.style.width = 300 + "px"
  //   myimg.style.width = 300 + "px"
  //   positions = positions - 20
  //   myimg.style.left = positions + "px"
  //   setTimeout(function () {
  //     myimg.style.backgroundImage = "url('./img/stand.gif')";
  //     myimg.style.width = 200 + "px";
  //     myimg.style.height = 300 + "px";
  //   }, 1000);
  // }

  // if (event.keyCode === 87) {
  //   var myimg = document.getElementById("playerone");
  //   myimg.style.backgroundImage = "url(./img/jump.gif)"
  //   myimg.style.width = 250 + "px"
  //   myimg.style.height = 600 + "px"
  //   setTimeout(function () {
  //     myimg.style.backgroundImage = "url('./img/stand.gif')";
  //     myimg.style.width = 200 + "px";
  //     myimg.style.height = 300 + "px";
  //   }, 1100);

  // }

  // if (event.keyCode === 69) {
  //   var myimg = document.getElementById("playerone");
  //   myimg.style.backgroundImage = "url(./img/muka.gif)"
  //   myimg.style.width = 560 + "px"
  //   myimg.style.height = 350 + "px"
  //   setTimeout(function () {
  //     myimg.style.backgroundImage = "url('./img/stand.gif')";
  //     myimg.style.width = 200 + "px";
  //     myimg.style.height = 300 + "px";
  //   }, 1100);

  // }


  // if (event.keyCode === 83) {
  //   var myimg = document.getElementById("playerone");
  //   myimg.style.backgroundImage = "url(./img/down.gif)"
  //   myimg.style.width = 483  + "px"
  //   myimg.style.height = 216 + "px"
  //   setTimeout(function () {
  //     myimg.style.backgroundImage = "url('./img/stand.gif')";
  //     myimg.style.width = 200 + "px";
  //     myimg.style.height = 300 + "px";
  //   }, 800);

  // }
})