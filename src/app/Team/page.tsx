import React from "react";
import TeamPage from "../components/Team/TeamPage";
import Alexander from "@images/Alexander.jpg";
import Kim from "@images/Kim.jpg";

const Team = () => {
  return (
    <TeamPage
      title="(030) Springmusene (7-10 år)"
      age="7-10 år"
      price="2.150,00 Dkk"
      dateFromTo="02/09/2024 - 16/06-2025"
      day="Mandag 16:00-17:45"
      instructors={[
        { name: "Alexander Thøgersen", isHelper: false, image: Alexander },
        { name: "Kim Lauer", isHelper: false, image: Kim },
        { name: "Frida Mandrup", isHelper: false },
      ]}
      description={[
        "Holdet er for både piger og drenge i alderen 7-10 år. Der er plads til alle - både begyndere og øvede.",
        "Vi ønsker at have fokus på et stort fællesskab med plads til alle og det er vigtigt for os, at de unge får en forståelse af at være en del af et hold og bare har det sjovt.",
        "Vi vil bruge springgrav til indlæring af nye spring og vil efterhånden skifte springgraven gradvist ud med almindelige nedspringsmåtter. Vi sætter fokus på grundspring, og man vil skulle lave mange gentagelser af disse, før man går videre til næste spring.",
        "Vi vil til træning lave forskelligt opvarmning inden vi begynder springe på både Airtrack (Spring bane) og Mini trampolin. Ved træningen af spring på banen indgår: håndstand, vejrmølle, rondant & kraftspring, flik flak og i trampolinen trænes: op hop, overslag, skrue- & saltospring.",
        "I løbet af sæsonen vil vi tage en eller flere ture over i Springcentre i Idrættens Hus, og hygge os sammen med andre springhold.",
        "Der trænes i bare tæer eller tynde gymnastiksko. Kondisko er ikke tilladt under træningen, af hensyn til sikkerheden. Vi ser helst at man træner enten i gymnastikdragt (uden skørt) eller i T-shirt & træningsbukser/shorts. Langt hår skal være sat op.",
        "Holdet deltager i foreningens lokalopvisning i Roskilde Kongres- & Idrætscenter, lørdag d. 29/3 2025. og i Gymnastik ved Fjorden (Vigen) i juni måned.",
        "Opvisningsdragt og deltagergebyr er inkluderet i kontingentet.",
      ]}
    />
  );
};

export default Team;
