document.addEventListener('DOMContentLoaded', function() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const invitation = document.getElementById('invitation');
    const invitationImage = document.getElementById('invitationImage');
    let isOpened = false;

    // Ensure the latest invitation image is loaded (bypass caches)
    if (invitationImage) {
        const versionParam = `v=${Date.now()}`;
        const baseSrc = "yuri-invite-3.jpg";
        invitationImage.src = `${baseSrc}?${versionParam}`;
    }

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
