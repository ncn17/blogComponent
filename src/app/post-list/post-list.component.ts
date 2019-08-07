import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() title: string;

  @Input() content: string;

  @Input() loveIts: number;
  
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  @Output() counterChange = new EventEmitter();

  onLike() {
    this.changeLike(+1);
  }
  onDisLike() {
    this.changeLike(-1);
  }
  changeLike(data:number){
    this.loveIts =  this.loveIts + data;
    this.counterChange.emit({
      value: this.loveIts
    });
  }

}
