import { Component, OnInit } from '@angular/core';
import { BusinessService } from './business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  opportunities;
  constructor(private businessService: BusinessService) { }
  ngOnInit() {
    this.opportunities = this.businessService.business;
  }

}
