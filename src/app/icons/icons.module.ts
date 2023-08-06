import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Sunrise, Sunset, RefreshCw, Wind, CloudRain, Cloud } from 'angular-feather/icons';

const icons = {
  Sunrise,
  Sunset,
  RefreshCw,
  Wind,
  CloudRain,
  Cloud
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
