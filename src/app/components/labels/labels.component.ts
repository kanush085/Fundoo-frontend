import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss'],
  encapsulation: ViewEncapsulation.None


})
export class LabelsComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }



}
