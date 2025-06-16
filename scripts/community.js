/****************************
 * thrid page
 * 
 */
 document.addEventListener('DOMContentLoaded', () => {
      const favoritesBtn = document.getElementById('favoritesBtn');
      const favoritesList = document.getElementById('favoritesList');

      favoritesBtn.addEventListener('click', () => {
        const savedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
        favoritesList.innerHTML = savedFavorites.map(item => `<li>${item}</li>`).join('');
        favoritesList.style.display = 'block';
      });

      document.getElementById('commentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your comment has been posted!');
        this.reset();
      });

      document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        this.reset();
      });
    });
localStorage.setItem('favoriteRecipes', JSON.stringify([
  'Bobotie with Yellow Rice',
  'Cape Malay Chicken Curry',
  'Chakalaka with Pap',
  'Milk Tart (Melktert)'
]));
