export interface NationState {
    id?: number;
    name?: string;
    nationalFocuses?: NationalFocus[],
    government?: any;
    socialState?: any;
    politicalState?: any;
    economicState?: any;
    diplomaticState?: any;
    militaryState?: any;
    espionageState?: any;
}

export interface NationalFocus {
    focusType: NationalFocusTypeEnum;
    weight: number;
    displayName: string;
  }
  
  export enum NationalFocusTypeEnum {
    ECONOMICS = 0,
    MILITARY,
    DIPLOMACY,
    ESPIONAGE,
    CULTURE,
    LAW
  }