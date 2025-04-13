import { INVISIABLE_CLASS } from './constants';

class Search {
  #callback = null;

  constructor() {
    /** @type {HTMLFormElement} */
    this.form = document.querySelector('.search-form');

    /** @type {HTMLInputElement} */
    this.input = this.form.querySelector('input');

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const { value } = event.currentTarget['search'];
      this.#callback && this.#callback(value);
    });
    // this.input.addEventListener('input', this.onInputChanged);
  }

  // onInputChanged = ({ currentTarget }) => {
  //   if (currentTarget.value === '') {
  //     this.#callback && this.#callback('');
  //   }
  // };

  set callback(callback) {
    if (typeof callback === 'function') this.#callback = callback;
  }

  get callback() {
    return;
  }

  setValue(value) {
    this.input.value = value;
  }

  show() {
    this.form.classList.remove(INVISIABLE_CLASS);
    this.form.hidden = false;
  }
  hide() {
    this.form.classList.add(INVISIABLE_CLASS);
    this.form.hidden = true;
  }
}

const searchForm = new Search();
export default searchForm;
