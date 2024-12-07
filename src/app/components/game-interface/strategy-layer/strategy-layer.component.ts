import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-strategy-layer',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './strategy-layer.component.html',
  styleUrl: './strategy-layer.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StrategyLayerComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('frame') frame!: ElementRef<HTMLDivElement>;
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;

  private readonly panMargin: number = 75;
  private readonly panSpeed: number = 5;

  private mapData!: string;
  private zoom: number = 1;

  private pollInterval!: any;

  private x!: number;
  private y!: number;
  private windowWidth!: number;
  private windowHeight!: number;

  ngAfterViewInit(): void {    
    this.loadMap();
    
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    
    this.pollInterval = setInterval(this.pan.bind(this), 5);
  }

  private pan() {
    const x = this.getPanAmount(this.x, this.windowWidth);
    const y = this.getPanAmount(this.y, this.windowHeight);
    this.frame.nativeElement.scrollBy(x, y);
  }

  public scroll(event: WheelEvent) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);    
    this.mapContainer.nativeElement.style.transform = `scale(${this.zoom += -(delta * .1)})`;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {   
    this.x = event.clientX;
    this.y = event.clientY;
  }

  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent) {
    const h = window.innerHeight;
    const w = window.innerWidth;
    console.log('clientX: ', event.clientX, '\nclientY: ', event.clientY);
    console.log('getPanAmountX: ', this.getPanAmount(event.clientX, w), '\ngetPanAmountY: ', this.getPanAmount(event.clientY, h));
  }

  private getPanAmount(dimension: number, windowDimension: number): number {
    return dimension < this.panMargin ? -this.panSpeed : 
      dimension > windowDimension - this.panMargin ? this.panSpeed :
      0;
  }

  private async loadMap() {
    this.mapData = await (await fetch('/assets/images/world.svg')).text();
    this.mapContainer.nativeElement.innerHTML = this.mapData;
  }
}
