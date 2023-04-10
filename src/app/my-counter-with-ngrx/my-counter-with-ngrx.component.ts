import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.action';



@Component({
  selector: 'app-my-counter-with-ngrx',
  templateUrl: './my-counter-with-ngrx.component.html',
  styleUrls: ['./my-counter-with-ngrx.component.css']
})
export class MyCounterWithNgrxComponent {
  count$: Observable<number>
  
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
   a:any ;
  b: any ;
  sum:any;
  dif:any;
  addition() {

    this.sum = (this.a + this.b);
  }
  sub(){
    this.dif= (this.a - this.b)
  }
}
