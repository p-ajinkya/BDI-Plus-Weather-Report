import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from './weather.service';
import { FahrenheitToCelsiusPipe } from './fahrenheit-to-celsius.pipe';
import { IconsModule } from './icons/icons.module';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { TimestampToTimePipe } from './timeStamp.pipe';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FahrenheitToCelsiusPipe,
    TimestampToTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IconsModule,
    LottieModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
