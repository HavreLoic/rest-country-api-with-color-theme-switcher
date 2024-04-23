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
  population: number;
  region: string;
  capital: string[];
  flags: FlagsType;
};

export type countryNameType = {
  official: string;
  common: string;
};

export type FlagsType = {
  svg: string;
  png: string;
};
