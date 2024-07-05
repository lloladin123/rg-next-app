import React from "react";
import LogoBJ from "@images/LogoBJ.png";
import Truck from "@images/Foto_-_Vognmand_Brian_Jensen.jpg";
import Roskilde1 from "@images/Roskilde_Festival_-_1.jpg";
import Roskilde2 from "@images/Roskilde_Festival_-_2.jpg";
import Roskilde3 from "@images/Roskilde_Festival_-_3.jpg";
import Roskilde4 from "@images/Roskilde_Festival_-_4.jpg";
import Image from "next/image";

const RoskildeFestival = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex flex-col w-10/12">
        <p>
          Roskilde Gymnastikforening har en bod som fremstiller og sælger mad
          under sommerens Roskilde Festival. Det er en stor opgave at få det
          hele til at fungere, og vi har heldigvis fantastisk hjælp til at
          afvikle det hele. Gymnastikforeningen er så heldige at have en
          sponsor, som både opbevarer og transporterer den store container med
          alt det nødvendige grej til boden. Vi vil gerne takke vores sponsor
          vognmand, Brian Jensen - BJ Bioflis ApS i Lejre, for at give os denne
          uvurderlige hjælp.
        </p>
        <Image className="w-full md:w-1/2" alt="LogoBJ" src={LogoBJ} />
        <div className="flex flex-col md:flex-row flex-wrap">
          <Image className="" alt="Truck" src={Truck} />
          <div className="w-full md:w-1/2 overflow-hidden relative">
            <Image className="" alt="Roskilde4" src={Roskilde4} />
          </div>
          <div className="w-full md:w-1/2 overflow-hidden relative">
            <Image className="" alt="Roskilde1" src={Roskilde1} />
          </div>
          <div className="w-full md:w-1/2 overflow-hidden relative">
            <Image className="" alt="Roskilde3" src={Roskilde3} />
          </div>
          <div className="w-full md:w-1/2 overflow-hidden relative">
            <Image className="" alt="Roskilde2" src={Roskilde2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoskildeFestival;
