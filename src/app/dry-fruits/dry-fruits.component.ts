import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dry-fruits',
  templateUrl: './dry-fruits.component.html',
  styleUrls: ['./dry-fruits.component.scss']
})
export class DryFruitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
