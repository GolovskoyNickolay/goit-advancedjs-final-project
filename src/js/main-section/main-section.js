import Exercise from './exercise';
import Filter from './filter';

async function initMainSection() {
  const modulePagination = await import('./pagination.js');
  const pagination = modulePagination.default;

  const isIndexPage = true;
  const exerciseInstance = new Exercise(isIndexPage, pagination);
  const filterInstance = new Filter(isIndexPage, exerciseInstance, pagination);
  filterInstance.onClick({
    target: document.querySelector('.filters-list .filters-item'),
  });
}
initMainSection();
