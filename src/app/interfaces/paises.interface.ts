// Generated by https://quicktype.io

export interface DataCountries {
  countries: Country[];
}

export interface Country {
  name:      string;
  code: string;
  continent: Continent;
  emoji: string;
  imagen: string,
}

export interface Continent {
  name: string,
}


export interface PaisData {
  countries: Pais[];
}

export interface Pais {
  name: string;
  capital:    string;
  continent: Language;
  languages:  Language[];
  currencies: string[];
  emoji:      string;
  phones:     string[];
  states:     Language[];
  imagen: string;
}

export interface Language {
  name: string;
}