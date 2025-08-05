import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { counterreducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /****
     * StoreModule is responsible for configuring the store
     * forRoot(), is a static method provided by StoreModule
     * StoreModule.forRoot(), used to configure root store of application.
     * syntax: 
     * StoreModule.forRoot(reducers: ActionReducerMap<State, Action>, metaReducers?: MetaReducer<State>[])
     * count -> state name and counterreducer -> is a reducer
     */ 
    StoreModule.forRoot({count:counterreducer}),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
