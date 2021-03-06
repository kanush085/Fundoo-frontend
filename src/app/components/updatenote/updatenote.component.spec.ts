import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenoteComponent } from './updatenote.component';
import { TrashComponent } from '../trash/trash.component';
import { TakenoteComponent } from '../takenote/takenote.component';
import { NoteComponent } from '../note/note.component';
import { LoginComponent } from '../login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { MatSnackBarModule, MatCheckboxModule, MatSelectModule, MatMenuModule, MatTooltipModule, MatDialogModule, MatInputModule, MatSidenavModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ArchiveComponent } from '../archive/archive.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { LabelsComponent } from '../labels/labels.component';

import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { IconlistComponent } from '../iconlist/iconlist.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker'
import { LabelpipePipe } from 'src/app/pipe/labelpipe.pipe';
import { APP_BASE_HREF } from '@angular/common';
import { RegisterComponent } from '../register/register.component';



describe('UpdatenoteComponent', () => {
  let component: UpdatenoteComponent;
  let fixture: ComponentFixture<UpdatenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatenoteComponent ,TrashComponent ,TakenoteComponent, NoteComponent, RegisterComponent , LoginComponent,ResetpasswordComponent,DashboardComponent
        ,NoteComponent,ArchiveComponent,
       LabelsComponent,ReminderComponent ,DisplaynoteComponent,
       ForgotpasswordComponent,IconlistComponent,LabelpipePipe ,ImageCropperComponent ],
       imports:[
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
        MatSidenavModule ,
        MatToolbarModule,
        MatSnackBarModule,
        MatSidenavModule ,
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
      providers:[{ provide: MatDialogRef, useValue: {} }
        , { provide: MAT_DIALOG_DATA, useValue: [] },{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
