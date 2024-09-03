import React, { useState } from "react";

interface MyButton {
  text: string;
  onClick?: () => void;
}

interface book {
  name: string;
  price: Number;
}

const Buttonn: React.FC<MyButton> = (props) => {
  const { text, onClick } = props;
  const [value, setValue] = useState<string>("a");
  const [object, setObject] = useState<book>({
    name: "How to deal with friends",
    price: 200,
  });
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setObject({ name: "nooo you can't", price: 300 })}>
        {text}
      </button>
      <p>{object.name}</p>
      <p>{object.price}</p>
    </div>
  );
};

export default Buttonn;
