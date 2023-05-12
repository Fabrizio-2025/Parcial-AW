import { Injectable } from '@angular/core';
import { HttpService } from '../server/http.common';

//Mi modelo
import { Person } from '../fbmodels/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private readonly path ="persons";
  constructor(private http: HttpService) { }

  getAllPersons() {
    return this.http.getAll(this.path);
  }

  getPersonById(id: number) {
    return this.http.get(this.path, id);
  }

  postPerson(body: any) {
    return this.http.post(this.path, body);
  }

  putPerson(id: number, body: Person) {
    return this.http.put(this.path, id, body);
  }

  deletePerson(id: number) {
    return this.http.delete(this.path, id);
  }
}
