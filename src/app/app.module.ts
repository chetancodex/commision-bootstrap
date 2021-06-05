import { ChessModule } from './chess/chess.module';
import { HeroModule } from './hero/hero.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    HeroModule,
    ChessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
