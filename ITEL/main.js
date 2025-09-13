// Toggle sidebar en móvil
const toggleMenu = document.getElementById('toggleMenu');
const sidebar = document.getElementById('sidebar');

function closeSidebar() {
  sidebar.classList.remove('open');
}

if (toggleMenu && sidebar) {
  toggleMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}


// Checkbox indeterminado accesible
const indeterminate = document.getElementById('indeterminate');
if (indeterminate) {
  indeterminate.indeterminate = true;
}

// Notificaciones y mensajes dropdown
const btnNotificaciones = document.getElementById('btn-notificaciones');
const notificacionesDropdown = document.getElementById('notificaciones-dropdown');
const btnMensajes = document.getElementById('btn-mensajes');
const mensajesDropdown = document.getElementById('mensajes-dropdown');

if (btnNotificaciones && notificacionesDropdown && mensajesDropdown) {
  // Mostrar/ocultar notificaciones
  btnNotificaciones.addEventListener('click', (e) => {
    e.stopPropagation();
    notificacionesDropdown.style.display =
      notificacionesDropdown.style.display === 'block' ? 'none' : 'block';
    mensajesDropdown.style.display = 'none';
  });

  // Mostrar/ocultar mensajes
  btnMensajes.addEventListener('click', (e) => {
    e.stopPropagation();
    mensajesDropdown.style.display =
      mensajesDropdown.style.display === 'block' ? 'none' : 'block';
    notificacionesDropdown.style.display = 'none';
  });

  // Cerrar dropdowns al hacer clic fuera
  document.addEventListener('click', () => {
    notificacionesDropdown.style.display = 'none';
    mensajesDropdown.style.display = 'none';
  });
}

document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('open') &&
    !sidebar.contains(e.target) &&
    e.target !== toggleMenu
  ) {
    sidebar.classList.remove('open');
  }
});