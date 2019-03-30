import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { VERSION } from '@angular/material';
import { NavItem } from './nav-item';
import { NavService } from './nav.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName:'Dashboard',
      iconName:'dashboard',
      route:'dashboard',
      children: []
},
{
      displayName:'Transform Service Enities',
      iconName:'transform',
      route:'transform',
      children: [
	  {
      displayName:'Transform Service',
      iconName:'import_export',
      route:'export',
      children: []
	},
	  {
      displayName:'Transform LSB Service',
      iconName:'send',
      route:'lsb',
      children: []
	},
	{
      displayName:'Content Service',
      iconName:'file_copy',
      route:'content',
      children: []
	},
	{
      displayName:'Archive Service',
      iconName:'archive',
      route:'content',
      children: []
	}
	  ]
},{
  displayName:'Notifications Service',
  iconName:'notifications',
  route:'Notification',
  children: []
},
{
  displayName:'Configuration',
  iconName:'settings',
  route:'Configuration',
  children: [
    {
      displayName:'Audit Logging',
      iconName:'description',
      route:'Notification',
      children: []
    },
    {
      displayName:'ICMP Nodes',
      iconName:'sync',
      route:'Notification',
      children: []
    },
  ]
},
   

   



  ];
  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
