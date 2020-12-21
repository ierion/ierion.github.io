slideFromCenter('firstLine', 9999999, 80);



function fadeInByIdLocal1(id, time, startTime, ease, requiredScrollAmount) {
    fadeInById(id, time, startTime, ease, requiredScrollAmount);
    fadeIn2('firstOption2', 5, 4);
    fadeIn2("firstOption1", 5, 9);
    document.getElementById('firstOption1').style.opacity = '1'
}

function fadeIn2(id, time, ease) {
    let opacity = 1;
    let temp1 = 0;
    let temp2 = 0;
    let temp4 = 0;

    function subFunction(id, time, ease) {
        opacity -= time/1000
        document.getElementById(id).style.opacity = opacity
        if (opacity > ease/10)
        setTimeout(() => {
            subFunction(id, time, ease)
        }, 1);
    }
    subFunction(id, time, ease);
}





  