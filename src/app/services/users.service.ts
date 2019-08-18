import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class UsersService {
  params:{};
  constructor() { 
    this.params = {
      client_id: "d8a407a66f474dee4d3c",
      client_secret: "f09881b9882feb2163dee17183f451438325c5c1"
    }
   }

  getUser(user_name:string): Promise<any> {
    const url = new URL(`https://api.github.com/users/${user_name}`);

    Object.keys(this.params).forEach(key => url.searchParams.append(key, this.params[key]));

    return fetch(url.toString())
    .then(r => r)
  }

  getUserRepos(user_name:string): Promise<{}> {

    const url = new URL(`https://api.github.com/users/${user_name}/repos`);
    
    Object.keys(this.params).forEach(key => url.searchParams.append(key, this.params[key]));

    return fetch(url.toString())
      .then(r => r.json())
      .then((repos) => {
        return repos;
      })
  }

}
