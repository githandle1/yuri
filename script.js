document.addEventListener('DOMContentLoaded', function() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const invitation = document.getElementById('invitation');
    const invitationImage = document.getElementById('invitationImage');
    const scheduleButton = document.getElementById('scheduleButton');
    const scheduleModal = document.getElementById('scheduleModal');
    const scheduleModalOverlay = document.getElementById('scheduleModalOverlay');
    const scheduleCloseButton = document.getElementById('scheduleCloseButton');
    let isOpened = false;

    // Ensure the latest invitation image is loaded (bypass caches)
    if (invitationImage) {
        const versionParam = `v=${Date.now()}`;
        const baseSrc = "yuri-invite-3.jpg";
        invitationImage.src = `${baseSrc}?${versionParam}`;
    }

    // Ensure the latest schedule button image is loaded (bypass caches)
    const scheduleButtonImage = document.querySelector('.schedule-button-image');
    if (scheduleButtonImage) {
        const versionParam = `v=${Date.now()}`;
        const baseSrc = "schedule here button.jpg";
        scheduleButtonImage.src = `${baseSrc}?${versionParam}`;
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

    // Open schedule modal when schedule button is clicked
    if (scheduleButton) {
        scheduleButton.addEventListener('click', function() {
            scheduleModal.style.display = 'flex';
        });
    }

    // Close schedule modal when overlay or close button is clicked
    if (scheduleModalOverlay) {
        scheduleModalOverlay.addEventListener('click', function() {
            scheduleModal.style.display = 'none';
        });
    }

    if (scheduleCloseButton) {
        scheduleCloseButton.addEventListener('click', function() {
            scheduleModal.style.display = 'none';
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && scheduleModal.style.display === 'flex') {
            scheduleModal.style.display = 'none';
        }
    });
});
