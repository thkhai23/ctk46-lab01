import Link from "next/link";
import { Country } from "./types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,region,flags");
  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }
  return res.json();
}

export default async function CountriesPage() {
  const countries = await getCountries();

  const sortedCountries = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Danh sách Quốc gia</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedCountries.map((country) => (
          <Link href={`/countries/${country.cca3.toLowerCase()}`} key={country.cca3} className="block transition-transform hover:-translate-y-1">
            <Card className="h-full overflow-hidden flex flex-col">
              <div className="aspect-[3/2] relative border-b bg-gray-50 flex items-center justify-center p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={country.flags.svg} 
                  alt={country.flags.alt || `Cờ của ${country.name.common}`} 
                  className="object-contain w-full h-full shadow-sm border"
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="line-clamp-1" title={country.name.common}>{country.name.common}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Khu vực: {country.region}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
