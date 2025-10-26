document.addEventListener('DOMContentLoaded', function() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const invitation = document.getElementById('invitation');
    let isOpened = false;

    envelopeWrapper.addEventListener('click', function() {
        if (!isOpened) {
            // Add opened class to envelope wrapper to trigger animation
            envelopeWrapper.classList.add('opened');
            
            // Hide envelope and show invitation after animation
            setTimeout(() => {
                envelopeWrapper.style.display = 'none';
                invitation.style.display = 'flex';
            }, 800);
            
            isOpened = true;
        }
    });
});
