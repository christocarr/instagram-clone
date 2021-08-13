import { useState, useCallback } from 'react';

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;

// function useLocalStorage(key, initialValue) {
//   const serializedInitialVal = JSON.stringify(initialValue);
//   let storageVal = initialValue;
//   try {
//     storageVal = JSON.parse(window.localStorage.getItem(key)) ?? initialValue;
//   } catch {
//     window.localStorage.setItem(key, serializedInitialVal);
//   }

//   const [value, setValue] = useState(storageVal);
//   const updatedSetValue = useCallback(
//     (newValue) => {
//       const serializedNewVal = JSON.stringify(newValue);
//       if (
//         serializedNewVal === serializedInitialVal ||
//         typeof newValue === 'undefined'
//       ) {
//         window.localStorage.removeItem(key);
//       } else {
//         localStorage.setItem(key, serializedNewVal);
//       }
//       setValue(newValue ?? initialValue);
//     },
//     [initialValue, serializedInitialVal, key]
//   );
//   return [value, updatedSetValue];
// }

// export default useLocalStorage;
