export const colorChange = [
  { id: 263, name: 'Black' },
  { id: 264, name: 'Blue' },
  { id: 265, name: 'Red' },
  { id: 267, name: 'White' },
  { id: 268, name: 'Grey' },
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

export const optionSelected = (option, product) => {
  let sortKey;
  let priceHigh = false;

  const sortedProduct = (key) => {
    product?.sort((a, b) => {
      if (priceHigh === true) {
        return b[key] - a[key];
      }
      if (!sortKey) {
        const fa = a.name.toLowerCase();
        const fb = b.name.toLowerCase();

        if (fa < fb) return -1;
        if (fa > fb) return 1;
        return 0;
      }
      return a[key] - b[key];
    });
  };

  switch (option) {
    case 'Bestseller':
      sortKey = 'order';
      break;
    case 'Popular':
      sortKey = 'visit';
      break;
    case 'Latest':
      sortKey = 'visit';
      break;
    case 'PriceLow':
      sortKey = 'realPrice';
      break;
    case 'PriceHigh':
      sortKey = 'realPrice';
      priceHigh = true;
      break;
    default:
  }

  return sortedProduct(sortKey);
};
