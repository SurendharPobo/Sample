import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './Components/reactive/reactive.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './Components/data/data.component';
import { DirectiveComponent } from './Components/directive/directive.component';
import { StringCheckComponent } from './Components/string-check/string-check.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    PageNotFoundComponent,
    DataComponent,
    DirectiveComponent,
    StringCheckComponent,
    ParentComponent,
    ChildComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
