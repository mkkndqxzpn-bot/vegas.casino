function startTimer() {
    let days = 2, hours = 3, minutes = 43, seconds = 0;
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                    days--;
                }
            }
        }
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
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById('demoFrame').src = '';
}

function openDepositModal() {
    document.getElementById('depositModal').style.display = 'flex';
}

function openWithdrawModal() {
    document.getElementById('withdrawModal').style.display = 'flex';
}

function openRaffleModal() {
    document.getElementById('raffleModal').style.display = 'flex';
}

function openPromotionsModal() {
    document.getElementById('promotionsModal').style.display = 'flex';
}

function openRewardsModal() {
    document.getElementById('rewardsModal').style.display = 'flex';
}

function openSupportModal() {
    document.getElementById('supportModal').style.display = 'flex';
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'flex';
}

function scrollTo(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

function filterGames() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        let title = card.querySelector('h4').textContent.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
    });
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) closeModal();
};
