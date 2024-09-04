import { useNavigate } from "react-router-dom";

interface Category {
  name: string;
  image: string;
  onClick: () => void;
}

const Category: React.FC<Category> = ({ name, image, onClick }) => {
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div
        className="
          flex-auto text-center 
          transform transition duration-300 ease-in-out 
          hover:scale-105 hover:shadow-lg 
          rounded-lg p-4 cursor-pointer
        "
      >
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <img src={image} alt={name} className="w-full h-auto rounded-md" />
      </div>
    </div>
  );
};

const ProductCategories = (): React.ReactElement => {
  const navigator = useNavigate();
  return (
    <div className="grid lg:grid-cols-4 gap-5 m-10 auto-rows-auto md:grid-cols-1">
      <Category
        name={"Electronics"}
        image={
          "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        onClick={() => navigator("/shop")}
      />
      <Category
        name={"Jewelery"}
        image={
          "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        onClick={() => navigator("/shop")}
      />
      <Category
        name={"Men's clothing"}
        image={
          "https://images.unsplash.com/photo-1515736076039-a3ca66043b27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        onClick={() => navigator("/shop")}
      />
      <Category
        name={"Women's clothing"}
        image={
          "https://images.unsplash.com/photo-1484327973588-c31f829103fe?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        onClick={() => navigator("/shop")}
      />
    </div>
  );
};

export default ProductCategories;
