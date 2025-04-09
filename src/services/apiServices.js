import api from '../api.js';

/**
 * @param {Object} params - The query parameters for the request.
 * @param {string} [params.bodypart] - The body part to filter by (e.g., "back", "legs").
 * @param {string} [params.equipment] - The equipment to filter by (e.g., "dumbbell", "barbell").
 * @param {number} [params.page=1] - The page number for pagination.
 * @param {number} [params.limit=10] - The number of items per page.
 * @returns {Promise<Object>} A promise that resolves with the list of exercises.
 */
export async function getExercises(params) {
  const { data } = await api.get('/exercises', { params });
  return data;
}

/**
 * @param {string|number} id - The identifier of the exercise.
 * @returns {Promise<Object>} A promise that resolves with the exercise details.
 */
export async function getExerciseById(id) {
  const { data } = await api.get(`/exercises/${id}`);
  return data;
}

/**
 * @param {string|number} id - The identifier of the exercise to update.
 * @param {Object} ratingData - The rating data object.
 * @param {number} ratingData.rating - The new rating value (e.g., a number from 1 to 5).
 * @returns {Promise<void>} A promise that resolves once the rating has been updated.
 */
export async function updateExerciseRating(id, ratingData) {
  await api.patch(`/exercises/${id}/rating`, ratingData);
}

/**
 * @param {Object} [params={}] - The filter parameters for the request.
 * @param {string} [params.filter] - The type of filter (e.g., "body parts", "muscles", "equipment").
 * @param {number} [params.page=1] - The page number for pagination.
 * @param {number} [params.limit=12] - The number of items per page.
 * @returns {Promise<Object>} A promise that resolves with the filter data.
 */
export async function getFilters(params = {}) {
  const { data } = await api.get('/filters', { params });
  return data;
}

/**
 * @returns {Promise<Object>} A promise that resolves with the quote data.
 * The returned object may contain the following fields:
 * - `quote` {string} - The text of the quote.
 * - `author` {string} - The author of the quote.
 */
export async function getQuoteOfTheDay() {
  const { data } = await api.get('/quote');
  return data;
}

/**
 * @param {string} email - The email address of the user who wants to subscribe.
 * @returns {Promise<Object>} A promise that resolves with the server response.
 * The response object may include the following field:
 * - `message` {string} - A message indicating success or that the subscription already exists.
 */
export async function subscribe(email) {
  const { data } = await api.post('/subscription', { email });
  return data;
}
