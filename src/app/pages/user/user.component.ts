import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  count$:Observable<number>;
  constructor(private store:Store<IAppState>){
    this.count$ = store.pipe(select('count'));
  }

}
