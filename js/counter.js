// Counter Script
let target_time;
let start_time;

function setCounter() {
    target_time = new Date();
    start_time = target_time;
    let new_value = document.getElementById('input-timer').value;

    let days = target_time.getDate() + Number(new_value[0]);
    let hours = target_time.getHours() + Number(new_value[0]);
    let minutes = target_time.getMinutes() + Number(new_value[1]);

    target_time.setDate(days);
    target_time.setHours(hours);
    target_time.setMinutes(minutes);

    counter(null);

    let i = setInterval(function(){
        counter(i);
    }, 1000);
}

function counter(i) {
    let countDownDate = target_time.getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Finish!";
    }
}