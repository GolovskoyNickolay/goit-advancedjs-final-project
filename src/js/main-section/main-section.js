import { getExercises, getFilters } from '../../services/apiServices';
import pagination from './pagination';
import { capitalizeFirstLetter, findClosestParrent, isMobile } from '../utils';
import searchForm from './search';
import { INVISIABLE_CLASS, FILTERS } from './constants';

class Filter {
  constructor(exerciseInstance) {
    this.exerciseInstance = exerciseInstance;
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
  }

  onClick = ({ target }) => {
    if (target.nodeName !== 'LI') return;
    this.items.forEach(item => item.classList.remove('active'));
    target.classList.add('active');

    this.filter = target.dataset.filter;

    this.exerciseInstance.hide();
    this.render();

    this.path.start.innerHTML = 'Exercises';
    this.path.part.innerHTML = '';
  };

  async render(page = 1) {
    try {
      const data = await getFilters({
        filter: this.filter,
        limit: this.limit,
        page,
      });
      //   this.currentData = data;

      this.categoryList.innerHTML = data.results
        .map(this.categoryMarkup)
        .join('');
      pagination.render(data.totalPages, data.page);
      pagination.callback = this.paginationCategoryCallback;

      searchForm.hide();
      this.show();
      // console.log(data);
    } catch (error) {
      // console.error(error);
    }
  }

  categoryMarkup({ imgURL, name, filter }) {
    return `<li class="category-card" data-muscle="abductors" data-exercise="${name}">
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
    this.exerciseInstance.init(this.filter, li.dataset.exercise);

    this.path.start.innerHTML = 'Exercises /';
    this.path.part.innerHTML = li.dataset.exercise;
  };

  show() {
    this.categoryList.classList.remove(INVISIABLE_CLASS);
    this.categoryList.hidden = false;
  }
  hide() {
    this.categoryList.classList.add(INVISIABLE_CLASS);
    this.categoryList.hidden = true;
  }
}

export class Exercise {
  constructor() {
    this.exerciseyList = document.body.querySelector('.exercise-list');
    this.limit = isMobile() ? 8 : 10;
  }

  init(filter, exercise) {
    this.show();
    this.filter = filter;
    this.exercise = exercise;
    this.keyword = '';
    searchForm.show();
    searchForm.callback = this.searchCallback;
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
      pagination.render(data.totalPages, data.page);
      pagination.callback = this.paginationExerciseCallback;
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

function initMainSection() {
  //   return;
  const exerciseInstance = new Exercise();
  const filterInstance = new Filter(exerciseInstance);
  filterInstance.onClick({
    target: document.querySelector('.filters-list .filters-item'),
  });
}
initMainSection();

// const exerciseObj = {
//   page: 1,
//   perPage: 9,
//   totalPages: 146,
//   results: [
//     {
//       _id: '64f389465ae26083f39b17a2',
//       bodyPart: 'waist',
//       equipment: 'body weight',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0001.gif',
//       name: '3/4 sit-up',
//       target: 'abs',
//       description:
//         "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//       rating: 3.81,
//       burnedCalories: 220,
//       time: 3,
//       popularity: 26737,
//     },
//     {
//       _id: '64f389465ae26083f39b17a7',
//       bodyPart: 'chest',
//       equipment: 'leverage machine',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
//       name: 'assisted chest dip (kneeling)',
//       target: 'pectorals',
//       description:
//         'These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.',
//       rating: 3.8,
//       burnedCalories: 329,
//       time: 3,
//       popularity: 5933,
//     },
//     {
//       _id: '64f389465ae26083f39b17a3',
//       bodyPart: 'waist',
//       equipment: 'body weight',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0002.gif',
//       name: '45° side bend',
//       target: 'abs',
//       description:
//         "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//       rating: 3.97,
//       burnedCalories: 323,
//       time: 3,
//       popularity: 13776,
//     },
//     {
//       _id: '64f389465ae26083f39b17a4',
//       bodyPart: 'waist',
//       equipment: 'body weight',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0003.gif',
//       name: 'air bike',
//       target: 'abs',
//       description:
//         "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//       rating: 4.42,
//       burnedCalories: 312,
//       time: 3,
//       popularity: 16127,
//     },
//     {
//       _id: '64f389465ae26083f39b17a5',
//       bodyPart: 'waist',
//       equipment: 'body weight',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0006.gif',
//       name: 'alternate heel touchers',
//       target: 'abs',
//       description:
//         "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//       rating: 3.78,
//       burnedCalories: 116,
//       time: 3,
//       popularity: 17078,
//     },
//     {
//       _id: '64f389465ae26083f39b17ac',
//       bodyPart: 'waist',
//       equipment: 'medicine ball',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0014.gif',
//       name: 'assisted motion russian twist',
//       target: 'abs',
//       description:
//         "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//       rating: 3.56,
//       burnedCalories: 212,
//       time: 3,
//       popularity: 1432,
//     },
//     {
//       _id: '64f389465ae26083f39b17b7',
//       bodyPart: 'upper legs',
//       equipment: 'barbell',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0026.gif',
//       name: 'barbell bench squat',
//       target: 'quads',
//       description:
//         'Located at the front of the upper leg, the quads are responsible for knee extension and hip flexion. Exercises include squats, leg press, and lunges.',
//       rating: 3.59,
//       burnedCalories: 259,
//       time: 3,
//       popularity: 5082,
//     },
//     {
//       _id: '64f389465ae26083f39b17ba',
//       bodyPart: 'upper legs',
//       equipment: 'barbell',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0029.gif',
//       name: 'barbell clean-grip front squat',
//       target: 'glutes',
//       description:
//         'Located in the buttocks, these are powerful muscles used in hip extension, abduction, and external rotation. Exercises like squats, deadlifts, and hip thrusts target the glutes.',
//       rating: 3.77,
//       burnedCalories: 128,
//       time: 3,
//       popularity: 4074,
//     },
//     {
//       _id: '64f389465ae26083f39b17bc',
//       bodyPart: 'upper arms',
//       equipment: 'barbell',
//       gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0031.gif',
//       name: 'barbell curl',
//       target: 'biceps',
//       description:
//         'Located on the front part of the upper arm, the biceps are responsible for elbow flexion and supination of the forearm. Exercises that target biceps include bicep curls, hammer curls, and chin-ups.',
//       rating: 4.29,
//       burnedCalories: 245,
//       time: 3,
//       popularity: 6117,
//     },
//   ],
// };
