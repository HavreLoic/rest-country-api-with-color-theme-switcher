export type ErrorPageType = {
  statusText?: string | number;
  message?: string;
};

export type optionType = {
  option: string | number;
  value: string | number;
};

export type countriesInfoSummaryType = {
  name: countryNameType;
  population: string;
  region: string;
  capital: string[];
  flags: FlagsType;
};

type LanguageCode = string;

export type languages = {
  [code in LanguageCode]?: string;
};

export type countriesDetailType = {
  name: countryNameType;
  population: string;
  region: string;
  capital: string[];
  flags: FlagsType;
  subregion: string;
  tld: string[];
  currencies: currenciesType;
  languages: languages;
  borders: string[];
};

export type countryNameType = {
  official: string;
  common: string;
  nativeName: countryNativeNameType;
};

export type countryNativeNameType = {
  official: string;
  common: string;
};

export type currenciesType = {
  name: string;
  symbol: string;
};

export type FlagsType = {
  svg: string;
  png: string;
};

export type CountryNameContextType = {
  countryName: string;
  changeCountry: (name: string) => void;
};

export type ThemeContextType = {
  theme: string;
  changeTheme: (name: string) => void;
};

export type SearchTermContextType = {
  searchTerm: string;
  changeSearchTerm: (name: string) => void;
};

export type RegionNameType = {
  regionName: string;
  changeRegionName: (name: string) => void;
};
