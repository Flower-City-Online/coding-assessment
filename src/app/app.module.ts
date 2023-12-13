import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';

import { ThemeModule } from './theme/theme.module';
import { THEMES_LIST } from './theme/symbols';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ThemeModule.forRoot({
      themes: THEMES_LIST,
      active: {
        useFactory: () => of('dark') as Observable<string>,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
