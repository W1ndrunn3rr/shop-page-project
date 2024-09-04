import { useNavigate } from "react-router-dom";

export interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

type ItemList = Array<Item>;

const Item: React.FC<Item> = ({ id, title, price, image }) => {
  const navigator = useNavigate();
  return (
    <div
      className="flex justify-center items-center p-4"
      onClick={() => navigator(`${id}`)}
    >
      <div
        className="
      w-full max-w-sm
      flex flex-col
      transform transition duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg
      rounded-lg overflow-hidden
      border border-gray-200
      cursor-pointer
    "
      >
        <div className="p-4 bg-gray-50">
          <h2 className="text-xl font-bold mb-2 truncate">{title}</h2>
          <p className="text-lg font-semibold text-green-600">${price}</p>
        </div>
        <div className="flex-grow flex items-center justify-end p-4">
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-48 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

const Items: React.FC<{ itemList: ItemList }> = ({ itemList }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 m-10 ml-10 md:grid-cols-2 sm:grid-cols-1 ">
      {itemList.map((item) => (
        <Item
          title={item.title}
          price={item.price}
          image={item.image}
          id={item.id}
          category={item.category}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Items;
