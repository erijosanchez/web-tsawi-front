// ============================================
// OVERLAY MODAL PARA TIENDA DE ROPA
// ============================================

// Variables globales
let modalShown = false;

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Abre el modal overlay
 */
function openModal() {
    if (!modalShown) {
        modalShown = true;
        const overlay = document.getElementById('overlay');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Analytics o tracking (opcional)
        console.log('Modal abierto');
    }
}

/**
 * Cierra el modal overlay
 */
function closeModal() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Analytics o tracking (opcional)
    console.log('Modal cerrado');
}

/**
 * Maneja el envío del formulario
 * @param {Event} event - Evento del formulario
 */
function handleSubmit(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(event.target);
    const name = formData.get('name') || event.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || event.target.querySelector('input[type="email"]').value;
    
    // Validación básica
    if (!name || !email) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    // Animación de éxito en el botón
    const btn = event.target.querySelector('.modal-btn');
    const originalText = btn.textContent;
    const originalBackground = btn.style.background;
    
    btn.textContent = '¡Código enviado! ✓';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    btn.disabled = true;
    
    // Simular envío (aquí puedes integrar con tu API)
    setTimeout(() => {
        // Aquí puedes hacer la llamada a tu API
        // sendToAPI(name, email);
        
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
// CONFIGURACIÓN DE EVENTOS
// ============================================

/**
 * Inicializa todos los event listeners
 */
function initializeModal() {
    // Cerrar modal al hacer clic fuera
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Configurar formulario
    const form = document.querySelector('.modal-form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
    
    console.log('Modal inicializado correctamente');
}

// ============================================
// AUTO-CONFIGURACIÓN
// ============================================

/**
 * Configuración automática cuando se carga el DOM
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el modal
    initializeModal();
    
    // Mostrar modal automáticamente después de 5 segundos
    setTimeout(() => {
        openModal();
    }, 5000);
});

// ============================================
// FUNCIONES OPCIONALES
// ============================================

/**
 * Reinicia el estado del modal (útil para testing)
 */
function resetModal() {
    modalShown = false;
    closeModal();
}

/**
 * Configura un delay personalizado para mostrar el modal
 * @param {number} delay - Delay en milisegundos
 */
function setModalDelay(delay) {
    setTimeout(() => {
        openModal();
    }, delay);
}

/**
 * Función para integrar con APIs (ejemplo)
 * @param {string} name - Nombre del usuario
 * @param {string} email - Email del usuario
 */
function sendToAPI(name, email) {
    // Ejemplo de integración con API
    /*
    fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            source: 'overlay-modal'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario registrado:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    */
}

// ============================================
// EXPORTAR FUNCIONES (si usas módulos)
// ============================================

// Si usas ES6 modules, descomenta estas líneas:
/*
export {
    openModal,
    closeModal,
    handleSubmit,
    resetModal,
    setModalDelay
};
*/