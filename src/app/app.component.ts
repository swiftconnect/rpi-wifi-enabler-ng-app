import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Component, OnInit, LOCALE_ID, Input , VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spacemon';
  breakpoint: number;
  version = VERSION;
  mode = 'side';
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;
  username: string;
  password: string;
  isHandset$: Observable<boolean> = this.bpo.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private bpo: BreakpointObserver) {}

  ngOnInit(): void {
    const breakpoints = Object.keys(Breakpoints).map(key => Breakpoints[key]);
    this.bpo.observe(breakpoints).pipe(map(bst => bst.matches)).subscribe(matched => {
      console.log('matched');
      this.determineSidenavMode();
      this.determineLayoutGap();
      });
  }

  private determineSidenavMode(): void {
    if (
        this.isExtraSmallDevice() ||
        this.isSmallDevice()
    ) {
        this.fixedInViewport = false;
        this.mode = 'over';
        this.opened = false;
        return;
    }

    this.fixedInViewport = true;
    this.mode = 'side';
}

private determineLayoutGap(): void {
    if (this.isExtraSmallDevice() || this.isSmallDevice()) {
        this.layoutGap = '0';
        return;
    }

    this.layoutGap = '64';
}

  public isExtraSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.XSmall);
  }

  public isSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.Small);
  }

}


