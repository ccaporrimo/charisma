import { Component, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: 'app-base-component',
    template: ''
})
export class BaseComponent implements OnDestroy {
    protected destroy$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    ngOnDestroy(): void {
        this.destroy$.next(null);
        this.destroy$.complete();
    }
}