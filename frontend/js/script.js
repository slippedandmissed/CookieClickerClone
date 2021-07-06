window.onload = () => {
    
    
    const cookie = document.getElementById("cookie");
    const counter = document.getElementById("counter");
    const reset = document.getElementById("reset");

    cookie.onclick = () => {
        counter.innerText = +counter.innerText + 1;
    }

    reset.onclick = () => {
        counter.innerText = 0;
    }
    
}

