import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewReceipt() {
    this.router.navigateByUrl("receipts")
  }

}
