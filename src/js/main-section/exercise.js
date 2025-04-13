import { getExercises } from '../../services/apiServices';
import { isMobile } from '../utils';
import { INVISIABLE_CLASS, FILTERS, INDEX_PATH } from './constants';

export default class Exercise {
  constructor(isIndexPage, paginationInstance, modalInstance) {
    this.exerciseyList = document.body.querySelector('.exercise-list');
    this.limit = isMobile() ? 8 : 10;
    this.paginationInstance = paginationInstance;
    this.modalInstance = modalInstance;
    this.exerciseyList.addEventListener('click', event => this.handleExerciseClick(event));

    if (!isIndexPage) return;
    (async function(instance) {
      const module = await import('./search.js');
      instance.searchForm = module.default;
    })(this);
  }

  init(filter, exercise) {
    this.show();
    this.filter = filter;
    this.exercise = exercise;
    this.keyword = '';
    if (this.searchForm) {
      this.searchForm.show();
      this.searchForm.callback = this.searchCallback;
    }
    this.render();
  }

  handleExerciseClick(event) {
    this.modalInstance.open(event);
  }

  async render(page = 1) {
    try {
      const options = {
        [FILTERS[this.filter]]: this.exercise,
        limit: this.limit,
        page,
      };

      if (this.keyword) options.keyword = this.keyword;
      const data = await getExercises(options);

      this.page = page;
      //   this.currentData = data;

      this.exerciseyList.innerHTML = data.results.map(el => Exercise.exerciseMarkup(el)).join('');
      this.paginationInstance.render(data.totalPages, data.page);
      this.paginationInstance.callback = this.paginationExerciseCallback;
      this.show();
      // console.log(data);
    } catch (error) {
      // console.error(error);
    }
  }

  static exerciseMarkup({
    _id,
    rating,
    name,
    burnedCalories,
    time,
    bodyPart,
    target,
  }, isFavourite = false) {


    return `<li class="workout-card" data-id="${_id}">
          <div class="workout-card-container">
            <div class="workout-header">
              <span class="workout-badge">WORKOUT</span>
              ${
      isFavourite ?
        `<button onclick="document.removeFavourite(this)" class="workout-remove-btn">
                  <svg width="16" height="16" class="workout-remove-icon">
                    <use xlink:href="../img/icons.svg#icon-remove"></use>
                  </svg></button>`
        : `<div class="workout-rating">
                    <span class="workout-rating-value">${rating.toFixed(2)}</span>
                    <svg width="18" height="18" class="workout-rating-icon">
                      <use xlink:href="../img/icons.svg#icon-Star"></use>
                    </svg>
                  </div>`
    }
              <a href="#" class="workout-start-btn"
                >Start
                <svg width="16" height="16" class="workout-start-icon">
                  <use xlink:href="../img/icons.svg#icon-start"></use>
                </svg>
              </a>
            </div>
            <div class="workout-body">
              <svg width="24" height="24" class="workout-icon">
                <use xlink:href="../img/icons.svg#icon-running"></use>
              </svg>
              <h3 class="workout-title">${name}</h3>
            </div>
            <ul class="workout-meta">
              <li class="workout-meta-item">
                <span class="workout-meta-name">Burned calories:</span>
                <span class="workout-meta-value">${burnedCalories} / ${
      time || '...'
    }</span>
              </li>
              <li class="workout-meta-item">
                <span class="workout-meta-name">Body part:</span>
                <span class="workout-meta-value">${bodyPart}</span>
              </li>
              <li class="workout-meta-item">
                <span class="workout-meta-name">Target:</span>
                <span class="workout-meta-value">${target}</span>
              </li>
            </ul>
          </div>
        </li>`;
  }

  paginationExerciseCallback = index => {
    this.render(index);
  };

  searchCallback = keyword => {
    // if (keyword === this.keyword) return;
    this.keyword = keyword || '';
    this.render();
  };

  show() {
    this.exerciseyList.classList.remove(INVISIABLE_CLASS);
    this.exerciseyList.hidden = false;
  }

  hide() {
    this.exerciseyList.classList.add(INVISIABLE_CLASS);
    this.exerciseyList.hidden = true;
  }
}
