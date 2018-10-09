import { NgModule } from '@angular/core';
import { EventItemComponent } from './event-item/event-item';
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";

@NgModule({
	declarations: [EventItemComponent],
	imports: [
	  CommonModule,
    IonicModule
  ],
	exports: [EventItemComponent]
})

export class ComponentsModule {}
