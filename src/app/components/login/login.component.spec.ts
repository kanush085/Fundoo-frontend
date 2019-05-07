import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
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
import { RegisterComponent } from '../register/register.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoteComponent } from '../note/note.component';
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
import { UserService } from "../../service/userservice/userservices.service";
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: UserService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, RegisterComponent, ResetpasswordComponent, DashboardComponent
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
    service = TestBed.get(UserService)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invaild', async(() => {
    component.emailFormControl.setValue('')
    component.password.setValue('')
    expect(component.emailFormControl.valid).toBeFalsy();
    expect(component.password.valid).toBeFalsy();
  }));
  it('form should be vaild', async(() => {
    component.emailFormControl.setValue('abcde@gmail.com');
    component.password.setValue('123456');
    expect(component.emailFormControl.valid).toBeTruthy()
    expect(component.password.valid).toBeTruthy()
  }))

  // it('should vaild', async(() => {
  //   var model = {
  //     email: 'abcde@gmail.com',
  //     password: '123456'
  //   }
  //   var response = {
  //     image: "https://fundoonotesapplication.s3.amazonaws.com/1555998509931",
  //     name: "Anush",
  //     result: "Token generated sucessfully!",
  //     success: true,
  //     token:
  //     {
  //       message: "Token Generated Successfully!!",
  //       status: true,
  //       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOiI1Y2JlYTcxMjMxOTE2NTE1ZTY1ZTI0MjEifSwiaWF0IjoxNTU3MjI3ODEwLCJleHAiOjE1NTczMTQyMTB9.Ncz8ZnaoT6Q5BDLg6SsZ9Q5K3LyeSQsEwh-j0Db3Xmc",
  //     },
  //     _id: "5cbea71231916515e65e2421"

  //   }
  //   let result
  //   spyOn(service, 'login').and.returnValue(of(model))
  //   service.login(model).subscribe(res => {
  //     console.log(res, "shjdgsgadhjgsadhjsghjgsdhjsgadg");
      
  //   result=res
    
  //   })
  //   expect(result).toEqual(response)

  // }))

});
