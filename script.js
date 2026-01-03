// Timer
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

// Open Demo
function openDemo(symbol, title) {
    document.getElementById('gameTitle').textContent = title;
    document.getElementById('demoFrame').src = `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=${symbol}&lang=en&cur=EUR`;
    document.getElementById('demoModal').style.display = 'block';
}

// Real Play
function realPlay() {
    document.getElementById('realModal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
    document.getElementById('demoFrame').src = '';
}

// Deposit Modal
function openDepositModal() {
    document.getElementById('depositModal').style.display = 'block';
}

// Withdraw Modal
function openWithdrawModal() {
    document.getElementById('withdrawModal').style.display = 'block';
}

// Sidebar Functions
function openRaffleModal() {
    document.getElementById('raffleModal').style.display = 'block';
}

function openPromotionsModal() {
    document.getElementById('promotionsModal').style.display = 'block';
}

function openRewardsModal() {
    document.getElementById('rewardsModal').style.display = 'block';
}

function openSupportModal() {
    document.getElementById('supportModal').style.display = 'block';
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
}

// Search Filter
function filterGames() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        let title = card.querySelector('h4').textContent.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
    });
}

// Close on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) closeModal();
};
