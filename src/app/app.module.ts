import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TablaComponent } from './parametros/tabla.component';
import { ServidorService } from './services/servidor.service';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      ServidorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
