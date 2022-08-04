import { Component, OnInit, VERSION } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { take, filter, delay } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  result1 = {};
  result2 = {};
  result3 = {};

  ngOnInit() {
    const behaviorSubject = new BehaviorSubject<number>(0);
    this.checkLoggedIn1(behaviorSubject, 'behaviorSubject');
    behaviorSubject.next(1);
    behaviorSubject.next(3);
    this.checkLoggedIn2(behaviorSubject, 'behaviorSubject');
    behaviorSubject.next(5);
    behaviorSubject.next(7);
    behaviorSubject.next(8);
    behaviorSubject.next(9);
    behaviorSubject.next(11);
    behaviorSubject.next(13);
    this.checkLoggedIn3(behaviorSubject, 'behaviorSubject');
    behaviorSubject.next(15);
    behaviorSubject.next(17);
    behaviorSubject.next(19);
    behaviorSubject.next(21);
    behaviorSubject.next(22);
  }

  loggedIn($userLoggedIn: Observable<number>, id: string, result: Object) {
    $userLoggedIn
      .pipe(
        filter((i) => i % 2 === 0),
        take(1)
      )
      .subscribe((isLoggedIn) => {
        result[id] = isLoggedIn;
      });
  }

  checkLoggedIn1($userLoggedIn: Observable<number>, id: string) {
    this.loggedIn($userLoggedIn, id, this.result1);
  }

  checkLoggedIn2($userLoggedIn: Observable<number>, id: string) {
    this.loggedIn($userLoggedIn, id, this.result2);
  }
  checkLoggedIn3($userLoggedIn: Observable<number>, id: string) {
    this.loggedIn($userLoggedIn, id, this.result3);
  }
}
