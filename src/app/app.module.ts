import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempliteralFormsComponent } from './templiteral-forms/templiteral-forms.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { EleDirective } from './ele.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TestformComponent } from './testform/testform.component';

@NgModule({
  declarations: [
    AppComponent,
    TempliteralFormsComponent,
    InputComponent,
    OutputComponent,
    EleDirective,
    ReactiveFormComponent,
    TestformComponent,
    
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
