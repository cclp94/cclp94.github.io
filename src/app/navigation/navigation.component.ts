import { Component, OnInit } from '@angular/core';
import { MenuItem } from './model/menu-item';

const items : MenuItem[] = [
  {name: "HOME", iconClass: "fa fa-home fa-2x", type: "PAGE", route: "/"},  
  {name: "About", iconClass: "fa fa-info-circle fa-2x", type: "PAGE", route: "/about"},
  {name: "Github", iconClass: "fa fa-github-alt fa-2x", type: "SOCIAL", route: ""},
  {name: "LinkedIn", iconClass: "fa fa-linkedin fa-2x", type: "SOCIAL", route: ""},
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  pageMenuItems;
  socialMenuItems;

  constructor() { 
    this.pageMenuItems = items.filter(item => item.type == "PAGE");
    this.socialMenuItems = items.filter(item => item.type == "SOCIAL");
  }

  ngOnInit() {
  }

}
