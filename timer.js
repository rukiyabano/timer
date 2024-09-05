document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    const resetButton = document.getElementById('reset-button');

    let timer;
    let seconds = 0;
    let isRunning = false;

    // Update time display
    function updateDisplay() {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}:${secs}`;
    }

    // Start the timer
    function startTimer() {
        if (!isRunning) {
            timer = setInterval(() => {
                seconds++;
                updateDisplay();
            }, 1000);
            isRunning = true;
        }
    }

    // Stop the timer
    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    // Reset the timer
    function resetTimer() {
        stopTimer();
        seconds = 0;
        updateDisplay();
    }

    // Event listeners
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

    // Initial display
    updateDisplay();
});
