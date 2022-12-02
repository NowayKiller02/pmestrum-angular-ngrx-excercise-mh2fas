import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Person, SelectablePerson } from '../../../core/interfaces/person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: SelectablePerson;
  @Output()toggleSelected = new EventEmitter<void>();

  ngOnInit(): void {
  }
}
