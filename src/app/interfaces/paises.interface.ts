// Generated by https://quicktype.io

export interface DataCountries {
  countries: Country[];
}

export interface Country {
  name:      string;
  continent: Continent,
  emoji: string;
  imagen: string,
}

export interface Continent {
  name: string,
}
