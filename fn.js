
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleMode');
    const body = document.body;
  
    // Ambil mode yang tersimpan dari localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      body.classList.add('dark-mode');
    }
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
  
      // Simpan preferensi ke localStorage
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
      } else {
        localStorage.setItem('mode', 'light');
      }
    });
  });