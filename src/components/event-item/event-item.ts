import { Component, Input } from '@angular/core';
import { EventType } from "../../constants/types";

/**
 * Generated class for the EventItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event-item',
  templateUrl: 'event-item.html'
})
export class EventItemComponent {
  @Input() event: EventType;

  constructor() {
  }

}
