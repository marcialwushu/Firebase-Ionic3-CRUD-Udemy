import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular/module';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';


@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule {

}
