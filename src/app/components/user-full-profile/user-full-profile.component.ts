import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-full-profile',
  templateUrl: './user-full-profile.component.html',
  styleUrls: ['./user-full-profile.component.scss'],
  host: {
    class:'col-lg-12 col-xl-10 mx-auto'
  }
})
export class UserFullProfileComponent implements OnInit {
  UserProfile:any;
  UserRepos:any;
  fetchComplete=false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private searchRepos: UsersService
    ) {
    if('state' in this.router.getCurrentNavigation().extras){
      this.UserProfile = this.router.getCurrentNavigation().extras.state.userdata;
      this.searchRepos.getUserRepos(this.UserProfile.login).then((repos)=>{
        this.UserRepos = repos;
        this.fetchComplete = true;
      })
    } else {
      this.route.params.subscribe( params => {
        this.searchRepos.getUser(params.login)
        .then(res => {
          if (res.status != 200) {
            this.router.navigate(['/usernotfound'],{ queryParams: { username: params.login } });
            return;
          } else {
            res.json().then((r) => {
              this.UserProfile = r;
              return r;
            }).then((r)=>{
              this.searchRepos.getUserRepos(r.login).then((repos)=>{
                this.UserRepos = repos;
                this.fetchComplete = true;
              })
            })
          }
        })
      });
    }
  }

  ngOnInit() {
    
  }

}
