"use client";
import Link from "next/link";
import React from "react";
import useContactInformationStore from "@store/ContactInformationStore";
import { ContactInfo as ContactInfoType } from "@store/types";

const ContactPersonal = () => {
  const contactInfo: ContactInfoType = useContactInformationStore(
    (state) => state.contactInfo
  );
  return (
    <div className="flex flex-col w-10/12 items-center py-8 mx-auto justify-center">
      <h1 className="text-2xl">Kontaktpersoner</h1>
      {/* Contact information container */}
      <div className="items-baseline">
        {/* General information */}
        <div className="space-y-4 font-light">
          <p>
            Kontakt Roskilde Gymnastikforening på tlf.:{" "}
            <Link
              className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
              href={`tel:${contactInfo.phone}`}
            >
              {contactInfo.phone}
            </Link>
            eller på mail:{" "}
            <Link
              className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
              href={`mailto:${contactInfo.email}`}
            >
              {contactInfo.email}
            </Link>
          </p>

          <p>Roskilde Gymnastikforening har telefontid:</p>

          <p>mandag kl. 16.30 - 19.00.</p>

          <p>
            Kontoret i Idrættens Hus,
            <Link
              className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
              target="blank"
              href={`https://www.google.com/maps/search/?api=1&query=Roskilde+Gymnastikforening`}
            >
              {contactInfo.address}
            </Link>{" "}
            er åbent for personlighenvendelse:
          </p>

          <p>mandag kl. 16.30 - 19.00.</p>
          <div className="mt-2 w-full border flex flex-col"></div>
          <div className="flex flex-col space-y-4">
            <p>
              Har du spørgsmål vedrørende holdene, kan den holdansvarlige person
              nedenfor, kontaktes på mail.
            </p>
          </div>
          {/* Contact personal */}
          <div>
            <h2>Springhold:</h2>

            <p>
              Jonas Hjorth:{" "}
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:jonas@roskildegf.dk"
              >
                jonas@roskildegf.dk
              </Link>
            </p>
            <p>
              Kim Jørgensen:{" "}
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:kim@roskildegf.dk"
              >
                kim@roskildegf.dk
              </Link>
            </p>
          </div>

          <div>
            <h2>Trampolinhold:</h2>

            <p>
              Maila Walmod:{" "}
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:maila@roskildegf.dk"
              >
                maila@roskildegf.dk
              </Link>
            </p>
          </div>
          <div>
            <h2>Unicykling:</h2>

            <p>
              Lars Walmod:{" "}
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:walmod@roskildegf.dk"
              >
                walmod@roskildegf.dk
              </Link>
            </p>
          </div>
          <div>
            <h2>Sports Acro:</h2>

            <p>
              Maria Petz Adamsen:{" "}
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:maria@roskildegf.dk"
              >
                maria@roskildegf.dk
              </Link>
            </p>

            <p>
              Lars Walmod:{" "}
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:walmod@roskildegf.dk"
              >
                walmod@roskildegf.dk
              </Link>
            </p>
          </div>
          <div>
            <h2>Børne- & Familiehold + Akroyoga:</h2>

            <p>
              Birgitte Bjerring:{" "}
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:birgitte@roskildegf.dk"
              >
                birgitte@roskildegf.dk
              </Link>
            </p>
          </div>
          <div>
            <h2>Motionshold:</h2>

            <p>
              Bente Lindegaard Magnusson:{" "}
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:bente@roskildegf.dk"
              >
                bente@roskildegf.dk
              </Link>
            </p>
          </div>
          <div>
            <h2>Rytme- & Dansehold:</h2>

            <p>
              Line Olesen:
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:line@roskildegf.dk"
              >
                line@roskildegf.dk
              </Link>
            </p>
          </div>
          <div>
            <h2>
              Dance-Fit, God-morgen-gymnastik, Seniormotion M/K, Freestyle Step
              & Klassisk Hatha-Yoga:
            </h2>

            <p>
              Lisbeth Walmod:
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:kontakt@roskildegf.dk"
              >
                kontakt@roskildegf.dk
              </Link>
            </p>
          </div>
          <div>
            <h2>Webmaster:</h2>

            <p>
              Kim Jørgensen:
              <Link
                className="text-rg-green hover:text-link-hover duration-300 ease-in-out"
                href="mailto:kim@roskildegf.dk"
              >
                kim@roskildegf.dk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPersonal;
