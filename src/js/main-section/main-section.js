import Exercise from './exercise';
import Filter from './filter';
import searchQueryParams from './searchParams.js';

async function initMainSection() {
  const modulePagination = await import('./pagination.js');
  const pagination = modulePagination.default;

  const isIndexPage = true;
  const exerciseInstance = new Exercise(isIndexPage, pagination);
  const filterInstance = new Filter(isIndexPage, exerciseInstance, pagination);

  const { category, exercise, keyword, page } = Object.fromEntries(
    searchQueryParams.initParams.entries()
  );

  if (category && exercise) {
    setTimeout(() => {
      exerciseInstance.init(category, exercise, keyword, page);
      filterInstance.setActiveFilter(category);
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

  filterInstance.onClick({
    target: document.querySelector('.filters-list .filters-item'),
  });
}
initMainSection();
