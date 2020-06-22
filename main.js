function time() {
    let number = 0;
    return () => document.body.textContent = `Jesteś na stronie już ${number++} sekund`;
}

const timer = time();

setInterval(timer, 1000);