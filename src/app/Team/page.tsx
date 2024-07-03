import Image from "next/image";
import React from "react";
import Springmusene from "@images/SpringmuseneHold.jpeg";
import Alexander from "@images/Alexander.jpg";
import Kim from "@images/Kim.jpg";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import "@styles/Team.css";

import Link from "next/link";
import InstructorCard from "../components/Team/InstructorCard";

const Team = () => {
  return (
    <div className="w-11/12 flex flex-col mx-auto">
      <div className="mt-4">
        <div className="flex flex-row">
          <div className="w-3/6 relative overflow-hidden ">
            <Image
              className=""
              alt="Springmusenebillede"
              src={Springmusene}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col w-full p-2">
            <div className="relative   flex flex-row space-x-3 items-center">
              <span className="absolute inset-y-0 left-0 w-1 bg-rg-green z-0"></span>
              <h1 className="text-xl font-normal">
                (030) Springmusene (7-10 år)
              </h1>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col p-2 space-y-1 w-full ">
                <div className="flex flex-row w-full space-x-32">
                  <div className="flex flex-row space-x-1">
                    <FaRegCalendarDays className="text-rg-green mt-1" />
                    <p>Alder: </p>
                  </div>
                  <p className="font-light">7-10 år</p>
                </div>
                <div className="flex flex-row w-full space-x-32">
                  <div className="flex flex-row space-x-1">
                    <FaRegMoneyBillAlt className="text-rg-green mt-1" />
                    <p>Pris: </p>
                  </div>
                  <p className="font-light">2.150,00 DKK</p>
                </div>
                <div className="flex flex-row space-x-1">
                  <Link
                    className="flex flex-row p-1 text-white rounded-2xl bg-rg-green hover:opacity-50  duration-300 ease-in-out"
                    href="/"
                  >
                    <IoIosCheckmark className="mt-1 text-white" /> Samlet
                    betaling
                  </Link>
                  <Link
                    className="rounded-2xl border p-1 text-black hover:opacity-50 hover:border-green-900 duration-300 ease-in-out"
                    href="/"
                  >
                    Ratebetaling
                  </Link>
                  <RxQuestionMarkCircled className="mt-2 text-black rounded-full hover:text-white hover:bg-rg-green duration-300 ease-in-out" />
                </div>
              </div>
              <div className="flex flex-col space-y-2 w-full p-2">
                <div className="flex flex-row space-x-2">
                  <FaRegCalendarDays className="text-rg-green mt-1" />
                  <p className="font-light">02/09/2024 - 16/06/2025</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <FaMapMarkerAlt className="text-rg-green mt-1" />
                  <div className="flex flex-col">
                    <p>Kildegårdshallen (Hallen)</p>
                    <p className="font-light">Mandag 16:00-17:45</p>
                  </div>
                </div>

                <div className="flex flex-row space-x-2">
                  <FaUser className="text-rg-green mt-1" />
                  <div className="flex flex-col">
                    <p>Instruktør</p>
                    <p className="font-light">Alexander Thøgersen</p>
                    <p className="font-light">Kim Lauer</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row space-x-2">
                    <FaUser className="text-rg-green mt-1" />
                    <div className="flex flex-col ">
                      <p>Hjælpeinstruktør</p>
                      <p className="font-light">Frida Mandrup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-1 p-8">
          <IoInformationCircleSharp className="text-rg-green mt-1 w-12" />
          <div className="flex flex-col">
            <p>Beskrivelse</p>
            <div className="font-light">
              <p className="flex flex-col space-y-2">
                <p>
                  Holdet er for både piger og drenge i alderen 7-10 år. Der er
                  plads til alle - både begyndere og øvede.{" "}
                </p>

                <p>
                  Vi ønsker at have fokus på et stort fællesskab med plads til
                  alle og det er vigtigt for os, at de unge får en forståelse af
                  at være en del af et hold og bare har det sjovt.{" "}
                </p>

                <p>
                  Vi vil bruge springgrav til indlæring af nye spring og vil
                  efterhånden skifte springgraven gradvist ud med almindelige
                  nedspringsmåtter. Vi sætter fokus på grundspring, og man vil
                  skulle lave mange gentagelser af disse, før man går videre til
                  næste spring.{" "}
                </p>

                <p>
                  Vi vil til træning lave forskelligt opvarmning inden vi
                  begynder springe på både Airtrack (Spring bane) og Mini
                  trampolin. Ved træningen af spring på banen indgår: håndstand,
                  vejrmølle, rondant & kraftspring, flik flak og i trampolinen
                  trænes: op hop, overslag, skrue- & saltospring.
                </p>

                <p>
                  I løbet af sæsonen vil vi tage en eller flere ture over i
                  Springcentre i Idrættens Hus, og hygge os sammen med andre
                  springhold.{" "}
                </p>

                <p>
                  Der trænes i bare tæer eller tynde gymnastiksko. Kondisko er
                  ikke tilladt under træningen, af hensyn til sikkerheden. Vi
                  ser helst at man træner enten i gymnastikdragt (uden skørt)
                  eller i T-shirt & træningsbukser/shorts. Langt hår skal være
                  sat op.{" "}
                </p>

                <p>
                  Holdet deltager i foreningens lokalopvisning i Roskilde
                  Kongres- & Idrætscenter, lørdag d. 29/3 2025. og i Gymnastik
                  ved Fjorden (Vigen) i juni måned.{" "}
                </p>

                <p>
                  Opvisningsdragt og deltagergebyr er inkluderet i kontingentet.
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="border-b py-2">
            <div className="relative flex flex-row space-x-3">
              <span className="absolute inset-y-0 left-0 w-1 bg-rg-green z-0"></span>
              <p className="text-2xl">Pris: 2.150,00 Dkk</p>
            </div>
          </div>
          <div className="flex flex-row mt-4 space-x-1">
            <Link
              className="flex flex-row space-x-1 bg-rg-green p-2 rounded-2xl hover:opacity-50 duration-300 ease-in-out"
              href="/"
            >
              <FaUserPlus className="mt-1" />
              <div>Jeg har ingen profil - Opret og tilmeld</div>
            </Link>
            <Link
              className="flex flex-row space-x-1 bg-rg-green p-2 rounded-2xl hover:opacity-50 duration-300 ease-in-out"
              href="/"
            >
              <FaUnlock className="mt-1" />
              <div>Jeg har en profil - Login og tilmeld</div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="flex flex-row space-x-2">
            <InstructorCard name="Alexander Thøgersen" image={Alexander} />
            <InstructorCard name="Kim Lauer" image={Kim} />
            <InstructorCard name="Frida Mandrup" isHelper={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
