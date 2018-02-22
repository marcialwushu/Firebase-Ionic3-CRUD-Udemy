import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.services';
import { ToastService } from '../../services/toast/toast.service';






@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private shopping: ShoppingListService,
    private toast: ToastService
  ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  editItem(item: Item){
    this.shopping.editItem(item).then(() => {
      this.toast.show(`${item.name} saved!`);
      this.navCtrl.setRoot('HomePage');
    })
  }

}
