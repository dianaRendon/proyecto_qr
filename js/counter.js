document.addEventListener('DOMContentLoaded', function() {
  const visitasElemento = document.getElementById('visitas');
  let visitas = localStorage.getItem('visitas') || 0;
  visitas++;
  localStorage.setItem('visitas', visitas);
  visitasElemento.textContent = visitas;
});
