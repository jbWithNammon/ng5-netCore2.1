import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { MessageResource } from '../../shared/resources/message.resource';
import { AppService } from '../../app.service';
//import { AuthService } from '../../authentication/auth.service';
import { menu } from '../../models/constants';
import { IMenu } from './../../models/interfaces';

@Component({
  selector: 'leftBar',
  templateUrl: './leftBar.component.html',
  styleUrls: ['./leftBar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LeftBarComponent implements OnInit {
  menu: IMenu[];
  isSelected: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,
    private app: AppService) {
  }
  ngOnInit() {
    this.menu = menu;
    console.log(this.menu);
  }
  setRouterLink(link:string):void{
    console.log(link);
    this.router.navigate([link]);
  }
}
