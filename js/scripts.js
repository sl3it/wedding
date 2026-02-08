// Initialize AOS if available
if (window.AOS) {
    AOS.init({ duration: 1000, once: true });
}

// Form submission handler (index.html)
(function () {
    const form = document.getElementById('tg-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('btn-text');
        if (btn) btn.innerText = "Отправка...";

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.style.display = 'none';
                const success = document.getElementById('success-msg');
                if (success) success.style.display = 'block';
            } else {
                if (btn) btn.innerText = "Ошибка, попробуйте еще раз";
            }
        } catch (err) {
            if (btn) btn.innerText = "Ошибка, попробуйте еще раз";
        }
    });
})();

// Swiper initialization (only if Swiper is loaded and the element exists)
(function () {
    if (typeof Swiper === 'undefined') return;
    if (!document.querySelector('.mySwiper')) return;

    var swiper = new Swiper('.mySwiper', {
        effect: 'cards',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });
})();
