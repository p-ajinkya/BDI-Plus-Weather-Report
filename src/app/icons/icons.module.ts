import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Sunrise, Sunset, RefreshCw, Wind } from 'angular-feather/icons';

const icons = {
  Sunrise,
  Sunset,
  RefreshCw,
  Wind
};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
