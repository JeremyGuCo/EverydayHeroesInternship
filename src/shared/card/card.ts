import { Component, Input } from '@angular/core';
import { Testimony } from '../models/testimony';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})

export class CardPage {
  @Input()
  testimony: Testimony
}
