import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  offerData: any = [];
  categoryData: any = [];
  productData: any = [];

  limit: number = 10; // <==== Edit this number to limit API results

  offerDataOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  categoryDataOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: false,
    autoWidth: true,
    margin: 20,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  productDataOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  constructor() { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.offerData = [
      {
        id: 1,
        imageURL: "/assets/images/banners/offer1.jpg",
        dealText: "6% Off",
        offerText: "Buy More & Save More",
        item: "Fresh Vegetables"
      },
      {
        id: 2,
        imageURL: "/assets/images/banners/offer2.jpg",
        dealText: "5% Off",
        offerText: "Buy More & Save More",
        item: "Fresh Fruits"
      },
      {
        id: 3,
        imageURL: "/assets/images/banners/offer3.jpg",
        dealText: "3% Off",
        offerText: "Hot Deals on New Items",
        item: "Daily Essentials Eggs & Dairy"
      },
      {
        id: 4,
        imageURL: "/assets/images/banners/offer4.jpg",
        dealText: "2% Off",
        offerText: "Hot Deals on New Items",
        item: "Beverages"
      },
      {
        id: 5,
        imageURL: "/assets/images/banners/offer5.jpg",
        dealText: "3% Off",
        offerText: "Hot Deals on New Items",
        item: "Nuts & Snacks"
      }
    ];

    this.categoryData = [
      {
        id: 1,
        imageURL: "/assets/images/category/icon-1.svg",
        categoryText: "Vegetables & Fruits",
      },
      {
        id: 2,
        imageURL: "/assets/images/category/icon-2.svg",
        categoryText: "Grocery & Staples",
      },
      {
        id: 3,
        imageURL: "/assets/images/category/icon-3.svg",
        categoryText: "Dairy & Eggs",
      },
      {
        id: 4,
        imageURL: "/assets/images/category/icon-4.svg",
        categoryText: "Beverages",
      },
      {
        id: 5,
        imageURL: "/assets/images/category/icon-5.svg",
        categoryText: "Snacks",
      },
      {
        id: 6,
        imageURL: "/assets/images/category/icon-6.svg",
        categoryText: "Noodles & Sauces",
      },
      {
        id: 7,
        imageURL: "/assets/images/category/icon-7.svg",
        categoryText: "Home Care",
      },
      {
        id: 8,
        imageURL: "/assets/images/category/icon-8.svg",
        categoryText: "Personal Care",
      },
      {
        id: 9,
        imageURL: "/assets/images/category/icon-9.svg",
        categoryText: "Pet Care",
      },
      {
        id: 10,
        imageURL: "/assets/images/category/icon-10.svg",
        categoryText: "Meat & Seafood",
      },
      {
        id: 11,
        imageURL: "/assets/images/category/icon-11.svg",
        categoryText: "Electronics",
      }
    ];

    this.productData = [
      {
        id: 1,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 150",
        imageUrl: "/assets/images/product/img-1.jpg",
        discount: "6%"
      },
      {
        id: 2,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 150",
        imageUrl: "/assets/images/product/img-2.jpg",
        discount: "5%"
      },
      {
        id: 3,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 170",
        imageUrl: "/assets/images/product/img-3.jpg",
        discount: "10%"
      },
      {
        id: 4,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 130",
        priceWas: "₹ 190",
        imageUrl: "/assets/images/product/img-4.jpg",
        discount: "6%"
      },
      {
        id: 5,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 80",
        priceWas: "₹ 100",
        imageUrl: "/assets/images/product/img-5.jpg",
        discount: "6%"
      },
      {
        id: 6,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 150",
        imageUrl: "/assets/images/product/img-6.jpg",
        discount: "6%"
      },
      {
        id: 7,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 150",
        imageUrl: "/assets/images/product/img-7.jpg",
        discount: "6%"
      },
      {
        id: 8,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 150",
        imageUrl: "/assets/images/product/img-8.jpg",
        discount: "6%"
      },
      {
        id: 9,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 150",
        imageUrl: "/assets/images/product/img-9.jpg",
        discount: "6%"
      },
      {
        id: 10,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 150",
        imageUrl: "/assets/images/product/img-10.jpg",
        discount: "6%"
      },
      {
        id: 11,
        availability: "Available (In Stock)",
        title: "Product Title Here",
        priceIs: "₹ 120",
        priceWas: "₹ 150",
        imageUrl: "/assets/images/product/img-11.jpg",
        discount: "6%"
      }
    ]

  }

  // toggleModal(targetId: string) {
  //   $(".mobileMenu, .overlay").toggleClass("open");
  // }

}
