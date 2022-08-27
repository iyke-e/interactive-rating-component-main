const numRating = document.querySelectorAll('.circle');
const submitRating = document.querySelector('.submit');
const starRAting = document.querySelector('.countingSec');
const thankYou = document.querySelector('.thankYou');
const numValue = document.querySelector('span');

for (let i = 0; i < numRating.length; i++) {
    let ratingItem = numRating[i];
    ratingItem.addEventListener('click', () => {
        numValue.textContent = ratingItem.textContent;
        ratingItem.style.backgroundColor = 'hsl(25, 97%, 53%)';
    });

    submitRating.addEventListener('click', () => {
        thankYou.hidden = false;
        starRAting.hidden = true;
    })
}