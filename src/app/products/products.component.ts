import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() imgUrl:string = '';
  @Input() productName:string = '';
  @Input() Qty = 1;
  @Input() Unit='KG';
  @Input() MRP:number = 0;
  @Input() sellPrice:number = 0;
  @Input() halfSellPrice:number = 0;
  @Input() productId:number = 0;
  @Input() halfUnit='500g'
  productUrl=''
 



  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if(!this.halfSellPrice){
    this.halfSellPrice =    this.sellPrice/2;
    this.halfSellPrice = this.roundDecimal(this.halfSellPrice,2);
    }
    this.productUrl =  `/productDetails/${this.productId}`
   
  }

  roundDecimal(value:number, precision:number) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

}
