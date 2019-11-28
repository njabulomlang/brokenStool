import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.page.html',
  styleUrls: ['./track-orders.page.scss'],
})
export class TrackOrdersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  done() {
    this.router.navigateByUrl("pending-orders")
  }

}
