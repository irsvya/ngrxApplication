import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from './store/store';
import { Observable } from 'rxjs';
import { increment,decrement } from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrxApp';
  counter$:Observable<number>

  constructor(private store:Store<IAppState>){
    this.counter$  = this.store.pipe(select('count'))
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement())
  }
}
