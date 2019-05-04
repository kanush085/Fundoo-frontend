import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
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
  flag = true
  create = new FormControl("");
  array: any = []

  constructor(public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData[], private snackBar: MatSnackBar, private noteService: NoteService) { }

  ngOnInit() {
    this.getLabels();

  }


  getLabels() {
    this.noteService.getLabel().subscribe(data => {
      console.log("get labels ", data);
      this.array = data
      console.log(this.array, "in array");

    })
  }

  done() {
    this.dialogRef.close();
  }

  tick() {
    this.noteService.label({
      "userId": localStorage.getItem('userid'),
      "label": this.create.value
    }).subscribe(data => {
      // console.log("label addded successfully", data);
      this.array.data.push(data.data);
      this.data.push(data.data);
      // console.log(this.data);
    })
    this.create.reset()
  }


  deletelabel(label) {
    console.log("In label delete ", label);
    var key = this.array.data.indexOf(label);
    this.array.data.splice(key, 1)
    this.data.splice(key, 1)
    this.noteService.deletelabel({
      "labelID": [label._id]
    }).subscribe(data => {
      console.log(data, "Delete label data");
      this.snackBar.open("Label Deleted", "Ok", { duration: 5000 })
    }), err => console.log(err);
  }

  reverseFlag() {
    this.flag = !this.flag
  }
  editlabels(label, index) {
    console.log("Came to to edit label");
    this.noteService.editlabel({
      "labelID": label._id,
      "label": label.label
    }).subscribe(data => {
      console.log("editlabel data ", data);
      this.data[index]['label'] = label.label

    })

  }
  label(card,label)
  {
    console.log(">>>>>>>>>>>>>>>>>>>>>","dgjshsdkj",card,"??????????????",label);
    
  }
}

