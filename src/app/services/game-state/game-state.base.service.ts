import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BaseState } from "../base.state";

@Injectable({
    providedIn: 'root'
  })
  export abstract class GameStateBaseService<T> extends BaseState {
    private _gameState!: T;

    protected get state(): T { return this._gameState; }
    private set state(val: T) { this._gameState = { ...this._gameState, ...val } }

    private stateSubject: BehaviorSubject<T> = new BehaviorSubject<T>({} as T);
    protected state$: Observable<T> = this.stateSubject.asObservable();

    protected readonly updateState = (updatedVal: T) => {
        this.state = updatedVal;
        this.stateSubject.next(this.state);
    }

    public abstract update(updatedVal: T): void;

    constructor(private initialVal: T) {
      super();
      this._gameState = initialVal;
    }
  }