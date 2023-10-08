interface ICardCountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: { svg: string; png: string };
  currencies: string[];
  languages: string[];
  translations: string;
  flag: string;
  regionalBlocs: string[];
  cioc: string;
  independent: boolean;
}

export type { ICardCountry };
