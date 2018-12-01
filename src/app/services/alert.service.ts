import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { AlertType, Alert } from '../models/Alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<Alert>();

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // clear alert messages
        this.clear();
      }
    });
  }

  // subscribe to alerts
  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  // convenience methods
  success(message: string) {
    this.alert(new Alert({ message, type: AlertType.Success }));
  }

  error(message: string) {
    this.alert(new Alert({ message, type: AlertType.Error }));
  }

  info(message: string) {
    this.alert(new Alert({ message, type: AlertType.Info }));
  }

  warn(message: string) {
    this.alert(new Alert({ message, type: AlertType.Warning }));
  }

  // main alert method
  alert(alert: Alert) {
    this.subject.next(alert);
  }

  // clear alert
  clear() {
    this.subject.next(new Alert());
  }
}
