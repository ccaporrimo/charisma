import { Injectable } from '@angular/core';
import { NationalFocus, NationalFocusTypeEnum, NationState } from '../../interfaces/nation.interface';
import { GameStateBaseService } from './game-state.base.service';
import { map, Observable, takeUntil } from 'rxjs';

const initialState: NationState = { }

@Injectable({
  providedIn: 'root'
})
export class NationService extends GameStateBaseService<NationState> {

  public government$: Observable<any>;
  public nationalFocuses$: Observable<NationalFocus[]>;
  public socialState$: Observable<any>;
  public politicalState$: Observable<any>;
  public economicState$: Observable<any>;
  public diplomaticState$: Observable<any>;
  public militaryState$: Observable<any>;
  public espionageState$: Observable<any>;

  constructor() {
    super(initialState);

    this.government$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.government));
    this.nationalFocuses$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.nationalFocuses ?? []));
    this.socialState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.socialState));
    this.politicalState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.politicalState));
    this.economicState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.economicState));
    this.diplomaticState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.diplomaticState));
    this.militaryState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.militaryState));
    this.espionageState$ = this.state$.pipe(takeUntil(this.destroy$), map(s => s.espionageState));
  }

  public get name() { return this.state.name; }
  public get id() { return this.state.id; }

  public readonly nationalFocusOptions: NationalFocus[] = [
    {
      focusType: NationalFocusTypeEnum.DIPLOMACY,
      weight: 0,
      displayName: 'Diplomacy'
    },
    {
      focusType: NationalFocusTypeEnum.CULTURE,
      weight: 0,
      displayName: 'Culture'
    },
    {
      focusType: NationalFocusTypeEnum.LAW,
      weight: 0,
      displayName: 'Law'
    },
    {
      focusType: NationalFocusTypeEnum.MILITARY,
      weight: 0,
      displayName: 'Military'
    },
    {
      focusType: NationalFocusTypeEnum.ECONOMICS,
      weight: 0,
      displayName: 'Economics'
    },
    {
      focusType: NationalFocusTypeEnum.ESPIONAGE,
      weight: 0,
      displayName: 'Espionage'
    }
  ]
}
