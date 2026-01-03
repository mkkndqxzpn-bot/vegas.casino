// Countdown timer
function startTimer() {
    let days = 2, hours = 3, minutes = 43, seconds = 0;
    const timerElement = document.getElementById('countdown');
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 23;
            days--;
        }
        if (days < 0) days = 0; // Stop at 0
        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
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
    const modals = [document.getElementById('demoModal'), document.getElementById('realModal')];
    modals.forEach(modal => {
        if (event.target === modal) closeModal();
    });
}

// Za originals gumbe - dodaj fake funkcijo, če hočeš (npr. alert('Coming soon'))
document.querySelectorAll('.original .demo-btn').forEach(btn => {
    btn.onclick = () => alert('Demo for Originals coming soon!');
});
document.querySelectorAll('.original .real-btn').forEach(btn => {
    btn.onclick = () => realPlay();
});
