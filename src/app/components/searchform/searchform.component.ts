import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss'],
  host: {
    class:'col-lg-5 mx-auto'
  }
})
export class SearchformComponent implements OnInit {
  userName:string;
  userFound: boolean;
  userProfile: any;
  errorMSG: string;

  constructor(private searchService: UsersService) {
    this.userFound = false;
    this.errorMSG = "";
    this.userName = "";
  }

  ngOnInit() {

  }

  searchUser() {
    this.searchService.getUser(this.userName)
    .then(r => {
      if (r.status != 200) {
        this.errorMSG = r.statusText;
        this.userFound = false;
        return ;
      } 
      r.json().then((res) => {
        this.userProfile = res;
        this.errorMSG = "";
        this.userFound = true;
      })
    })
   
  }

}
