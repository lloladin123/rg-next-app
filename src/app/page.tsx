import Link from "next/link";
import DateIcon from "./components/DateIcon";
import "../styles/page.css";

export default function Home() {
  const today = new Date();
  return (
    <>
      <video controls={false} autoPlay muted loop width="100%">
        <source src="/videos/RgHeroFilm.mp4" type="video/mp4" />
      </video>
      <div className="flex justify-between p-4 space-x-4">
        <div className="flex-1 bg-blue-500 text-white p-6">
          <h1 className="text-xl font-bold mb-4">Nyheder</h1>
          <div>
            <h2 className="text-lg font-semibold">Info. om sæson 2024/2025</h2>
            <p className="mt-2">29-04-2024</p>
            <p className="mt-1">
              Kære besøgende på gymnastikforeningens hjemmeside.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-green-500 text-white p-6">
          <h1 className="text-xl font-bold mb-4">Arrangementer</h1>
          <Link href="/" className="hover-parent flex items-start space-x-4">
            <DateIcon date={today} />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Open Dance Fit</h2>
              <p className="text-xs text-gray-200">26-06-2024</p>
            </div>
          </Link>
        </div>
        <div className="flex-1 bg-red-500 text-white p-6">
          <h1 className="text-xl font-bold mb-4">Facebook</h1>
          <div>interactive preview of a Facebook page</div>
        </div>
      </div>
    </>
  );
}
