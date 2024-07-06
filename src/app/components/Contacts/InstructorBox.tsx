import React, { FC } from "react";
import ContactBox from "./ContactBox";

interface InstructorBoxProps {
  name: string;
  description: string;
  image?: string;
}

const InstructorBox: React.FC<InstructorBoxProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div>
      <ContactBox name={name} description={description} image={image} />
    </div>
  );
};

export default InstructorBox;
