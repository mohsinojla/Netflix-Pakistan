document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const btn = document.querySelector('.btn-red');

    // Function to play audio
    function playAudio() {
        audio.play().catch(error => {
            console.error('Failed to play audio:', error);
        });
    }

    // Function to pause audio when it ends
    audio.addEventListener('ended', () => {
        audio.pause();
        audio.currentTime = 0; // Reset to beginning
    });

    // Event listener for button click
    btn.addEventListener('click', () => {
        playAudio();
    });
});
