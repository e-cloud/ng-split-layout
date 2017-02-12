import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSplitLayoutComponent, PrimaryContainerDirective, SecondaryContainerDirective } from './ng-split-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgSplitLayoutComponent,
    PrimaryContainerDirective,
    SecondaryContainerDirective
  ],
  exports: [
    NgSplitLayoutComponent,
    PrimaryContainerDirective,
    SecondaryContainerDirective
  ]
})
export class NgSplitLayoutModule {

}
