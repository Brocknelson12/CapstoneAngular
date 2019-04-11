import { Component, OnInit } from '@angular/core';
import { Assigned } from './assigned';
import { AssignedService } from 'src/app/core/services/assigned.service';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.css']
})
export class AssignedComponent implements OnInit {
  public assign: Assigned = new Assigned();

  constructor(private assignedService: AssignedService) { }

  createAssigned(): void {
    if(this.assign.assigned_Email == null || this.assign.assigned_Name == null
      || this.assign.assigned_Phone == null){
       alert("ERROR, input all values for Assigned");
    }
    else{
    this.assignedService.addAssigned(this.assign).subscribe( data => {
     console.log(data);
     alert("Assigned Added successfully.");
      });
    }
  }

 
  ngOnInit() {
    //shows what we get from the database in the console of 
    this.assignedService.getAssigned().subscribe( data => {
      console.log(data);
       })
  }
}
