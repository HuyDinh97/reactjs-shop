export const calculateTotalCost = (products) =>
  products
    .reduce(
      (prevValue, currProduct) =>
        prevValue + (currProduct?.afterSalesPrice ?? 0),
      0
    )
    .toFixed(2);

export const getData = (key) => {
  const localStorageData = localStorage.getItem(key);
  if (!localStorageData) return false;
  return JSON.parse(localStorageData);
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
