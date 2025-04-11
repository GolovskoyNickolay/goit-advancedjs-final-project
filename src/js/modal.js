import { getExerciseById } from '../services/apiServices.js';

const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.getElementById('exerciseModal');
const modalBody = document.querySelector('.modal-body');
const closeBtn = document.querySelector('.modal-close');

export const openExerciseModal = async id => {
  modalOverlay.classList.add('is-open');

  try {
    modalBody.innerHTML = '<p class="loading">Loading...</p>';

    const exercise = await getExerciseById(id);

    modalBody.innerHTML = createExerciseMarkup(exercise);

    // Тут можна додати слухачі на кнопки, як і раніше
    // const addFavoritesBtn = modal.querySelector('.add-favorites-btn');
    // const rateBtn = modal.querySelector('.rate-btn');

    // addFavoritesBtn.addEventListener('click', () => {
    //   // Твоя функція додавання в улюблене
    // });

    // rateBtn.addEventListener('click', () => {
    //   // Твоя функція додавання оцінки
    // });
  } catch (error) {
    console.log(error);
    modalBody.innerHTML =
      '<p class="error">Failed to load exercise. Try again later.</p>';
  }
};

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('is-open');
});

// {
//   "_id": "64f389465ae26083f39b17ac",
//   "bodyPart": "waist",
//   "equipment": "medicine ball",
//   "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0014.gif",
//   "name": "assisted motion russian twist",
//   "target": "abs",
//   "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//   "rating": 3.56,
//   "burnedCalories": 212,
//   "time": 3,
//   "popularity": 1432
// }

const createExerciseMarkup = exercise => {
  return `
    <div class="exercise-details">
      <img src="${exercise.gifUrl}" alt="${exercise.name}" class="exercise-img">
      <div class="exercise-content">
        <div>
          <h2 class="exercise-title">${exercise.name}</h2>

          <div class="exercise-rate">
            <p>${exercise.rating}</p>
            <div class="exercise-rating-stars">
             ${[...Array(5)]
               .map((_, index) => {
                 return `<span class="star ${index < Math.round(exercise.rating) ? 'filled' : ''}">⭐</span>`;
               })
               .join('')}
            </div>
          </div>

          <ul class="exercise-info">
            <li>Target<span>${exercise.target}</span></li>
            <li>Body Part<span>${exercise.bodyPart}</span></li>
            <li>Equipment<span>${exercise.equipment}</span></li>
            <li>Popular<span>${exercise.popular}</span></li>
            <li>Burned calories<span>${exercise.burnedCalories}</span></li>
          </ul>

          <p class="exercise-description">${exercise.description}</p>
        </div>

        <div class="exercise-buttons">
          <button class="add-favorites-btn" data-id="${exercise.id}">Add to favorites ❤️</button>
          <button class="rate-btn" data-id="${exercise.id}">Give a rating</button>
        </div>
      </div>
    </div>
  `;
};
