import React, { FC } from "react";
import ContactBox from "./ContactBox";

interface HelperBoxProps {
  name: string;
  description: string;
  image?: string;
}

const HelperBox: React.FC<HelperBoxProps> = ({ name, description, image }) => {
  return (
    <div>
      <ContactBox name={name} description={description} image={image} />
    </div>
  );
};

export default HelperBox;
