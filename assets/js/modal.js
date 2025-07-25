// ============================================
// Variables globales
// ============================================
let modalShown = false;

// ============================================
// Abrir y cerrar modal
// ============================================
function openModal() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    console.log('Modal abierto');
}

function closeModal() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    console.log('Modal cerrado');
}

// ============================================
// Envío del formulario
// ============================================
function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name') || event.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || event.target.querySelector('input[type="email"]').value;

    if (!name || !email) {
        alert('Por favor, completa todos los campos');
        return;
    }

    const btn = event.target.querySelector('.modal-btn');
    const originalText = btn.textContent;
    const originalBackground = btn.style.background;

    btn.textContent = '¡Código enviado! ✓';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    btn.disabled = true;

    setTimeout(() => {
        alert(`¡Gracias ${name}! Tu código de descuento: SAVE50\nRevisa tu email para más detalles.`);
        closeModal();

        // Restaurar botón después de cerrar
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = originalBackground;
            btn.disabled = false;
        }, 1000);
    }, 1500);
}

// ============================================
// Inicialización de eventos
// ============================================
function initializeModal() {
    const overlay = document.getElementById('overlay');

    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    const form = document.querySelector('.modal-form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }

    console.log('Modal inicializado correctamente');
}

// ============================================
// Mostrar modal automáticamente una vez por visitante
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    initializeModal();

    const alreadyShown = localStorage.getItem('modalShown');

    if (!alreadyShown) {
        setTimeout(() => {
            openModal();
            localStorage.setItem('modalShown', 'true'); // Guardar en localStorage
        }, 5000);
    }
});
