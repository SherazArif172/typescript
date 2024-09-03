import React from "react";

interface MyButton {
  text: string;
  onClick?: () => void;
}

const Buttonn: React.FC<MyButton> = (props) => {
  const { text, onClick } = props;
  return (
    <div>
      <button onClick={onClick}>{text}</button>
      {/* <button onClick={props.onClick}>{props.text}</button> */}
    </div>
  );
};

export default Buttonn;
