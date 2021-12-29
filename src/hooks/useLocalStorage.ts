import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialVal: T) => {
  const [localValue, setLocalValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialVal;
  });

  const setValue = (valueToStore: T) => {
    setLocalValue(valueToStore);
  };

  return [localValue, setValue] as const;
};

export default useLocalStorage;
