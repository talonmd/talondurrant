let toggleButtonUniversity = document.querySelector('.toggle-button-university');
let toggleButtonProfessional = document.querySelector('.toggle-button-professional');

toggleButtonUniversity.addEventListener( 'click', function() {
  let card = document.querySelector('.card');
  card.classList.toggle('is-flipped');
})

toggleButtonProfessional.addEventListener( 'click', function() {
  let card = document.querySelector('.card');
  card.classList.toggle('is-flipped');
})