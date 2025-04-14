import iziToast from 'izitoast';
import { updateExerciseRating } from '../../services/apiServices.js';

export class RatingModal {
  constructor(modalBody, backToExercise) {
    this.modalBody = modalBody;
    this.exerciseId = null;
    this.backToExercise = backToExercise;
  }

  setupStarsUpdate() {
    const ratingInputs = this.modalBody.querySelectorAll('input[name="rating"]');
    const ratingValue = this.modalBody.querySelector('.rating-options-value');

    ratingInputs.forEach(input => {
      input.addEventListener('change', () => {
        ratingValue.textContent = `${parseFloat(input.value).toFixed(1)}`;
      });
    });
  }

  createRatingStars = () => {
    return `
      <div class="rating-options-wrapper">
        <span class="rating-options-value">0.0</span>
        <div class="rating-options">
          ${[5, 4, 3, 2, 1].map(value => `
            <input type="radio" id="star${value}" name="rating" value="${value}" />
            <label for="star${value}" class="rating-label">
              <svg class="rating-star" width="24" height="24">
                <use href="../img/icons.svg#icon-Star"></use>
              </svg>
            </label>
          `).join('')}
        </div>
      </div>
  `;
  };

  open(exerciseId) {
    this.exerciseId = exerciseId;
    
    this.modalBody.innerHTML = `
      <div class="rating-modal">
        <span class="rating-modal-title">Rating</span>
        
        <form class="rating-form">
          ${this.createRatingStars()}
          
          <input
            type="email" 
            name="email" 
            class="rating-input rating-input-email"
            required 
            placeholder="Email"
          />

          <textarea
            class="rating-input rating-input-comment"
            name="comment" 
            required
            placeholder="Your comment"></textarea>

          <button class="rating-submit-btn primary-btn" type="submit">Send</button>
        </form>
      </div>
    `;

    const form = this.modalBody.querySelector('.rating-form');
    form.addEventListener('submit', (event) => this.handleSubmit(event));

    this.setupStarsUpdate();
  }

  async handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const rate = formData.get('rating');
    const email = formData.get('email');
    const review = formData.get('comment');

    if (!rate || !email || !review) {
      iziToast.error({
        title: 'Error',
        message: 'Please fill in all fields!',
        position: 'topRight',
      });
      return;
    }

    const data = {
      rate: Number(rate),
      email,
      review,
    };

    try {
      const res = await updateExerciseRating(this.exerciseId, data);
      console.log(res);
      iziToast.success({
        title: 'Update rating',
        message: 'Update was successfully!',
        position: 'topRight',
      });

      this.close();
    } catch (error) {
      iziToast.error({
        title: 'Update Error',
        message: error.message,
        position: 'topRight',
      });
    }
  }

  close() {
    this.modalBody.innerHTML = '';
    this.exerciseId = null;
    this.backToExercise();
  }
}
