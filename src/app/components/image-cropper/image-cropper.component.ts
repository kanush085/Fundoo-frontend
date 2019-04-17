import { Component, OnInit, Inject } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UserService } from 'src/app/service/userservice/userservices.service';


@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {

  imagecroped: any
  response:any
  constructor(public dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialog,public userService:UserService) {
    console.log(data);

  }
  ngOnInit() {
  }

  imageCropped($event) {

    console.log($event);
    this.imagecroped = $event.file;
    console.log(this.imagecroped, "img crop")
  }

  cancel()
  {
    this.dialogRef.close()
  }

  submit(){
    var formData = new FormData();
    formData.append('image', this.imagecroped);
    this.userService.profilepic(formData).subscribe(data=>{
      console.log(data);
      this.dialogRef.close(data);
      this.response=data
      localStorage.setItem('image',this.response.profilePic)

    })
    

  }

}
