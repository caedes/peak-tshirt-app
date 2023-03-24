const defaultTshirt = {
  id: 1,
  name: "Tshirt Name",
  description: "Tshirt Description",
  imageUrl: "1.jpg",
  size: "M",
  price: 12.99,
};

export const createTshirt = (tshirt = defaultTshirt) => ({
  ...defaultTshirt,
  ...tshirt,
});
