import { NgModule } from '@angular/core';
import { EventItemComponent } from './event-item/event-item';
import {CommonModule} from "@angular/common";
@NgModule({
	declarations: [EventItemComponent],
	imports: [CommonModule],
	exports: [EventItemComponent]
})
export class ComponentsModule {}
