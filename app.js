document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('lista-tareas');
    console.log('GIO_AP Iniciada');
    
    // Simulación de carga de tareas
    const tareas = ['Configurar GIO_AP', 'Limpiar repositorio', 'Probar APK en celular'];
    
    lista.innerHTML = ''; // Limpiamos el "Cargando..."
    
    tareas.forEach(tarea => {
        const item = document.createElement('p');
        item.textContent = '✅ ' + tarea;
        item.style.padding = '10px';
        item.style.borderBottom = '1px solid #eee';
        lista.appendChild(item);
    });
});
