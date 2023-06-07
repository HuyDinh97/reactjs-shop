export const colorChange = [
  { id: 263, name: 'Black' },
  { id: 264, name: 'Blue' },
  { id: 265, name: 'Red' },
  { id: 266, name: 'White' },
  { id: 267, name: 'Grey' },
  { id: 268, name: 'Yellow' },
];
export const categoryChange = [
  { id: 1001, name: 'Dress' },
  { id: 1002, name: 'Sweater' },
  { id: 1003, name: 'Jackets' },
  { id: 1004, name: 'Vest' },
];

export const idCount = (products, selection) => {
  const nameTransfer = selection?.map((color) => {
    const productId = products?.map(
      (item) => item.color === color.id || item.category === color.id
    );
    const countCategory = productId?.filter((value) => value === true).length;
    const newA = {
      id: color.id,
      name: color.name,
      num: countCategory,
    };
    return newA;
  });
  return nameTransfer;
};
