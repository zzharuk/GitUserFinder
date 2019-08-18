import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent implements OnInit, AfterViewInit {
  @Input() repo;
  Elem;
  constructor(elem: ElementRef) { 
    this.Elem = elem;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    // console.log(this.Elem.nativeElement.clientHeight, this.Elem.nativeElement.clientWidth);
  }

}
