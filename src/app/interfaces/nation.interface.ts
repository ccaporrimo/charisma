export interface NationState {
    id?: string;
    name?: string;
    nationalStatistics?: NationalStatistics;
    nationalTraits?: NationalTrait[];
    focusTrait1?: NationalTraitTypeEnum;
    focusTrait2?: NationalTraitTypeEnum;
    government?: any;
    socialState?: any;
    politicalState?: any;
    economicState?: any;
    diplomaticState?: any;
    militaryState?: any;
    espionageState?: any;
}

export interface NationalTrait {
  traitType: NationalTraitTypeEnum;
  weight: number;
}

export interface NationalTraitData extends NationalTrait {    
  displayName: string;
  icon?: string;
  description?: string;
}

export interface NationalStatistics {
  population?: Population;
  education?: Education;
  treasury?: Treasury;
}

export interface Population {
  total: number;
  adults: number;
  employed: number;
  retired: number;
  children: number;
}

export interface Education {
  uneducatedPopulation: number;
  literacyRate: number;
  level1Population: number;
  level2Population: number;
  level3Population: number;
  level4Population: number;
}

export interface Treasury {
  gold: number;
  debt: number;
  totalIncome: number;
  totalExpenses: number;
}
  
export enum NationalTraitTypeEnum {
  ECONOMICS = 0,
  MILITARY,
  DIPLOMACY,
  ESPIONAGE,
  CULTURE,
  LAW
}