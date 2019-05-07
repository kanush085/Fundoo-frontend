import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { ForgotpasswordComponent } from '../../components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from '../../components/resetpassword/resetpassword.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ArchiveComponent } from '../../components/archive/archive.component';
import { ReminderComponent } from '../../components/reminder/reminder.component';
import { LabelsComponent } from '../../components/labels/labels.component';
import { NoteComponent } from '../../components/note/note.component';
import { TrashComponent } from '../../components/trash/trash.component';
import { DisplaynoteComponent } from '../../components/displaynote/displaynote.component';

import { UpdatenoteComponent } from '../../components/updatenote/updatenote.component';

import { TakenoteComponent } from '../../components/takenote/takenote.component';

import { IconlistComponent } from '../../components/iconlist/iconlist.component';
import { ImageCropperComponent } from '../../components/image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper'
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

import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker'
import { LabelpipePipe } from 'src/app/pipe/labelpipe.pipe';
import { APP_BASE_HREF } from '@angular/common';
describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[LoginComponent,RegisterComponent,ForgotpasswordComponent,
        ResetpasswordComponent,DashboardComponent,ArchiveComponent,ReminderComponent,LabelsComponent,TrashComponent,
        ,UpdatenoteComponent,TakenoteComponent,IconlistComponent,ImageCropperComponent,LabelpipePipe
        ,DisplaynoteComponent,NoteComponent],
      providers: [AuthService,{ provide: MatDialogRef, useValue: {} }
        , { provide: MAT_DIALOG_DATA, useValue: [] },{provide: APP_BASE_HREF, useValue : '/' }],
      imports:[HttpClientModule,
        AppRoutingModule,
        ImageCropperModule,
        MatCardModule,
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


      ]
    });
  });

   xit('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
