import { INVISIABLE_CLASS } from "./constants";

class Pagination {
  #callback = null;

  constructor(callback) {
    this.callback = callback || null;
    this.element = document.querySelector('.pagination');
    this.element.addEventListener('click', this.onClick);
    this.element.innerHTML = this.paginationMarkup();

    this.elements = {
      prev2: this.element.children[1],
      prev: this.element.children[2],
      active: this.element.children[3],
      next: this.element.children[4],
      next2: this.element.children[5],
      startDots: this.element.children[0],
      endDots: this.element.children[6],
    };
  }

  set callback(callback) {
    if (typeof callback === 'function') this.#callback = callback;
  }

  get callback() {
    return;
  }

  onClick = ({ target }) => {
    if (target.nodeName !== 'LI') return;
    this.#callback && this.#callback(target.dataset.index);
  };

  render(total, active) {
    active = Number(active);
    this.elements.active.innerHTML = active;
    this.elements.active.dataset.index = active;
    this.elements.active.classList.remove(INVISIABLE_CLASS);

    if (active - 3 > 0) {
      this.elements.startDots.dataset.index = 1;
      this.elements.startDots.classList.remove(INVISIABLE_CLASS);
    } else {
      this.elements.startDots.classList.add(INVISIABLE_CLASS);
    }
    if (active - 1 > 0) {
      this.elements.prev.innerHTML = active - 1;
      this.elements.prev.dataset.index = active - 1;
      this.elements.prev.classList.remove(INVISIABLE_CLASS);
    } else {
      this.elements.prev.classList.add(INVISIABLE_CLASS);
    }
    if (active - 2 > 0) {
      this.elements.prev2.innerHTML = active - 2;
      this.elements.prev2.dataset.index = active - 2;
      this.elements.prev2.classList.remove(INVISIABLE_CLASS);
    } else {
      this.elements.prev2.classList.add(INVISIABLE_CLASS);
    }

    if (active + 1 <= total) {
      this.elements.next.innerHTML = active + 1;
      this.elements.next.dataset.index = active + 1;
      this.elements.next.classList.remove(INVISIABLE_CLASS);
    } else {
      this.elements.next.classList.add(INVISIABLE_CLASS);
    }
    if (active + 2 <= total) {
      this.elements.next2.innerHTML = active + 2;
      this.elements.next2.dataset.index = active + 2;
      this.elements.next2.classList.remove(INVISIABLE_CLASS);
    } else {
      this.elements.next2.classList.add(INVISIABLE_CLASS);
    }
    if (active + 3 <= total) {
      this.elements.endDots.dataset.index = total;
      this.elements.endDots.classList.remove(INVISIABLE_CLASS);
    } else {
      this.elements.endDots.classList.add(INVISIABLE_CLASS);
    }
  }

  reset() {
    this.element.innerHTML = '';
  }

  paginationMarkup() {
    return `<li class="pagination-page invisiable">...</li>
        <li data-index="" class="pagination-page invisiable"></li>
        <li data-index="" class="pagination-page invisiable"></li>
        <li data-index="" class="pagination-page selected invisiable"></li>
        <li data-index="" class="pagination-page invisiable"></li>
        <li data-index="" class="pagination-page invisiable"></li>
        <li class="pagination-page invisiable">...</li>`;
  }
}

const pagination = new Pagination();
export default pagination;
