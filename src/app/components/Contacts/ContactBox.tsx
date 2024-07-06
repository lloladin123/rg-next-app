import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import EmptyContact from "@images/EmptyContact.png";

interface ContactInfo {
  name: string;
  description: string;
  image?: string;
}

interface ContactListProps {
  contacts: ContactInfo[];
}

const ContactBox: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:even:flex-row-reverse w-full items-center justify-center md:space-x-10 p-4"
        >
          {/* Contact Image */}
          <div className="relative md:odd:ml-8 clip-hexagon h-80 w-80">
            <Image
              alt={contact.name}
              src={contact.image ? contact.image : EmptyContact}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          {/*Contact description */}
          <div className="flex flex-col items-center md:items-start md:w-9/12">
            <h2>{contact.name}</h2>
            <p className="text-3xl font-bold">{}</p>
            <p className="text-sm">{contact.description}</p>
            {/* More information button */}
            <button className="flex flex-row p-1 items-center justify-center flex-nowrap w-24 bg-rg-green rounded-2xl hover:opacity-50 duration-300 ease-in-out">
              <div className="text-sm">Mere info</div>
              <MdKeyboardArrowDown className="bg-white rounded-full text-rg-green scale-90" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactBox;
