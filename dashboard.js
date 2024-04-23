document.addEventListener("DOMContentLoaded", function() {
   
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('container');
    const menutoggle = document.getElementById('menu-toggle');

    menutoggle.addEventListener('click', () => {
        container.classList.toggle('hidden');
        sidebar.classList.toggle('hidden-nav');
    });    
});
