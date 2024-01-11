import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-action-info',
  templateUrl: './action-info.component.html',
  styleUrls: ['./action-info.component.css'],
})
export class ActionInfoComponent implements OnInit {
  constructor(private service: ApiServiceService) {}

  ActionInfoList: any = this.service.getActionInfo();
  ModelTitle = 'Loading';

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.service.getActionInfo().subscribe((data) => {
      this.ActionInfoList = data;
    });
  }
}
