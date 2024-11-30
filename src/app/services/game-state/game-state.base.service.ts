import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BaseState } from "../base.state";

@Injectable({
    providedIn: 'root'
  })
  export abstract class GameStateBaseService<T> extends BaseState {
    private _gameState!: T;

    public get state(): T { return this._gameState; }
    private set state(val: T) { this._gameState = { ...this._gameState, ...val } }

    public state$: Observable<T> = new BehaviorSubject(this._gameState);

    protected readonly updateState = (updatedVal: T) => {
        this.state = updatedVal;
    }

    constructor(private initialVal: T) {
      super();
      this._gameState = initialVal;
    }
  }