import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuToggleSubject = new Subject<void>();

  menuToggle$ = this.menuToggleSubject.asObservable();

  toggleMenu() {
    this.menuToggleSubject.next();
  }
}
