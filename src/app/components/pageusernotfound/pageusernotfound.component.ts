import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pageusernotfound',
  templateUrl: './pageusernotfound.component.html',
  styleUrls: ['./pageusernotfound.component.scss'],
  host: {
    class:'col-lg-12 col-xl-10 mx-auto'
  }
})
export class PageusernotfoundComponent implements OnInit {
  queryUser:string;
  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.queryUser = params['username'];
    });
  }

}
