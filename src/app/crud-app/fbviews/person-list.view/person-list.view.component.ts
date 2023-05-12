import { Component,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table'

//Modelos
import { Person } from '../../fbmodels/person.model';
import { MatPaginator} from '@angular/material/paginator'

//Servicios
import { PersonsService } from '../../fbservices/person.service';

//Comunicacion Entre Componentes
import { CrudDialogComponent } from '../../fbcomponents/crud-dialog/crud-dialog.component';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-person-list.view',
  templateUrl: './person-list.view.component.html',
  styleUrls: ['./person-list.view.component.css']
})
export class PersonListViewComponent {
// Inputs
name!: string;
age!: number;


dataSource = new MatTableDataSource<Person>();
displayedColumns: string[] = ['id', 'name','birthdate','gender','adress','phone','email' ,'actions'];

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

constructor(
  private personsService: PersonsService,
  public dialog: MatDialog
) {}

openDialog(person: Person | null): void {
  const dialogRef = this.dialog.open(CrudDialogComponent, {
    data: person != null ? person : undefined,
  });

  // If event done is received!
  dialogRef.componentInstance.done.subscribe((res: any) => {
    // Handle the emitted event here
    console.log('Event received:', res);
    // Perform any necessary actions
    // Refresh the data, update UI, etc.
    this.getAllPersons();
    dialogRef.close();
  });

  // If event cancel is received
  dialogRef.componentInstance.close.subscribe(() => {
    dialogRef.close();
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
  });
}

ngOnInit() {
  this.getAllPersons();
}

getAllPersons() {
  this.personsService.getAllPersons().subscribe((res: any) => {
    this.dataSource.data = res;
  });
}

deletePerson(id: number) {
  this.personsService.deletePerson(id).subscribe((res: any) => {
    this.getAllPersons();
  });
}
}
