import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-repos-list',
  templateUrl: './user-repos-list.component.html',
  styleUrls: ['./user-repos-list.component.scss']
})
export class UserReposListComponent implements OnInit {
  @Input() repos;
  constructor() { }

  ngOnInit() {
  }

}
