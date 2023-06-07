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

export const optionSelected = (option, sortedProduct) => {
  let productSorted;
  switch (option) {
    case 'Bestseller':
      sortedProduct?.sort((a, b) => {
        return a.order - b.order;
      });
      productSorted = sortedProduct;
      break;
    case 'Popular':
      sortedProduct?.sort((a, b) => {
        return a.visit - b.visit;
      });
      productSorted = sortedProduct;
      break;
    case 'Latest':
      sortedProduct?.sort((a, b) => {
        return a.visit - b.visit;
      });
      productSorted = sortedProduct;
      break;
    case 'PriceHigh':
      sortedProduct?.sort((a, b) => {
        return b.realPrice - a.realPrice;
      });
      productSorted = sortedProduct;
      break;
    case 'PriceLow':
      sortedProduct?.sort((a, b) => {
        return a.realPrice - b.realPrice;
      });
      productSorted = sortedProduct;
      break;
    default:
      sortedProduct?.sort((a, b) => {
        const fa = a.name.toLowerCase();
        const fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      productSorted = sortedProduct;
  }
  return productSorted;
};
