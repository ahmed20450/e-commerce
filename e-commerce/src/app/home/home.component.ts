import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
menutoggle() {
throw new Error('Method not implemented.');
}
  status: any;
  products = [
    { id: 1, name: 'Red Printed T-Shirt', price: 50.00, image: 'assets/images/product-1.jpg', rating: 4 },
    { id: 2, name: 'Blue Jeans', price: 70.00, image: 'assets/images/product-2.jpg', rating: 3 },
    { id: 3, name: 'Product 3 Name', price: 60.00, image: 'assets/images/product-3.jpg', rating: 5 },
    { id: 4, name: 'Product 4 Name', price: 45.00, image: 'assets/images/product-4.jpg', rating: 2 },
    { id: 5, name: 'Product 5 Name', price: 80.00, image: 'assets/images/product-5.jpg', rating: 4 },
    { id: 6, name: 'Product 6 Name', price: 55.00, image: 'assets/images/product-6.jpg', rating: 3 },
    { id: 7, name: 'Product 7 Name', price: 65.00, image: 'assets/images/product-7.jpg', rating: 5 },
    { id: 8, name: 'Product 8 Name', price: 75.00, image: 'assets/images/product-8.jpg', rating: 4 },
    { id: 9, name: 'Product 9 Name', price: 40.00, image: 'assets/images/product-9.jpg', rating: 2 },
    { id: 10, name: 'Product 10 Name', price: 90.00, image: 'assets/images/product-10.jpg', rating: 5 },
    { id: 11, name: 'Product 11 Name', price: 70.00, image: 'assets/images/product-11.jpg', rating: 3 },
    { id: 12, name: 'Product 12 Name', price: 55.00, image: 'assets/images/product-12.jpg', rating: 4 }
  ];
  testimonials = [
    { text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text.", name: 'Sean Parker', image: 'assets/images/user-1.png', stars: 5 },
    { text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text.", name: 'Mike Smith', image: 'assets/images/user-2.png', stars: 4 },
    { text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text.", name: 'Mabel Joe', image: 'assets/images/user-3.png', stars: 5 }
    // Ajoutez d'autres témoignages au besoin
  ];
}
