export const saveToLocalStoage = (key: string, val: any) => {
  window.localStorage.setItem(key, JSON.stringify(val));
};

export const getFromLocalStorage = (key: string) => {
  const storedValue = window.localStorage.getItem(key);
  if (!storedValue) return null;
  return JSON.parse(storedValue);
};

export const removeFromLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
