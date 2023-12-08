import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {
  constructor(private route: ActivatedRoute) {}

  cartItems = [
    {
      id: 1,
      name: 'Red Printed T-Shirt',
      price: 50.00,
      image: 'assets/images/buy-1.jpg',
      quantity: 1
    },
    {
      id: 2,
      name: 'Blue Jeans',
      price: 70.00,
      image: 'assets/images/buy-2.jpg',
      quantity: 2
    },
    {
      id: 3,
      name: 'Blue Jeans',
      price: 70.00,
      image: 'assets/images/buy-3.jpg',
      quantity: 2
    }
  ];


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const newItem = {
        id: params['id'],
        name: params['name'],
        price: params['price'],
        image: params['image'],
        quantity: 1 // Vous pouvez définir une quantité par défaut ici
      };

      // Ajouter le nouvel élément au panier
      this.cartItems.push(newItem);
    });


  }

  removeFromCart(id: number): void {
    const index = this.cartItems.findIndex(item => item.id === id);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }





}

