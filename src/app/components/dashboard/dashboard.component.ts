import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { MatDialog, } from "@angular/material";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { ChangeDetectorRef, OnDestroy } from "@angular/core";
import { DataService } from "../../service/dataservice/data.service"
import { ImageCropperComponent } from "../image-cropper/image-cropper.component";
import { MessagingService } from 'src/app/service/shared/messaging.service';
import * as firebase from "firebase";
import { LabelsComponent } from '../labels/labels.component';
import { NoteService } from 'src/app/service/noteservice/note.service';



export interface DialogData {
 
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  message: string = 'Fundoo';
  messages
  Search: string;
  labelList: any;
  email: string;
  username: string;
  grid = true;
  side = false;
  img = localStorage.getItem('image');
  flag: boolean = true;
  // array = []
   labels:any=[]
  private _mobileQueryListener: () => void;
  constructor(media: MediaMatcher,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar, changeDetectorRef: ChangeDetectorRef, private service: DataService, private messagingService: MessagingService,private noteService:NoteService) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.email = localStorage.getItem('email');
    this.username = localStorage.getItem('name')

  }

  ngOnInit() {

    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.messages = this.messagingService.currentMessage


    this.noteService.getLabel().subscribe(data=>{
      console.log("get labels in dash board ",data);
      this.labels=data
      console.log(this.labels,"in array");
      this.service.labelMessage(this.labels)
    })
    
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  signout() {
    localStorage.clear()
    this.router.navigate(['login']);
    this.deletePushToken()

  }

  deletePushToken = async () => {
    try {
      const messaging = firebase.messaging();
      const token = await messaging.getToken();
      console.log("in signout ", token);
      let res = await messaging.deleteToken(token);
      console.log("after signout", res);

    } catch (error) {
      console.error(error);
    }
  };

  refresh(): void {
    window.location.reload();

  }
  note() {
    this.message = "Notes"
  }

  reminders() {
    this.message = "Reminders"
  }

  trashBox() {
    this.message = "Trash"
    this.router.navigate(['dashboard/trash'])
  }
  archive() {
    this.message = "Archive"
    this.router.navigate(['dashboard/archive'])
  }
  gridChange() {
    this.grid = !this.grid;
    this.service.changeMessage(this.grid);
  }
  sidnave() {
    console.log('open strat');
    this.side = !this.side;
    this.service.sidenavChangeMessage(this.side)

  }
  fileUpload($event) {
    console.log("********", $event);
    this.setProfilePic($event)
  }

  setProfilePic($event) {
    const dialogRef = this.dialog.open(ImageCropperComponent, {
      width: '600px',
      data: $event

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == undefined) {
        return;
      }
      this.img = result.data;
      localStorage.setItem('image', this.img)

    })

  }


  openLabels() {

    const dialogRef = this.dialog.open(LabelsComponent, {
      width: '300px',
      data: this.labels.data

    });

    dialogRef.afterClosed().subscribe(result => {
    
    })

  }




}



