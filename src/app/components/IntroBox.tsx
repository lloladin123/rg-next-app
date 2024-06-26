import React from "react";
import introImg1 from "../../images/introImg1.jpg";
import introImg2 from "../../images/introImg2.jpg";
import introImg3 from "../../images/introImg3.jpg";

import Image from "next/image";
import Link from "next/link";

const IntroBox = () => {
  return (
    <div className="mx-auto">
      {/* First Row */}
      <div className="flex">
        <div className="w-1/2">
          <Image className="object-cover" alt="introImg1" src={introImg1} />
        </div>
        <div className="w-1/2 bg-white p-8 text-sm text-black flex-grow">
          <p>Gymnastik og motion for hele familien!</p>
          <p className="mt-4">
            Roskilde Gymnastikforening er Roskildes ældste gymnastikforening -
            siden 1924 har RG tilbudt gymnastik og motion til både børn og
            voksne. RG tilbyder et bredt udvalg af gymnastikaktiviteter og
            motionshold. Uanset om man er nybegynder eller erfaren gymnast, er
            der noget for enhver smag og alderstrin. Du kan læse om blandt andet
            rytmisk gymnastik, springgymnastik, trampolin, acro, yoga, step,
            seniormotion og meget mere under{" "}
            <Link className="text-blue-500" href="/">
              TILMELDING.
            </Link>
          </p>
          <p className="mt-12">
            Her på siden kan du både læse om holdene og kontingenter, læse om
            forningen og vedtægterne, finde information om kontorets
            kontaktsinformation og åbningstider nederst på forsiden og købe fedt
            RG tøj i vores SHOP under menupunktet INFO.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex">
        <div className="w-1/2 bg-white p-8 text-sm text-black">
          <p className="">
            Roskilde Gymnastikforening har dygtige og engagerede trænere, der er
            dedikerede til at hjælpe gymnasterne med at udvikle deres
            færdigheder og sætte gode rammer for både konkurrence-, opvisnings-
            og motionshold. Læs mere om vores instruktører og bestyrelsen under
            menupunkt{" "}
            <Link className="text-blue-500" href="/">
              KONTAKT.
            </Link>
          </p>
          <p className="mt-12">
            Ønsker du selv at være med på det fedeste instruktørteam med godt
            sammenhold, instruktør-events og uddannelse inden for det, du
            underviser i? Hør mere om mulighederne ved at kontakte kontoret på
            mail:{" "}
            <Link className="text-blue-500" href="/">
              kontakt@roskildegf.dk
            </Link>
          </p>
          <p className="mt-4">
            Følg også gerne med på{" "}
            <Link className="text-blue-500" href="/">
              FACEBOOK
            </Link>
            , hvor information om fx ny sæson, den årlige opvisning og
            festivalbod på Roskilde Festival lægges op.
          </p>
          <p className="mt-4">
            Roskilde Gymnastikforening er et fantastisk sted at dyrke gymnastik
            og motion. Uanset om du er nybegynder eller erfaren, vil du finde et
            hold, der passer til dig. Så kom og vær med til at udforske
            gymnastikkens verden i Roskilde Gymnastikforening
          </p>
        </div>
        <div className="w-1/2">
          <Image
            className="h-full object-cover"
            alt="introImg2"
            src={introImg2}
          />
        </div>
      </div>

      {/* Third Row */}
      <div className="flex">
        <div className="w-1/2">
          <Image
            className="h-full object-cover"
            alt="introImg3"
            src={introImg3}
          />
        </div>
        <div className="w-1/2 p-4 bg-white text-black text-center">
          <b>Kontakt Roskilde Gymnastikforening</b>
          <p className="mt-4">
            Roskilde Gymnastikforening har kontor i Idrættens Hus på Kildegården
            1 i Roskilde.
          </p>
          <p className="mt-4">
            Der er åbent for personlig henvendelse mandag kl. 16.30-19.00.
          </p>
          <p className="mt-4">
            Du er også meget velkommen til at kontakte os på:
            kontakt@roskildegf.dk eller på{" "}
            <Link className="text-blue-500" href="/">
              52 24 19 24
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroBox;
