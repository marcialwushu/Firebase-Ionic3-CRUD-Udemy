import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.services';
import { Item } from 'ionic-angular/components/item/item';




@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
    this.shopping.addItem(item).then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

}