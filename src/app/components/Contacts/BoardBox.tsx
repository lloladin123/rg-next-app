import React, { FC } from "react";
import ContactBox from "./ContactBox";

interface BoardBoxProps {
  name: string;
  description: string;
  image?: string;
}

const BoardBox: React.FC<BoardBoxProps> = ({ name, description, image }) => {
  return (
    <div>
      <ContactBox name={name} description={description} image={image} />
    </div>
  );
};

export default BoardBox;
