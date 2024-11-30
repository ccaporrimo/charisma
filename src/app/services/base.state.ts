import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'app-base-service',
    template: ''    
})
export abstract class BaseState {
    private _destroy$!: Subject<any>;

    get destroy$() {
      if (!this._destroy$) {
        this._destroy$ = new Subject();
      }
      return this._destroy$;
    }
    
    ngOnDestroy() {
      if (this._destroy$) {
        this._destroy$.next(true);
        this._destroy$.complete();
      }
    }
}