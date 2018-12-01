import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { AlertType, Alert } from '../models/Alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alert: Alert;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      console.dir(alert);
        if (!alert.message) {
            // clear alerts when an empty alert is received
            this.alert = null;
            console.log('nah');
            return;
        }

        // add alert to array
        this.alert = alert;
    });
}

removeAlert() {
    this.alert = null;
}

getClass() {
  if (!this.alert) {
      return;
  }

  // return css class based on alert type
  switch (this.alert.type) {
      case AlertType.Success:
          return 'alert alert-success';
      case AlertType.Error:
          return 'alert alert-danger';
      case AlertType.Info:
          return 'alert alert-info';
      case AlertType.Warning:
          return 'alert alert-warning';
  }
}


}
