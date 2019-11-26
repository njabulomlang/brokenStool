import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

viewitem(){
    this.router.navigateByUrl("/cart-modal")
  }
}
