import TshirtCard from "TshirtCard";

export default function TshirtPage() {
  const tshirt = {
    id: 1,
    name: "Tshirt",
    description: "Lorem ipsum et dolor sit amet",
    imageUrl: "1.jpg",
    size: "M",
    price: 12.99,
  };

  return <TshirtCard {...tshirt} />;
}
