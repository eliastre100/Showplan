import { NgModule } from '@angular/core';
import { EventItemComponent } from './event-item/event-item';
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { TrackItemComponent } from './track-item/track-item';

@NgModule({
	declarations: [EventItemComponent,
    TrackItemComponent],
	imports: [
	  CommonModule,
    IonicModule
  ],
	exports: [EventItemComponent,
    TrackItemComponent]
})

export class ComponentsModule {}
