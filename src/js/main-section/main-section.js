import Exercise from './exercise';
import Filter from './filter';
import searchQueryParams from './searchParams.js';
import { ExerciseModal } from '../modal.js';

async function initMainSection() {
  const modulePagination = await import('./pagination.js');
  const pagination = modulePagination.default;

  const isIndexPage = true;
  const modalInstance = new ExerciseModal();
  const exerciseInstance = new Exercise(isIndexPage, pagination, modalInstance);
  const filterInstance = new Filter(isIndexPage, exerciseInstance, pagination);

  const { category, exercise, keyword, page } = Object.fromEntries(
    searchQueryParams.initParams.entries()
  );

  if (category && exercise) {
    setTimeout(() => {
      exerciseInstance.init(category, exercise, keyword, page);
      filterInstance.setActiveFilter(category);
      filterInstance.setActivePath(exercise);
    }, 50);
  } else if (category) {
    const index = ['Muscles', 'Body parts', 'Equipment'].indexOf(category);
    filterInstance.onClick({
      target: document.querySelectorAll('.filters-list .filters-item')[index],
    });
  } else {
    filterInstance.onClick({
      target: document.querySelector('.filters-list .filters-item'),
    });
  }

  return;
}

initMainSection();
