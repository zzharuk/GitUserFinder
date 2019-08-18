import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})

export class UsercardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() userCard;
  @Input() errMsg;
  
  ngOnInit() {
  }

  routeToUser(){
    this.router.navigate(['user', this.userCard.login], { state: { userdata: this.userCard } });
  }
}
