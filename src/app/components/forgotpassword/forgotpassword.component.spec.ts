import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordComponent } from './forgotpassword.component';
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
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
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
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { IconlistComponent } from '../iconlist/iconlist.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker'
import { LabelpipePipe } from 'src/app/pipe/labelpipe.pipe';
import { APP_BASE_HREF } from '@angular/common';

describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpasswordComponent,LoginComponent,RegisterComponent,ResetpasswordComponent,DashboardComponent
         ,NoteComponent,ArchiveComponent,TrashComponent,UpdatenoteComponent,
        LabelsComponent,TakenoteComponent,ReminderComponent,ImageCropperComponent,DisplaynoteComponent,LabelpipePipe,
        IconlistComponent],
      imports:[
        MatInputModule,
        BrowserAnimationsModule,
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
        HttpClientModule,
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
        AppRoutingModule,
        MatChipsModule,
        ImageCropperModule,
        MatDatepickerModule,
        NgxMaterialTimepickerModule
      ],
      providers:[
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
