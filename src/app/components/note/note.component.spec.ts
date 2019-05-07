import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { LoginComponent } from '../login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule, MatCheckboxModule, MatSelectModule, MatMenuModule, MatTooltipModule, MatDialogModule, MatInputModule, MatSidenavModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { LabelsComponent } from '../labels/labels.component';
import { TakenoteComponent } from '../takenote/takenote.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { IconlistComponent } from '../iconlist/iconlist.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'
import { LabelpipePipe } from 'src/app/pipe/labelpipe.pipe';
import { APP_BASE_HREF } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { NoteService } from "../../service/noteservice/note.service";
import { of } from 'rxjs';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;
let service :NoteService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteComponent, RegisterComponent, LoginComponent, ResetpasswordComponent, DashboardComponent
        , NoteComponent, ArchiveComponent, TrashComponent, UpdatenoteComponent,
        LabelsComponent, TakenoteComponent, ReminderComponent, DisplaynoteComponent,
        ForgotpasswordComponent, IconlistComponent, LabelpipePipe, ImageCropperComponent],
      imports: [
        ImageCropperModule,
        MatDialogModule,
        HttpClientModule,
        AppRoutingModule, MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatCheckboxModule,
        MatSelectModule,
        MatMenuModule,
        MatTooltipModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatChipsModule,
        MatDatepickerModule,
        NgxMaterialTimepickerModule

      ],
      providers: [{ provide: MatDialogRef, useValue: {} }
        , { provide: MAT_DIALOG_DATA, useValue: [] }, { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
    // service=TestBed.get(NoteService)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(service).toBeTruthy();
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('form should be invaild', async(() => {
  //   var response =[ {
  //     archive: false,
  //     color: "#AECBFA",
  //     createdAt: "2019-05-06T10:29:38.214Z",
  //     description: "546132",
  //     image: "",
  //     label: ["hello"],
  //     pinned: false,
  //     reminder: "2019-05-06T14:30:00.000Z",
  //     title: "anush",
  //     trash: false,
  //     updatedAt: "2019-05-06T11:08:54.861Z",
  //     userId: "5cbea71231916515e65e2421",
  //     _id: "5cd00c92b17e481e0d6cee67"
  //   }]
  //   let data
  //   spyOn(service,'getNote').and.returnValue(of(response))
  //   service.getNote().subscribe(res=>{
  //     console.log(res,"12111111111111111111111111111111");
  //     data=res
  //   });
  //   expect(data).toEqual(response)



  // }));


});
