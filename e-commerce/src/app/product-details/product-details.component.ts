import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: string="";
  productName: string="";
  productImage: string ="";
  productRating: number=0;
  productPrice: number =0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const name = params.get('name');
      const image = params.get('image');
      const rating = params.get('rating');
      const price = params.get('price');

      if (id !== null) {
        this.productId = id;
      }

      if (name !== null) {
        this.productName = name;
      }

      if (image !== null) {
        this.productImage = image;
      }

      if (rating !== null) {
        this.productRating = +rating;
      }

      if (price !== null) {
        this.productPrice = +price;
      }
    });
}



}
