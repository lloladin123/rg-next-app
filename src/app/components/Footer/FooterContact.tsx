"use client";
import React from "react";
import FacebookFooterIcon from "@Icons/FacebookFooterIcon";
import InstagramFooterIcon from "@Icons/InstagramFooterIcon";
import ContactInformationStore from "@store/ContactInformationStore";
import { ContactInfo as ContactInfoType } from "@store/types";

const FooterContact = () => {
  const contactInfo: ContactInfoType = ContactInformationStore(
    (state) => state.contactInfo
  );
  return (
    <>
      <div className="relative">
        <h1 className="font-bold relative ml-2">Kontakt</h1>
        <span className="absolute inset-y-0 left-0 w-0.5 bg-rg-green"></span>
      </div>
      <div className="mt-3 text-sm">
        <p>{contactInfo.name}</p>
        <p>{contactInfo.address}</p>
        <p>Tlf: {contactInfo.phone}</p>
        <p>E-mail: {contactInfo.email}</p>
        <p>CVR: {contactInfo.cvr}</p>
      </div>
      <div className="mt-4 flex flex-row space-x-2 items-center">
        <FacebookFooterIcon />
        <InstagramFooterIcon />
      </div>
    </>
  );
};

export default FooterContact;
