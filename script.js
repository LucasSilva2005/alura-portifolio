document.addEventListener('DOMContentLoaded', () => {
 const noButton = document.getElementById('no-button');

 // Adiciona o evento de mouseover ao botão "Não"
 noButton.addEventListener('mouseover', () => {
   const windowWidth = window.innerWidth;
   const windowHeight = window.innerHeight;
   const noButtonRect = noButton.getBoundingClientRect();

   let newTop = Math.random() * (windowHeight - noButtonRect.height);
   let newLeft = Math.random() * (windowWidth - noButtonRect.width);

   // Garantir que o botão permaneça visível dentro da janela
   newTop = Math.max(newTop, 0);
   newLeft = Math.max(newLeft, 0);

   noButton.style.top = `${newTop}px`;
   noButton.style.left = `${newLeft}px`;
 });
});
