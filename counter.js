const countVisit = async () => {
    const response = await fetch('https://api.countapi.xyz/hit/tu-dominio.com/visitas');
    const data = await response.json();
    document.getElementById('visit-count').innerText = `Visitas: ${data.value}`;
  };
  
  document.addEventListener('DOMContentLoaded', countVisit);
  