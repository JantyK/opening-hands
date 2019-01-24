export const getLocalStorageValue = key => (
  localStorage.getItem(key)
);

export const removeLocalStorageItem = key => (
  localStorage.removeItem(key)
);

export const setLocalStorageItem = (key, value) => (
  localStorage.setItem(key, value)
);

export const setLocalStorageStringify = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value))
);

export const getLocalStorageParsed = key => (
  JSON.parse(localStorage.getItem(key))
);
