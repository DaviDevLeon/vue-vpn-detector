import { ref, readonly } from 'vue';
import { fetchUserIp, fetchIpDetails } from './api';

export const ipInfo = ref(null);
export const isLoading = ref(false);
export const error = ref(null);

let loadingPromise = null;

/**
 * Intern function to load IP data.
 * Manage the state of loading and errors.
 * @param {boolean} force - If is true, forces a reload even if data is already present.
 * @returns {Promise<void>} A promise that resolves when the data is loaded.
 */
export async function loadIpData(force = false) {
  if (isLoading.value && !force) {
    return loadingPromise;
  }
  if (ipInfo.value && !force) {
    return Promise.resolve()
  }

  isLoading.value = true;
  error.value = null;
  ipInfo.value = null;

  loadingPromise = (async () => {
    try {
      const userIp = await fetchUserIp();
      const details = await fetchIpDetails(userIp);
      ipInfo.value = details;
    } catch (err) {
      error.value = err.message;
      ipInfo.value = null;
    } finally {
      isLoading.value = false;
      loadingPromise = null;
    }
  })();
  return loadingPromise;
}

loadIpData();