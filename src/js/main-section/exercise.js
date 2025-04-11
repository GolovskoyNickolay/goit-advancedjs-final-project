import { getExercises } from '../../services/apiServices';
import { isMobile } from '../utils';
import { INVISIABLE_CLASS, FILTERS, INDEX_PATH } from './constants';

export default class Exercise {
  constructor(isIndexPage, paginationInstance) {
    this.exerciseyList = document.body.querySelector('.exercise-list');
    this.limit = isMobile() ? 8 : 10;
    this.paginationInstance = paginationInstance;

    if (!isIndexPage) return;
    (async function (instance) {
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

      this.exerciseyList.innerHTML = data.results
        .map(Exercise.exerciseMarkup)
        .join('');
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
  }) {
    return `<li class="workout-card" data-id="${_id}">
          <div class="workout-card-container">
            <div class="workout-header">
              <span class="workout-badge">WORKOUT</span>
              <span class="workout-rating-value">${rating.toFixed(2)}</span>
              <svg width="18" height="18" class="workout-rating-icon">
                <use xlink:href="../img/icons.svg#icon-Star"></use>
              </svg>
              <a href="#" class="workout-start-btn"
                >Start
                <svg width="16" height="16" class="workout-start-icon">
                  <use xlink:href="../img/icons.svg#menu"></use>
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
                Burned calories:
                <span class="workout-meta-value">${burnedCalories} / ${
      time || '...'
    }</span>
              </li>
              <li class="workout-meta-item">
                Body part: <span class="workout-meta-value">${bodyPart}</span>
              </li>
              <li class="workout-meta-item">
                Target: <span class="workout-meta-value">${target}</span>
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
