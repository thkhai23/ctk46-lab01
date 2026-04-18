import Link from "next/link";
import { notFound } from "next/navigation";
import { Country } from "../types";
import { Button } from "@/components/ui/button";

interface CountryDetailPageProps {
  params: Promise<{ code: string }>;
}

async function getCountry(code: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (!res.ok) {
    if (res.status === 404) return notFound();
    throw new Error("Failed to fetch country details");
  }
  const data = await res.json();
  return data[0];
}

export default async function CountryDetailPage({ params }: CountryDetailPageProps) {
  const { code } = await params;
  const country = await getCountry(code);

  const languages = country.languages ? Object.values(country.languages).join(", ") : "Không có dữ liệu";
  const capital = country.capital ? country.capital.join(", ") : "Không có dữ liệu";

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/countries">
        <Button variant="outline" className="mb-8">
          ← Quay lại danh sách
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={country.flags.svg}
            alt={country.flags.alt || `Cờ của ${country.name.common}`}
            className="w-full max-w-md shadow-md border rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2">{country.name.common}</h1>
          <h2 className="text-xl text-gray-500 mb-8">{country.name.official}</h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <span className="font-semibold text-gray-700 block mb-1">Thủ đô:</span>
              <span className="text-lg">{capital}</span>
            </div>

            <div className="border-b pb-4">
              <span className="font-semibold text-gray-700 block mb-1">Khu vực:</span>
              <span className="text-lg">{country.region} {country.subregion ? `- ${country.subregion}` : ""}</span>
            </div>

            <div className="border-b pb-4">
              <span className="font-semibold text-gray-700 block mb-1">Dân số:</span>
              <span className="text-lg">{country.population.toLocaleString("vi-VN")} người</span>
            </div>

            <div className="border-b pb-4">
              <span className="font-semibold text-gray-700 block mb-1">Ngôn ngữ:</span>
              <span className="text-lg">{languages}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
