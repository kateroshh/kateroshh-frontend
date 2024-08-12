export type MobileProps = {
  isMobile?: boolean;
};

export type TChips = {
  chips?: string[];
};

export type TProjectCard = {
  id: string;
  title: string;
  about: string;
  chips?: TChips["chips"];
  link?: string;
  main: boolean;
  year?: string;
  company?: string;
};

export type TTableHeader = {
  year: string;
  project: string;
  company: string;
  tech: string;
  link: string;
};

export type TProjectCards = TProjectCard[];

export type TLinks = {
  href: string;
  title: string;
};

export type TPortfolioCard = {
  id: string;
  sort: number;
  period: string;
  title: string;
  text?: string[];
  achievements?: string[];
  main: boolean;
  chips?: string[];
  links?: TLinks[];
};

export type TPortfolioList = {
  list?: string[];
  title: string;
};

export type TPortfolioLinks = {
  list?: TLinks[];
  title: string;
};

export type TTextArray = {
  textArray?: string[];
  classNameText?: string;
};

export type TButton = {
  isFill?: boolean;
};

export type TMenuItem = {
  id: string;
  title: string;
  tag: string;
};

export type TSwitchTableCards = {
  typeDisplays: string;
  setTypeDisplays: (typeDisplays: string) => void;
};
