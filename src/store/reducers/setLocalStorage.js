export const calculateTotalCost = (products) =>
  products
    .reduce(
      (prevValue, currProduct) =>
        prevValue + (currProduct?.afterSalesPrice ?? 0),
      0
    )
    .toFixed(2);

export const getData = (data) => {
  const commentsData = localStorage.getItem(data);
  if (!commentsData) return false;
  return JSON.parse(commentsData);
};

export const setLocalStorage = (name, cost, data) => {
  localStorage.setItem(name, JSON.stringify(data));
  localStorage.setItem(cost, JSON.stringify(calculateTotalCost(data)));
};
