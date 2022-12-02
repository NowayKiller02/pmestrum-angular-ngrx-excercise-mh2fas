import { Component } from '@angular/core';
import { PersonRestService } from '../core/services/person.rest.service';
import { Person, SelectablePerson } from '../core/interfaces/person.interface';
import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css'],
  providers: [AppSandbox],
})
export class AppContainer {
  constructor(public sandbox: AppSandbox) {
    sandbox.loadPersons();
  }

  trackByFn(index, person: SelectablePerson) {
    return person.id;
  }

  toggleSelected(person: SelectablePerson) {
    this.sandbox.toggleSelected(person);
  }
}
