import { Injectable } from '@angular/core';
import { NationalStatistics, NationalTrait, NationalTraitData, NationState } from '../../interfaces/nation.interface';
import { GameStateBaseService } from './game-state.base.service';
import { map, Observable, takeUntil } from 'rxjs';
import * as NationalTraits from '../../data/nation/national-trait';

const initialState: NationState = {
  nationalStatistics: {
    population: {
      total: 100000,
      adults: 0.5,
      children: 0.25,
      retired: 0.25,
      employed: 0.47
    },
    education: {
      uneducatedPopulation: 0.5,
      literacyRate: 0.5,
      level1Population: 0.5,
      level2Population: 0,
      level3Population: 0,
      level4Population: 0
    },
    treasury: {
      gold: 1000,
      debt: 0,
      totalExpenses: 0,
      totalIncome: 0
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class NationService extends GameStateBaseService<NationState> {

  public nationState$: Observable<NationState>;
  public nationalStatistics$: Observable<NationalStatistics>;
  public government$: Observable<any>;
  public nationalFocuses$: Observable<NationalTrait[]>;
  public socialState$: Observable<any>;
  public politicalState$: Observable<any>;
  public economicState$: Observable<any>;
  public diplomaticState$: Observable<any>;
  public militaryState$: Observable<any>;
  public espionageState$: Observable<any>;

  public override update(updatedVal: NationState): void {
    this.updateState(updatedVal);
  }

  constructor() {
    super(initialState);

    this.nationState$ = this.state$;
    this.nationalStatistics$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.nationalStatistics ?? {}));
    this.government$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.government));
    this.nationalFocuses$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.nationalTraits ?? []));
    this.socialState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.socialState));
    this.politicalState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.politicalState));
    this.economicState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.economicState));
    this.diplomaticState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.diplomaticState));
    this.militaryState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.militaryState));
    this.espionageState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.espionageState));
  }

  public get name() { return this.state.name; }
  public get id() { return this.state.id; }

  public readonly nationalFocusOptions: NationalTraitData[] = [
    NationalTraits.Diplomacy,
    NationalTraits.Culture,
    NationalTraits.Law,
    NationalTraits.Military,
    NationalTraits.Economics,
    NationalTraits.Espionage
  ];
}
