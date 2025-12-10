// ======================================
// SISTEMA DE LOGIN/REGISTRO SIMULADO
// Para presentación - Sin backend requerido
// ======================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Modo demo activado - Sistema simulado para presentación');
    
    // IDs comunes de formularios (AJUSTA SEGÚN TU HTML)
    const FORM_IDS = {
        login: 'loginForm',
        register: 'registerForm',
        logout: 'logoutBtn'
    };
    
    // IDs de campos (AJUSTA SEGÚN TU HTML)
    const FIELD_IDS = {
        nombre: 'nombre',
        apellido: 'apellido',
        correo: 'correo',
        telefono: 'telefono',
        contrasena: 'contrasena',
        direccion: 'direccion'
    };
    
    // ======================
    // 1. DETECTAR PÁGINA ACTUAL
    // ======================
    const currentPage = window.location.pathname.split('/').pop() || 'principal.html';
    console.log('📄 Página actual:', currentPage);
    
    // ======================
    // 2. CONFIGURAR LOGIN
    // ======================
    const loginForm = document.getElementById(FORM_IDS.login);
    if (loginForm) {
        console.log('✅ Formulario de login detectado');
        
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const correo = document.getElementById(FIELD_IDS.correo)?.value || '';
            const contrasena = document.getElementById(FIELD_IDS.contrasena)?.value || '';
            
            // Validación
            if (!correo.trim() || !contrasena.trim()) {
                showMessage('⚠️ Por favor ingresa correo y contraseña', 'warning');
                return;
            }
            
            // Simular validación
            if (correo.includes('@') && contrasena.length >= 4) {
                showMessage('✅ ¡Login exitoso! Redirigiendo...', 'success');
                
                // Guardar estado de sesión (simulado)
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userEmail', correo);
                
                // Redirigir después de 1.5 segundos
                setTimeout(() => {
                    window.location.href = 'principal.html';
                }, 1500);
            } else {
                showMessage('❌ Credenciales incorrectas. Usa: demo@tecnicom.com / 123456', 'error');
            }
        });
    }
    
    // ======================
    // 3. CONFIGURAR REGISTRO
    // ======================
    const registerForm = document.getElementById(FORM_IDS.register);
    if (registerForm) {
        console.log('✅ Formulario de registro detectado');
        
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener valores
            const nombre = document.getElementById(FIELD_IDS.nombre)?.value || '';
            const apellido = document.getElementById(FIELD_IDS.apellido)?.value || '';
            const correo = document.getElementById(FIELD_IDS.correo)?.value || '';
            const telefono = document.getElementById(FIELD_IDS.telefono)?.value || '';
            const contrasena = document.getElementById(FIELD_IDS.contrasena)?.value || '';
            const direccion = document.getElementById(FIELD_IDS.direccion)?.value || '';
            
            // Validación
            if (!nombre.trim() || !correo.trim() || !contrasena.trim()) {
                showMessage('⚠️ Completa los campos obligatorios (Nombre, Correo, Contraseña)', 'warning');
                return;
            }
            
            // Simular registro exitoso
            showMessage('✅ ¡Registro exitoso! Cuenta creada para la demo.', 'success');
            
            // Mostrar datos registrados (opcional)
            console.log('📝 Datos registrados (simulados):', {
                nombre, apellido, correo, telefono, 
                contrasena: '***' + contrasena.slice(-2),
                direccion
            });
            
            // Limpiar formulario
            registerForm.reset();
            
            // Redirigir al login después de 2 segundos
            setTimeout(() => {
                window.location.href = 'login.html'; // o la página de login
            }, 2000);
        });
    }
    
    // ======================
    // 4. VERIFICAR SESIÓN EN PÁGINA PRINCIPAL
    // ======================
    if (currentPage === 'principal.html') {
        const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        const userEmail = localStorage.getItem('userEmail');
        
        if (isLoggedIn && userEmail) {
            console.log('👤 Usuario en sesión:', userEmail);
            // Opcional: mostrar nombre de usuario en la página
            const userDisplay = document.getElementById('userDisplay');
            if (userDisplay) {
                userDisplay.textContent = `Bienvenido, ${userEmail}`;
            }
        } else {
            console.log('🔒 No hay sesión activa');
            // Opcional: redirigir al login si no hay sesión
            // window.location.href = 'login.html';
        }
    }
    
    // ======================
    // 5. BOTÓN DE CERRAR SESIÓN
    // ======================
    const logoutBtn = document.getElementById(FORM_IDS.logout);
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('userEmail');
            showMessage('👋 Sesión cerrada correctamente', 'info');
            setTimeout(() => {
                window.location.href = 'index.html'; // o página inicial
            }, 1000);
        });
    }
    
    // ======================
    // FUNCIÓN PARA MOSTRAR MENSAJES
    // ======================
    function showMessage(text, type = 'info') {
        // Intentar usar alert simple primero
        alert(text);
        
        // Opcional: crear mensaje bonito en la página
        const messageDiv = document.createElement('div');
        messageDiv.textContent = text;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            animation: fadeIn 0.3s;
        `;
        
        // Colores según tipo
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };
        
        messageDiv.style.backgroundColor = colors[type] || colors.info;
        
        document.body.appendChild(messageDiv);
        
        // Eliminar después de 4 segundos
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }, 4000);
    }
    
    // ======================
    // 6. DATOS DE DEMO PARA PROBAR
    // ======================
    console.log('💡 Datos de prueba para la demo:');
    console.log('   Correo: demo@tecnicom.com');
    console.log('   Contraseña: 123456');
    console.log('   O cualquier correo válido (@) y contraseña de 4+ caracteres');
});

// Función global para cerrar sesión (si la llamas desde HTML)
function cerrarSesion() {
    localStorage.clear();
    alert('Sesión cerrada');
    window.location.href = 'index.html';
}

