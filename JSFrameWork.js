let scrAmt = 0;
let timeAmt = 0;
let width = 0;

let navliElements = document.getElementsByClassName("navli");
refreshScreenWidth();
function refreshScreenWidth() {

  width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  for (let i = 0; i<navliElements.length; i++) {
    let intendedWidth = 10 + width/100;
    navliElements[i].style.fontSize = `${intendedWidth}px`;
    document.getElementById("navli1-hp").style.fontSize = `${intendedWidth}px`;
  }
  setTimeout(() => {
    refreshScreenWidth()
  }, 20);
}


function fadeInById(id, time, startTime, ease, requiredScrollAmount) {
  let temp1 = 0;
  document.getElementById(id).style.opacity = '0%'
  function subfunction1(id, time, startTime, ease) {
  if(requiredScrollAmount<=scrAmt) {
    if (temp1 === 0) {

      function subSub1(id, time, startTime, ease) {

        setTimeout(() => {
          let temp1 = 0;

          function subSubSub1 (id, time, ease) {
            if (temp1 < 200) {
            temp2 = 1000/time;
            if (temp1 < 50) {
            temp4 = (temp2*ease/100) * ((ease-temp1)/100);
            } else {temp4 = 0;}
            temp1 += temp2 - temp4;
            document.getElementById(id).style.opacity = `${temp1}%`
            setTimeout(() => {subSubSub1(id, time, ease)}, 1);
            } else {return 0;}
          }

          subSubSub1(id, time, ease)
      }, startTime);
    }

    subSub1(id, time, startTime, ease);
    temp1=1
    }
  }
  setTimeout(() => {
    subfunction1(id, time, startTime, ease);
  }, 10);
}
subfunction1(id, time, startTime, ease);
}

function logSrcAmt() {
  console.log(scrAmt);
  setTimeout(() => {
    logSrcAmt()
  }, 100);
}

function slideFromCenter(id, requiredScrAmt, lineLength) {
  let temp1 = 0;
  document.getElementById(id).style.width='0px';
  function subfunction1(id, lineLength) {
      if (temp1 < lineLength-1) {
        if (requiredScrAmt<=scrAmt){
        temp2 = lineLength - temp1;
        temp1 = temp1 + 0.02*temp2;
        document.getElementById(id).style.width = `${temp1}vw`;
        } 
      setTimeout(() => {subfunction1(id, lineLength)}, 10) 
      }
  }
  subfunction1(id, lineLength);
}
function refreshScroll(varTime) {
  scrAmt = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  setTimeout(()=>{refreshScroll()}, varTime);
}
function refreshtime() {
  timeAmt++
  setTimeout(() => {refreshtime()}, 1);
}