import { Injectable, signal } from '@angular/core';
import { single } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  name = signal('Kevin');
  backstory = signal('blah blah bah');

  metrics = {
    angular: signal(5),
    nerdness: signal(10),
    zonelessness: signal(5),
  };
}
