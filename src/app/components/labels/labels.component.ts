import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DashboardComponent, DialogData } from '../dashboard/dashboard.component';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/service/noteservice/note.service';


@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss'],
  encapsulation: ViewEncapsulation.None


})
export class LabelsComponent implements OnInit {

  create = new FormControl("");
  array:any =[]

  constructor(public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private noteService: NoteService) { }

  ngOnInit() {

    this.noteService.getLabel().subscribe(data=>{
      console.log("get labels ",data);
      this.array=data
      console.log(this.array,"in array");
      
    })
  }




  done() {
    this.dialogRef.close();
  }



  tick() {
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",this.create.value);
    this.noteService.label({
      "userId": localStorage.getItem('userid'),
      "label": this.create.value
    }).subscribe(data => {
      console.log("label addded successfully", data);

      // this.noteService.getLabel().subscribe(data => {
      //   console.log("get labels", data);

      // })
    })
  }
}
