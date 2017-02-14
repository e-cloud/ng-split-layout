import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { DOCUMENT } from '@angular/platform-browser'
import { AnimationFrame } from 'rxjs/util/AnimationFrame'

class ContainerDirective {
  constructor(protected elementRef: ElementRef) {
  }

  dispatchEvent(event) {
    this.elementRef.nativeElement.dispatchEvent(event)
  }

  getElementDimensions() {
    return this.elementRef.nativeElement.getBoundingClientRect();
  }

  get style() {
    return this.elementRef.nativeElement.style;
  }
}

@Directive({
  selector: '[primary]'
})
export class PrimaryContainerDirective extends ContainerDirective {
  constructor(protected elementRef: ElementRef) {
    super(elementRef)
  }
}

@Directive({
  selector: '[secondary]'
})
export class SecondaryContainerDirective extends ContainerDirective {
  constructor(protected elementRef: ElementRef) {
    super(elementRef)
  }
}

@Component({
  selector: 'ng-split-layout',
  templateUrl: 'ng-split-layout.component.html',
  styleUrls: ['ng-split-layout.component.scss']
})
export class NgSplitLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  @ContentChildren(PrimaryContainerDirective)
  private primaryChildren: QueryList<PrimaryContainerDirective>;

  @ContentChildren(SecondaryContainerDirective)
  private secondaryChildren: QueryList<SecondaryContainerDirective>;

  private get primaryChild() {
    return this.primaryChildren.last
  }

  private get secondaryChild() {
    return this.secondaryChildren.last
  }

  @ViewChild('splitter')
  splitter: ElementRef;

  @Input()
  vertical: boolean;

  mouseUp$: Observable<MouseEvent>;
  mouseMoves$: Observable<MouseEvent>;
  mouseDown$: Observable<MouseEvent>;
  mouseDrag$: Observable<any>;
  mouseDragSubscription: Subscription;

  subscriptions: Subscription[] = [];

  startSize: {
    container: number;
    primary: number;
    secondary: number;
  };
  _previousPrimaryPointerEvents: string;
  _previousSecondaryPointerEvents: string;


  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.mouseUp$ = Observable.fromEvent(this.document, 'mouseup')
    this.mouseMoves$ = Observable.fromEvent(this.document, 'mousemove')
    this.mouseDown$ = Observable.fromEvent(this.splitter.nativeElement, 'mousedown')

    this.mouseDrag$ = this.mouseDown$.switchMap((mdEvent) => {
      // Capture mouse down position
      const startX = mdEvent.clientX
      const startY = mdEvent.clientY

      this.handleDragStart()

      // B1. Track pos differentials using mousemove, until mouseup
      return this.mouseMoves$.map(mmEvent => {
          mmEvent.preventDefault();

          // B2. Calculate the derivative values
          return {
            detail: {
              dx: mmEvent.clientX - startX,
              dy: mmEvent.clientY - startY
            }
          }
        })
        // C. stop the drag when mousup
        .takeUntil(this.mouseUp$.do(() => {
          this.handleDragEnd()
        }));
    })
  }

  ngAfterViewInit() {
    if (this.vertical) {
      this.elementRef.nativeElement.setAttribute('vertical', '')
    }

    let needRAF = true
    this.subscriptions.push(this.mouseDrag$.subscribe(event => {
      if (needRAF) {
        needRAF = false
        AnimationFrame.requestAnimationFrame(() => {
          if (!this.startSize) {
            needRAF = true
            return
          }

          this.handleDragMove(event)

          this.notifyResize()

          needRAF = true
        })
      }
    }, err => {
      throw err
    }))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  setFlexBasis(element, flexBasis, containerSize) {
    flexBasis = Math.max(0, Math.min(flexBasis, containerSize));
    if (flexBasis === 0) {
      // Pure zero does not play well in Safari
      flexBasis = 0.000001;
    }
    element.style.flex = '1 1 ' + flexBasis + 'px';
  }

  getElementDimensions() {
    return this.elementRef.nativeElement.getBoundingClientRect();
  }

  handleDragStart() {
    const orient = this.vertical ? 'height' : 'width';

    if (this.vertical) {
      this.elementRef.nativeElement.setAttribute('vertical', '')
    }

    this.startSize = {
      container: this.getElementDimensions()[orient] - this.splitter.nativeElement.getBoundingClientRect()[orient],
      primary: this.primaryChild.getElementDimensions()[orient],
      secondary: this.secondaryChild.getElementDimensions()[orient]
    };

    // cache point events
    this._previousPrimaryPointerEvents = this.primaryChild.style.pointerEvents;
    this._previousSecondaryPointerEvents = this.secondaryChild.style.pointerEvents;
    this.primaryChild.style.pointerEvents = 'none';
    this.secondaryChild.style.pointerEvents = 'none';
  }

  handleDragMove(event) {
    const distance = this.vertical ? event.detail.dy : event.detail.dx;
    this.setFlexBasis(this.primaryChild, this.startSize.primary + distance, this.startSize.container);
    this.setFlexBasis(this.secondaryChild, this.startSize.secondary - distance, this.startSize.container);
  }

  handleDragEnd() {
    this.startSize = null;

    // restore cache
    this.primaryChild.style.pointerEvents = this._previousPrimaryPointerEvents;
    this.secondaryChild.style.pointerEvents = this._previousSecondaryPointerEvents;
  }

  notifyResize() {
    const eventInstance = new Event('layoutresize', {
      bubbles: true,
      cancelable: true
    })

    this.primaryChild.dispatchEvent(eventInstance)
    this.secondaryChild.dispatchEvent(eventInstance)
  }
}
