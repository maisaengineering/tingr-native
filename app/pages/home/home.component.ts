// angular
import {Component, ViewChild, ChangeDetectorRef, Inject, OnInit, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

// nativescript
import {RadSideDrawerComponent, SideDrawerType} from 'nativescript-telerik-ui/sidedrawer/angular';
import {DrawerTransitionBase, SlideInOnTopTransition} from 'nativescript-telerik-ui/sidedrawer';
import {Page} from "ui/page";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    // Using this style here requires you to setup font icons in your project
    // See here on how to do that: https://docs.nativescript.org/ui/icon-fonts
    // Another nice option is to use this plugin: https://github.com/NathanWalker/nativescript-fonticon
    styles: [`
    .fa {
      font-family: FontAwesome, fontawesome-webfont;
      font-size:20;
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    private _drawer: SideDrawerType;

    constructor(
        @Inject(Page) private _page: Page,
    private _changeDetectionRef: ChangeDetectorRef,
    private _router: Router) {
    _page.on("loaded", this.onLoaded, this);
}

public get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
}

public toggle() {
    this._drawer.toggleDrawerState();
}

public onLoaded(args) {
    this._sideDrawerTransition = new SlideInOnTopTransition();
}

ngOnInit() {
    this._router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
            this._drawer.closeDrawer();
        }
    });
}

ngAfterViewInit() {
    this._drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
}
}