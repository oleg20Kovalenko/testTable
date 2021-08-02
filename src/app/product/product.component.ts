import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Data } from '../shared/data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  data: Data[] = [];
  showData: any;
  show!: boolean;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchData().subscribe((data) => {
      this.data = data;
    });
  }

  showProduct(d: Data) {
    this.showData = d;
    this.show = true;
  }

  close() {
    this.showData = '';
  }
}
