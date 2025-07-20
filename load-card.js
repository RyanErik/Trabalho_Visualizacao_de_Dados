fetch('cards.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('cardsGrupo').innerHTML = html;
  })
  .catch(err => {
    console.error('Erro ao carregar os cards:', err);
  });
