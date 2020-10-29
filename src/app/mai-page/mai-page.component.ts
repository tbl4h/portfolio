import { Component, OnInit } from '@angular/core';
import { FillProjectsDataService } from '../services/fill-projects-data.service';

import { version } from '../../package.json';

@Component({
  selector: 'app-mai-page',
  templateUrl: './mai-page.component.html',
  styleUrls: ['./mai-page.component.css']
})
export class MaiPageComponent implements OnInit {

  constructor(private projecData: FillProjectsDataService) { }

  public mainHeader: String = "Portfolio Michał Karwacki";

  public projectList: Object;

  ngOnInit(): void {
    this.projecData.showProjectDataType();

  }

}
