import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeNewComponent } from './cake-new/cake-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeDetailComponent,
    CakeListComponent,
    CakeNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
