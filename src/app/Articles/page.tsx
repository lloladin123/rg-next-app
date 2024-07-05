import React from "react";
import ArticleBox from "../components/Articles/ArticleBox";

interface Article {
  title: string;
  sections: string[];
}

const articles: Article[] = [
  {
    title: "§ 1: Navn og tilhørsforhold",
    sections: [
      "Foreningens navn er Roskilde Gymnastikforening (RG).",
      "Foreningen er stiftet 22. oktober 1924.",
      "Foreningen har hjemsted i Roskilde Kommune.",
    ],
  },
  {
    title: "§ 2: Formål og opgaver",
    sections: [
      "Roskilde Gymnastikforenings formål er at bevare, styrke og udvikle gymnastik og idræt i Roskilde Kommune og i tilhørsorganisationerne.",
      "At varetage medlemmernes interesser og at fremme og udvikle idrætsmæssige færdigheder for alle aldersgrupper og køn.",
      "At arbejde med et bredt gymnastikbegreb og indenfor foreningens rammer, give de bedste muligheder for alle uanset køn, alder og ambitionsniveau.",
      "At udvikle konkurrenceelementet inden for de idrætsgrene, som foreningen dækker. Dette skal ske under fornødent hensyn til foreningens økonomi. Deltagelse i idrætskonkurrencer, repræsenterer for mange idrætsudøvere og instruktører, en væsentlig inspirationskilde i det idrætslige engagement. Dette engagement kan således styrkes på en måde, der giver talentfulde gymnaster de bedste muligheder, indenfor foreningens rammer, for at udvikle sig.",
      "At give ny inspiration, til aktiv deltagelse i foreningslivet, i form af tilbud om instruktør- og foreningslederuddannelser, ved eksempelvis at tilskynde til deltagelse i møder og kurser.",
    ],
  },
  {
    title: "§ 3: Tilhørsforhold",
    sections: [
      "Foreningen er medlem af Danmarks Gymnastikforbund (GymDanmark), Danske Gymnastik- og Idrætsforeninger (DGI) samt Roskilde Idrætsunion (RIU).",
    ],
  },
  {
    title: "§ 4: Økonomi",
    sections: [
      "Foreningens regnskabsår er fra 1. januar til 31. december.",
      "Regnskabet skal indeholde driftsregnskab og status, og forelægges bestyrelsen inden fremlæggelse på generalforsamlingen.",
      "Regnskabet skal ved fremlæggelse på generalforsamlingen være påtegnet af en registreret revisor.",
      "For foreningens forpligtigelser hæfter foreningen alene ved sin formue.",
      "Indmeldelsesgebyr og kontingent fastsættes af bestyrelsen og kan opkræves en eller flere gange årligt.",
      "Såfremt kontingentindbetaling ikke sker senest en måned efter forfaldsdatoen, kan medlemmet ikke deltage i foreningens arrangementer, træning eller nogen form for konkurrence/opvisning.",
    ],
  },
  {
    title: "§ 5: Tegningsregler",
    sections: [
      "Foreningen tegnes af formanden og i dennes fravær af næstformanden, i forening med mindst 2 øvrige medlemmer af bestyrelsen.",
      "Køb, salg og pantsætning af fast ejendom, samt optagelse af lån og kreditter, kan kun ske efter forudgående vedtagelse i bestyrelsen. Foreningen tegnes i denne forbindelse af formanden, og i dennes fravær af næstformanden, samt minimum 3 bestyrelsesmedlemmer.",
      "I forbindelse med adgangen til foreningens indestående i pengeinstitutter kan foreningen give eneprokura til foreningens kasserer. Øvrige bestyrelsesmedlemmer, herunder formand og næstformand, kan kun disponere i forening.",
    ],
  },
  {
    title: "§ 6: Forsikring",
    sections: [
      "Foreningen tegner ikke ulykkesforsikring for medlemmer og påtager sig intet ansvar for eventuelle skader under træning, arrangementer, opvisninger, konkurrencer o.lign.",
    ],
  },
  {
    title: "§ 7: Eksklusion",
    sections: [
      "En enstemmig bestyrelse kan foretage eksklusion af et medlem, når medlemmet skønnes at have gjort sig skyldig i, en efter foreningens anseelse eller interesse, skadelig handlemåde, eller hvis love og regler ikke overholdes.",
      "Medlemmet kan fordre sagen forelagt for en generalforsamling, der så kan afgøre spørgsmålet om eksklusion, ved almindeligt stemmeflertal. Afstemningen skal foregå skriftligt. Medlemmet har ret til selv at være til stede og udtale sig.",
    ],
  },
  {
    title: "§ 8: Bestyrelsen",
    sections: [
      "Bestyrelsen består af 5 medlemmer.",
      "Bestyrelsen konstituerer sig selv med formand, næstformand og kasserer. Konstitueringen finder sted på det førstkommende møde efter generalforsamlingen.",
      "Bestyrelsen er beslutningsdygtig, når formanden eller næstformanden, samt 2 medlemmer er til stede.",
      "I tilfælde af stemmelighed er formandens, og i dennes fravær næstformandens, stemme udslagsgivende.",
      "Bestyrelsen træffer afgørelse om suppleanternes deltagelse i bestyrelsesmøder og i bestyrelsesarbejdet. Suppleanter har ikke stemmeret ved bestyrelsesbeslutninger.",
      "Bestyrelsen nedsætter på førstkommende møde efter generalforsamlingen et forretningsudvalg, til varetagelsen af den daglige drift.",
      "Forretningsudvalget skal som minimum bestå af formand og næstformand.",
      "Forretningsudvalget er ansvarlig over for bestyrelsen og alle større dispositioner skal forelægges denne.",
      "Bestyrelsen er kontingentfritaget.",
      "Bestyrelsesmøder afholdes, så ofte det skønnes nødvendigt, eller når mindst 2 medlemmer anmoder herom.",
      "Bestyrelsesmøder indkaldes med mindst 7 dages varsel.",
    ],
  },
  {
    title: "§ 9: Bestyrelsens opgaver",
    sections: [
      "Bestyrelsen leder foreningen i alle anliggender, såvel indadtil som udadtil, herunder:",
      "Bestyrelsen fordeler ansvarsområderne blandt sin midte. Hvert ansvarsområde har en, af bestyrelsen vedtaget, opgavebeskrivelse indeholdende bl.a. beslutningskompetencer.",
      "Der føres referat af bestyrelsesmøderne, som mindst skal indeholde de vigtigste beslutninger. Personsager refereres ikke. Ethvert bestyrelsesmedlem kan kræve eget standpunkt referatført.",
      "Bestyrelsen kan udpege en række udvalg, som skal varetage specifikke områder. Etableringen af udvalg sker i form af en aftale mellem bestyrelsen og de ansvarlige.",
    ],
  },
  {
    title: "§ 10: Generalforsamling",
    sections: [
      "Generalforsamlingen er foreningens øverste myndighed og består af §3, stk. 1, dog har kun litra a-c stemmeret. Værge kan afgive stemme, såfremt medlemmet er under 18 år.",
      "Alle medlemmer og ansat personale har adgang til generalforsamlingen.",
      "Der kan ikke stemmes ved fuldmagt og et medlem kan kun repræsentere 1 stemme.",
      "Alle afstemninger afgøres ved simpelt flertal blandt de fremmødte, og skal foretages skriftligt, såfremt mindst 1 medlem anmoder herom. Vedtægtsændringer kræver dog mindst 2/3 stemmeflertal blandt de fremmødte.",
      "Medlemmer over 18 år, jfr. §3, litra a-e er valgbare til de i dagsordenen anførte valg.",
      "Ordinær generalforsamling afholdes hvert år senest den 15. marts. Generalforsamlingen kan afholdes helt eller delvist digitalt, såfremt  særlige omstændigheder taler herfor.",
      "Enhver generalforsamling indkaldes med 14 dages varsel med angivelse af tid og sted. Indkaldelsen sker via e-mail til foreningens medlemmer og ved annoncering på foreningens hjemmeside.",
      "Indkomne forslag skal sendes skriftligt til foreningens formand senest 8 dage før afholdelsen.",
      "Dagsordenen skal som minimum består af følgende punkter:",
    ],
  },
  {
    title: "§ 11: Ekstraordinær generalforsamling",
    sections: [
      "Indkaldes med mindst 14 dages varsel når, bestyrelsen eller mindst 25 medlemmer (jfr. §3, stk. 1, dog anses kun litra a-c kun medlemmer undtaget herfra kan værge opgives som medlem såfremt medlemmet er under 18 år.) fremsætter skriftligt ønske herom til bestyrelsen.",
      "Indkaldelsen skal ske senest 6 uger efter ønske herom og indkaldes af bestyrelsen.",
      "Generalforsamlingen kan afholdes helt eller delvist digitalt, såfremt særlige omstændigheder taler herfor.",
      "Indkaldelsen med motiveret dagsorden sker med angivelse af tid og sted. Indkaldelsen sker via mail til foreningens medlemmer og annoncering på foreningens hjemmeside.",
      "Dagsordenen skal som minimum består af følgende punkter:",
      "Valg af dirigent og referent.",
      "Behandling af indkomne forslag.",
      "Eventuelt.",
      "Ved en ekstraordinær generalforsamling gælder samme afstemningsregler og regler for valgbarhed, som ved en ordinær generalforsamling.",
    ],
  },
  {
    title: "§ 12: Vedtægtsændringer",
    sections: [
      "Vedtægtsændringer kræver mindst 2/3 stemmeflertal blandt de fremmødte, ved 2 på hinanden følgende generalforsamlinger.",
      "Foreningens bestyrelsen er bemyndiget til at foretage ændringer i foreningens vedtægter, som er nødvendige på grund af offentlige myndigheders krav, uden at reglerne for vedtægtsændringer skal følges. Bestyrelsen skal på førstkommende generalforsamling redegøre for sådanne ændringer.",
    ],
  },
  {
    title: "§ 13: Opløsning",
    sections: [
      "Opløsning af foreningen kan kun ske, når det vedtages med 2/3 flertal af de fremmødte stemmer på en ordinær, samt en efterfølgende ekstraordinær generalforsamling. Der skal mindst være 4 uger mellem disse generalforsamlinger.",
      "Foreningens formue skal tilgodese §2, og begge generalforsamlinger beslutter ved enighed, anvendelse af foreningens formue.",
    ],
  },
];

const Articles = () => {
  return (
    <div className="text-black px-16 pt-8 flex flex-col">
      <div className="flex justify-end text-sm w-11/12 items-end">
        Roskilde, d. 8/3 2022
      </div>
      <div>
        <h1 className="flex justify-center items-center">
          Vedtægter for Roskilde Gymnastikforening
        </h1>
      </div>
      {/* Article box container */}
      <div>
        {/* Article box */}
        {articles.map((article, index) => (
          <ArticleBox article={article} />
        ))}
      </div>
      <div className="text-xs my-16">
        <p>
          Således vedtaget på generalforsamlingen den 22. oktober 1924. Ændret
          den 9. januar 1929, den 22. oktober 1943, den 1. november 1963, den
          29. oktober 1971, den 27. oktober 1977, den 28. oktober 1980, den 16.
          februar 1982, den 15. februar 1983, den 26. februar 1987, den 8.
          februar 1995, den 27. marts 2001, den 12. februar 2002 og 10. april
          2002, 28. februar 2006. Den 11. marts 2014 og 1. april 2014. Den 10.
          marts 2015 og 15. marts 2016. Den 13. marts 2018 og 12. marts 2019.
          Den 9. marts 2021 og 8. marts 2022.
        </p>
      </div>
    </div>
  );
};

export default Articles;
