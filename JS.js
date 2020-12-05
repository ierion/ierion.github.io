scrAmt = 0;
funcIntTemp1 = 0;
refreshScroll(20);
outputScroll('profile');
topImgAnim();
function refreshScroll(varTime) {
    scrAmt = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  setTimeout(()=>{refreshScroll()}, varTime);
} 
function outputScroll(id) {
  document.getElementById(id).innerHTML = scrAmt
  setTimeout(() => {outputScroll(id)}, 20);
}
function topImgAnim() {
  funcIntTemp1 = 220-scrAmt;
  document.getElementById('topImg').style.height = `${funcIntTemp1}px`;
  document.getElementById('topImg').style.marginTop = `${scrAmt}px`;
  setTimeout(() => {topImgAnim()}, 1);
}