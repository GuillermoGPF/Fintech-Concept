// Dark and Light mode
const body = document.body;

$('#mode').click(function() {
    if (body.classList.contains("light")) {
        body.classList.replace("light","dark");

    } else {
        body.classList.replace("dark","light");
    }
});