export interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion?: string;
  capital?: string[];
  population: number;
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
  languages?: {
    [key: string]: string;
  };
}
