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
  chips?: string[];
  link?: string;
  main: boolean;
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
