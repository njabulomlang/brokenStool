import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  category : string;
  constructor(public router: Router, public route: ActivatedRoute) {
    console.log('My data', this.route.snapshot.paramMap.get('data').toUpperCase());
    this.category = this.route.snapshot.paramMap.get('data').toUpperCase();
   }

  ngOnInit() {
  
  }

  list(data) {
    this.router.navigate(['list', data])
  }

}
