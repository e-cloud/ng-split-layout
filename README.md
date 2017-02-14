# NgSplitLayout

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

## Features
* basic splittable layout
* nested layouts
* vertically split layout via `vertical` attribute
* resize events notifying for direct children as `layout-resize`

## Todo
* shrink to one side by input

## Example
Check out [demo-app](./demo-app/app/app.component.html)

## drawbacks

* due to 
    * [issue: ng-content default content](https://github.com/angular/angular/issues/12530)
    * [issue: Add support for ::slotted()](https://github.com/angular/angular/issues/11595)
    * [issue: Support for Dynamic Content Projection](https://github.com/angular/angular/issues/8563)

  support for slot control is less good enough, and don't support dynamic handle element.

* use `flex` layout internally, only support IE11+ theoretically. 
* However, for some un-figured-out reason, IE11 is not supported too.


## Inspiration
This implementation is heavily inspired by [vaadin-split-layout](https://github.com/vaadin/vaadin-split-layout)

## Thanks
Thanks to [ng-demo-lib](https://github.com/nsmolenskii/ng-demo-lib).

## Development

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`..com/angular/angular-cli/blob/master/README.md).
