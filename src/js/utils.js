/**
 *
 * @param {string} val
 * @returns string
 */
export function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

/**
 *
 * @param {HTMLElement} el
 * @returns {HTMLElement | null}
 */
export function findClosestParrent(
  el,
  nodeNameFind = 'LI',
  nodeNameStop = 'UL'
) {
  while (el.nodeName !== nodeNameFind && el.nodeName !== nodeNameStop) {
    el = el.parentElement;
  }

  return el.nodeName === nodeNameFind ? el : null;
}
