import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
