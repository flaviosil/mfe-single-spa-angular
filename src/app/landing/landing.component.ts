import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../package.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  ngVersion = packageInfo.dependencies['@angular/core'];

  constructor() { }

  ngOnInit(): void {
  }

}
