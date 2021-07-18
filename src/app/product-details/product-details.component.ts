import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId:number;
  imgUrl:string = '';
  title:string = '';
  productName:string = '';
  mrp:number = 0;
  sellPrice:number = 0;
  prodDescription:string = '';

  constructor(route: ActivatedRoute) {
    this.productId = +route.snapshot.params['id'];
}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getImgUrl(this.productId);
   
    this.getProductName(this.productId);
    this.getProductDescription(this.productId);
    this.getSellPrice(this.productId);
    this.getMrp(this.productId);

    
  }

  getImgUrl(productId:number){
    switch(productId){
      case 1:{
        this.imgUrl = 'assets/img/CASHEW180.jpg'
        break;
      }
      case 2:{
        this.imgUrl = 'assets/img/CashewW210.jpg'
        break;
      }
      case 3:{
        this.imgUrl = 'assets/img/cashewW240.jpg'
        break;
      }
      case 4:{
        this.imgUrl = 'assets/img/cashewW320.jpg'
        break;
      }
      case 5:{
        this.imgUrl = 'assets/img/cashewJH.jpg'
        break;
      }
      case 6:{
        this.imgUrl = 'assets/img/Almondcalifornia.jpg'
        break;
      }
      case 7:{
        this.imgUrl = 'assets/img/almondRegular.jpg'
        break;
      }
      case 8:{
        this.imgUrl = 'assets/img/raisinAfganiBlack.png'
        break;
      }
      case 9:{
        this.imgUrl = 'assets/img/raisinBlack.jpg'
        break;
      }
      case 10:{
        this.imgUrl = 'assets/img/raisinGolden.jpg'
        break;
      }
      case 11:{
        this.imgUrl = 'assets/img/raisinGreen.jpg'
        break;
      }
      case 12:{
        this.imgUrl = 'assets/img/raisinGreenLong.jpg'
        break;
      }
      case 13:{
        this.imgUrl = 'assets/img/raisinNormal.jpg'
        break;
      }
      case 14:{
        this.imgUrl = 'assets/img/walnutgGeen-tree-gold.jpg'
        break;
      }
      case 15:{
        this.imgUrl = 'assets/img/walnutKKK.jpg'
        break;
      }
      case 16:{
        this.imgUrl = 'assets/img/anjeerSpecialGold.jpg'
        break;
      }
      case 17:{
        this.imgUrl = 'assets/img/datesBarari.jpg'
        break;
      }
      case 18:{
        this.imgUrl = 'assets/img/datesBarari2.jpeg'
        break;
      }
      case 19:{
        this.imgUrl = 'assets/img/datesGulf.jpg'
        break;
      }
      case 20:{
        this.imgUrl = 'assets/img/datesRoyalCrown.jpg'
        break;
      }
      case 21:{
        this.imgUrl = 'assets/img/datesRoyalCrownWhite.jpeg'
        break;
      }
      case 22:{
        this.imgUrl = 'assets/img/DatesTuba.jpg'
        break;
      }
      case 23:{
        this.imgUrl = 'assets/img/pishtachiosSpecial.jpg'
        break;
      }
      case 24:{
        this.imgUrl = 'assets/img/mixed-nut.jpg'
        break;
      }
      case 25:{
        this.imgUrl = 'assets/img/mixDryFruitsRegency.jpg'
        break;
      }
      case 26:{
        this.imgUrl = 'assets/img/driedKiwiRegency.jpg'
        break;
      }
      case 27:{
        this.imgUrl = 'assets/img/nuts_and_dried_fruit.jpg.png'
        break;
      }
      case 28:{
        this.imgUrl = 'assets/img/nuts-dried.png'
        break;
      }
      case 29:{
        this.imgUrl = 'assets/img/makhana.jpeg'
        break;
      }
      case 30:{
        this.imgUrl = 'assets/img/cuminSpecial.jpg'
        break;
      }
      case 31:{
        this.imgUrl = 'aassets/img/panchPhoronSpecial.jpg'
        break;
      }
      case 32:{
        this.imgUrl = 'assets/img/musterdSeedsSpecial.jpg'
        break;
      }
      case 33:{
        this.imgUrl = 'assets/img/blackPepperSpecial.jpg'
        break;
      }
      case 34:{
        this.imgUrl = 'assets/img/cardamomSpecial.png'
        break;
      }
      case 35:{
        this.imgUrl = 'assets/img/cloveSpecial.jpg'
        break;
      }
      case 36:{
        this.imgUrl = 'assets/img/cinnamonRoundStick.jpg'
        break;
      }
      case 37:{
        this.imgUrl = 'assets/img/cinnamonRegular.jpg'
        break;
      }
      case 38:{
        this.imgUrl = 'assets/img/cherry.jpg'
        break;
      }
      

      default:{
        this.imgUrl = '';
        break;

      }
    }

  }

 
  getProductName(productId:number){
    switch(productId){
      case 1:{
        this.productName = 'PREMIUM W-180';
        break;
      }
      case 2:{
        this.productName = 'PREMIUM W-210 CASHEW';
        break;
      }
      case 3:{
        this.productName = 'PREMIUM W-240 CASHEW';
        break;
      }
      case 4:{
        this.productName = 'PREMIUM W-320 CASHEW';
        break;
      }
      case 5:{
        this.productName = 'PREMIUM  CASHEW JH(1/2 PIECE)';
        break;
      }
      case 6:{
        this.productName = 'California Almond ';
        break;
      }
      case 7:{
        this.productName = 'Regular Almond';
        break;
      }
      case 8:{
        this.productName = 'Afgani Black Raisin';
        break;
      }
      case 9:{
        this.productName = 'Black Raisin';
        break;
      }
      case 10:{
        this.productName = 'Golden Raisin';
        break;
      }
      case 11:{
        this.productName = 'Green Raisin';
        break;
      }
      case 12:{
        this.productName = 'Green Long Raisin';
        break;
      }
      case 13:{
        this.productName = 'Normal Raisin';
        break;
      }
      case 14:{
        this.productName = 'Geen-tree-gold Walnutg';
        break;
      }
      case 15:{
        this.productName = 'KKK Walnut';
        break;
      }
      case 16:{
        this.productName = 'Special Gold Anjeer';
        break;
      }
      case 17:{
        this.productName = 'Barari Dates';
        break;
      }
      case 18:{
        this.productName = 'Barari Dates';
        break;
      }
      case 19:{
        this.productName = 'Gulf Dates';
        break;
      }
      case 20:{
        this.productName = 'Royal Crown Dates';
        break;
      }
      case 21:{
        this.productName = 'Royal Crown White Dates';
        break;
      }
      case 22:{
        this.productName = 'Tuba Dates';
        break;
      }
      case 23:{
        this.productName = 'Special Choice Pistachios (Pista) Roasted And Salted';
        break;
      }
      case 24:{
        this.productName = 'Mixed Nut';
        break;
      }
      case 25:{
        this.productName = 'Regency Mix Dry Fruits';
        break;
      }
      case 26:{
        this.productName = 'Regency Dried Kiwi';
        break;
      }
      case 27:{
        this.productName = 'Nuts And Dried Fruit';
        break;
      }
      case 28:{
        this.productName = 'Dried Nuts';
        break;
      }
      case 29:{
        this.productName = 'Makhana';
        break;
      }
      case 30:{
        this.productName = 'Special Cumin';
        break;
      }
      case 31:{
        this.productName = 'Special Punch Phutan';
        break;
      }
      case 32:{
        this.productName = 'Special Mustard Seeds';
        break;
      }
      case 33:{
        this.productName = 'Special Black Pepper';
        break;
      }
      case 34:{
        this.productName = 'Special Cardamom(8 mm)';
        break;
      }
      case 35:{
        this.productName = 'Special Clove';
        break;
      }
      case 36:{
        this.productName = 'Round Stick Cinnamon';
        break;
      }
      case 37:{
        this.productName = 'Regular Cinnamon';
        break;
      }
     
      case 39:{
        this.productName = 'Special Cherry(BIG SIZE)';
        break;
      }



      default:{
        this.productName = '';
        break;

      }
    }
  }

  getProductDescription(productId:number){
    switch(productId){
      case 1:{
        this.prodDescription = 'PREMIUM W-180';
        break;
      }
      case 2:{
        this.prodDescription = 'PREMIUM W-210 CASHEW';
        break;
      }
      case 3:{
        this.prodDescription = 'PREMIUM W-240 CASHEW';
        break;
      }
      case 4:{
        this.prodDescription = 'PREMIUM W-320 CASHEW';
        break;
      }
      case 5:{
        this.prodDescription = 'PREMIUM  CASHEW JH(1/2 PIECE)';
        break;
      }
      case 6:{
        this.prodDescription= 'California Almond ';
        break;
      }
      case 7:{
        this.prodDescription = 'Regular Almond';
        break;
      }
      case 8:{
        this.prodDescription= 'Afgani Black Raisin';
        break;
      }
      case 9:{
        this.prodDescription = 'Black Raisin';
        break;
      }
      case 10:{
        this.prodDescription = 'Golden Raisin';
        break;
      }
      case 11:{
        this.prodDescription= 'Green Raisin';
        break;
      }
      case 12:{
        this.prodDescription= 'Green Long Raisin';
        break;
      }
      case 13:{
        this.prodDescription= 'Normal Raisin';
        break;
      }
      case 14:{
        this.prodDescription= 'Geen-tree-gold Walnutg';
        break;
      }
      case 15:{
        this.prodDescription = 'KKK Walnut';
        break;
      }
      case 16:{
        this.prodDescription= 'Special Gold Anjeer';
        break;
      }
      case 17:{
        this.prodDescription = 'Barari Dates';
        break;
      }
      case 18:{
        this.prodDescription = 'Barari Dates';
        break;
      }
      case 19:{
        this.prodDescription = 'Gulf Dates';
        break;
      }
      case 20:{
        this.prodDescription= 'Royal Crown Dates';
        break;
      }
      case 21:{
        this.prodDescription= 'Royal Crown White Dates';
        break;
      }
      case 22:{
        this.prodDescription = 'Tuba Dates';
        break;
      }
      case 23:{
        this.prodDescription = 'Special Choice Pistachios (Pista) Roasted And Salted';
        break;
      }
      case 24:{
        this.prodDescription= 'Mixed Nut';
        break;
      }
      case 25:{
        this.prodDescription = 'Regency Mix Dry Fruits';
        break;
      }
      case 26:{
        this.prodDescription = 'Regency Dried Kiwi';
        break;
      }
      case 27:{
        this.prodDescription = 'Nuts And Dried Fruit';
        break;
      }
      case 28:{
        this.prodDescription = 'Dried Nuts';
        break;
      }
      case 29:{
        this.prodDescription = 'Makhana';
        break;
      }
      case 30:{
        this.prodDescription = 'Special Cumin';
        break;
      }
      case 31:{
        this.prodDescription = 'Special Punch Phutan';
        break;
      }
      case 32:{
        this.prodDescription = 'Special Mustard Seeds';
        break;
      }
      case 33:{
        this.prodDescription = 'Special Black Pepper';
        break;
      }
      case 34:{
        this.prodDescription = 'Special Cardamom(8 mm)';
        break;
      }
      case 35:{
        this.prodDescription = 'Special Clove';
        break;
      }
      case 36:{
        this.prodDescription = 'Round Stick Cinnamon';
        break;
      }
      case 37:{
        this.prodDescription = 'Regular Cinnamon';
        break;
      }
      case 38:{
        this.prodDescription = 'Special Cherry(BIG SIZE)';
        break;
      }


      default:{
        this.prodDescription= '';
        break;

      }
    }
  }


  getMrp(productId:number){
    switch(productId){
      case 1:{
        this.mrp = 820.00;
        break;
      }
      case 2:{
        this.mrp = 750.00;
        break;
      }
      case 3:{
        this.mrp = 700.00;
        break;
      }
      case 4:{
        this.mrp = 670.00;
        break;
      }
      case 5:{
        this.mrp = 600.00;
        break;
      }
      case 6:{
        this.mrp = 750.00;
        break;
      }
      case 7:{
        this.mrp = 750.00;
        break;
      }
      case 8:{
        this.mrp = 750.00;
        break;
      }
      case 9:{
        this.mrp = 750.00;
        break;
      }
      case 10:{
        this.mrp = 750.00;
        break;
      }
      case 11:{
        this.mrp = 750.00;
        break;
      }
      case 12:{
        this.mrp = 750.00;
        break;
      }
      case 13:{
        this.mrp = 750.00;
        break;
      }
      case 14:{
        this.mrp = 750.00;
        break;
      }
      case 15:{
        this.mrp = 750.00;
        break;
      }
      case 16:{
        this.mrp = 750.00;
        break;
      }
      case 17:{
        this.mrp = 750.00;
        break;
      }
      case 18:{
        this.mrp = 750.00;
        break;
      }
      case 19:{
        this.mrp = 750.00;
        break;
      }
      case 20:{
        this.mrp = 750.00;
        break;
      }
      case 21:{
        this.mrp = 750.00;
        break;
      }
      case 22:{
        this.mrp = 750.00;
        break;
      }
      case 23:{
        this.mrp = 750.00;
        break;
      }
      case 24:{
        this.mrp = 750.00;
        break;
      }
      case 25:{
        this.mrp = 750.00;
        break;
      }
      case 26:{
        this.mrp = 750.00;
        break;
      }
      case 27:{
        this.mrp = 750.00;
        break;
      }
      case 28:{
        this.mrp = 750.00;
        break;
      }
      case 29:{
        this.mrp = 750.00;
        break;
      }
      case 30:{
        this.mrp = 149.00;
        break;
      }
      case 31:{
        this.mrp = 135.00;
        break;
      }
      case 32:{
        this.mrp = 130.00;
        break;
      }
      case 33:{
        this.mrp = 200.00;
        break;
      }
      case 34:{
        this.mrp = 85.00;
        break;
      }
      case 35:{
        this.mrp = 75.00;
        break;
      }
      case 36:{
        this.mrp = 95.00;
        break;
      }
      case 37:{
        this.mrp = 70.00;
        break;
      }
      case 38:{
        this.mrp = 99.00;
        break;
      }
      default:{
        this.mrp = 0;
        break;

      }
    }
  }
  getSellPrice(productId:number){
    switch(productId){
      case 1:{
        this.sellPrice = 699.00;
        break;
      }
      case 2:{
        this.sellPrice = 650.00;
        break;
      }
      case 3:{
        this.sellPrice = 610.00;
        break;
      }
      case 4:{
        this.sellPrice = 600.00;
        break;
      }
      case 5:{
        this.sellPrice = 520.00;
        break;
      }
      case 6:{
        this.sellPrice = 650.00;
        break;
      }
      case 7:{
        this.sellPrice = 650.00;
        break;
      }
      case 8:{
        this.sellPrice = 650.00;
        break;
      }
      case 9:{
        this.sellPrice = 650.00;
        break;
      }
      case 10:{
        this.sellPrice = 650.00;
        break;
      }
      case 11:{
        this.sellPrice = 650.00;
        break;
      }
      case 12:{
        this.sellPrice = 650.00;
        break;
      }
      case 13:{
        this.sellPrice = 650.00;
        break;
      }
      case 14:{
        this.sellPrice = 650.00;
        break;
      }
      case 15:{
        this.sellPrice = 650.00;
        break;
      }
      case 16:{
        this.sellPrice = 650.00;
        break;
      }
      case 17:{
        this.sellPrice = 650.00;
        break;
      }
      case 18:{
        this.sellPrice = 650.00;
        break;
      }
      case 19:{
        this.sellPrice = 650.00;
        break;
      }
      case 20:{
        this.sellPrice = 650.00;
        break;
      }
      case 21:{
        this.sellPrice = 650.00;
        break;
      }
      case 22:{
        this.sellPrice = 650.00;
        break;
      }
      case 23:{
        this.sellPrice = 650.00;
        break;
      }
      case 24:{
        this.sellPrice = 650.00;
        break;
      }
      case 25:{
        this.sellPrice = 650.00;
        break;
      }
      case 26:{
        this.sellPrice = 650.00;
        break;
      }
      case 27:{
        this.sellPrice = 650.00;
        break;
      }
      case 28:{
        this.sellPrice = 650.00;
        break;
      }
      case 29:{
        this.sellPrice = 650.00;
        break;
      }
      case 29:{
        this.sellPrice = 650.00;
        break;
      }
      case 30:{
        this.sellPrice = 99.00;
        break;
      }
      case 31:{
        this.sellPrice = 70.00;
        break;
      }
      case 32:{
        this.sellPrice = 65.00;
        break;
      }
      case 33:{
        this.sellPrice = 150.00;
        break;
      }
      case 34:{
        this.sellPrice = 60.00;
        break;
      }
      case 35:{
        this.sellPrice = 45.00;
        break;
      }
      case 36:{
        this.sellPrice = 70.00;
        break;
      }
      case 37:{
        this.sellPrice = 40.00;
        break;
      }
      case 38:{
        this.sellPrice = 70.00;
        break;
      }

      
      default:{
        this.sellPrice = 0;
        break;

      }
    }
  }
  

}
