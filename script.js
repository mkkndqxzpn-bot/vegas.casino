// Countdown timer za raffle
function startTimer() {
    let days = 2, hours = 3, minutes = 43, seconds = 0;
    setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    if (days === 0) return;
                    days--; hours = 23;
                } else hours--;
                minutes = 59;
            } else minutes--;
            seconds = 59;
        } else seconds--;
        document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
startTimer();

function openDemo(symbol, title) {
    document.getElementById('gameTitle').textContent = title;
    document.getElementById('demoFrame').src = `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=${symbol}&lang=en&cur=EUR`;
    document.getElementById('demoModal').style.display = 'flex';
}

function realPlay() {
    document.getElementById('realModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('demoModal').style.display = 'none';
    document.getElementById('realModal').style.display = 'none';
    document.getElementById('demoFrame').src = '';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) closeModal();
}
