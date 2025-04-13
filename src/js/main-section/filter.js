import { getFilters } from '../../services/apiServices';
import { capitalizeFirstLetter, findClosestParrent, isMobile } from '../utils';
import { INVISIABLE_CLASS } from './constants';
import searchQueryParams from './searchParams.js';

class Filter {
  constructor(isIndexPage, exerciseInstance, paginationInstance) {
    this.exerciseInstance = exerciseInstance;
    this.paginationInstance = paginationInstance;
    this.filterList = document.body.querySelector('.filters-list');
    this.filterList.addEventListener('click', this.onClick);
    this.items = Array.from(this.filterList.querySelectorAll('li'));

    this.categoryList = document.body.querySelector('.category-list');
    this.categoryList.addEventListener('click', this.cardOnClick);
    this.filter = 'Muscles';

    this.path = {
      start: document.querySelector('.filter-path-start'),
      part: document.querySelector('.filter-path-part'),
    };

    this.limit = isMobile() ? 9 : 12;

    this.errorElement = document.body.querySelector('[data-categoryError]');

    if (!isIndexPage) return;

    (async function (instance) {
      const module = await import('./search.js');
      instance.searchForm = module.default;
    })(this);
  }

  onClick = ({ target }) => {
    if (target.nodeName !== 'LI') return;

    // this.items.forEach(item => item.classList.remove('active'));
    // target.classList.add('active');

    this.filter = target.dataset.filter;
    this.setActiveFilter(this.filter);

    this.exerciseInstance.hide();
    this.render();

    this.setActivePath();
    searchQueryParams.new('category', this.filter);
  };

  setActiveFilter(filter) {
    this.items.forEach(item => {
      if (item.dataset.filter === filter) item.classList.add('active');
      else item.classList.remove('active');
    });
  }

  setActivePath(exercise = '') {
    if (exercise) this.path.start.innerHTML = 'Exercises /';
    else this.path.start.innerHTML = 'Exercises';

    this.path.part.innerHTML = exercise;
  }

  async render(page = 1) {
    try {
      const data = await getFilters({
        filter: this.filter,
        limit: this.limit,
        page,
      });
      //   this.currentData = data;

      if (data.results.length) {
        this.errorHide();
        this.categoryList.innerHTML = data.results
          .map(Filter.categoryMarkup)
          .join('');
      } else {
        this.categoryList.innerHTML = '';
        this.errorShow();
      }

      this.paginationInstance.render(data.totalPages, data.page);
      this.paginationInstance.callback = this.paginationCategoryCallback;

      this.searchForm?.hide();

      this.show();
      // console.log(data);
    } catch (error) {
      // console.error(error);
    }
  }

  static categoryMarkup({ imgURL, name, filter }) {
    return `<li class="category-card" data-muscle="${filter}" data-exercise="${name}">
          <img
            src="${imgURL}"
            alt="Image shows exercise ${name}"
            class="category-card-image"
          />
          <div class="category-content">
            <h3 class="category-title">${capitalizeFirstLetter(name)}</h3>
            <p class="category-subtitle">${filter}</p>
          </div>
        </li>`;
  }

  paginationCategoryCallback = index => {
    this.render(Number(index));
  };

  cardOnClick = ({ target }) => {
    const li = findClosestParrent(target, 'LI', 'UL');
    if (!li) return;
    this.hide();
    const { exercise } = li.dataset;
    this.exerciseInstance.init(this.filter, exercise);

    this.setActivePath(exercise);

    searchQueryParams.set('exercise', exercise);
  };

  show() {
    this.categoryList.classList.remove(INVISIABLE_CLASS);
    this.categoryList.hidden = false;
  }
  hide() {
    this.categoryList.classList.add(INVISIABLE_CLASS);
    this.categoryList.hidden = true;
    this.errorHide();
  }

  errorShow(text = 'Category was not found') {
    this.errorElement.innerHTML = text;
    this.errorElement.classList.remove(INVISIABLE_CLASS);
    this.errorElement.hidden = false;
  }

  errorHide() {
    this.errorElement.innerHTML = '';
    this.errorElement.classList.add(INVISIABLE_CLASS);
    this.errorElement.hidden = true;
  }
}

export default Filter;
