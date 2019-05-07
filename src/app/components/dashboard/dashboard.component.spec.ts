import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from '../login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RegisterComponent } from '../register/register.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { AppRoutingModule } from '../../app-routing.module';
import { NoteComponent } from '../note/note.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { LabelsComponent } from '../labels/labels.component';
import { TakenoteComponent } from '../takenote/takenote.component';
import { IconlistComponent } from '../iconlist/iconlist.component';
import { LabelpipePipe } from '../../pipe/labelpipe.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule, MatCheckboxModule, MatSelectModule, MatMenuModule, MatTooltipModule, MatDialogModule, ErrorStateMatcher } from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ImageCropperModule } from 'ngx-image-cropper';
import {APP_BASE_HREF} from '@angular/common';
import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFirestore } from '@angular/fire/firestore';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,LoginComponent,RegisterComponent,ForgotpasswordComponent,ResetpasswordComponent,
        NoteComponent,DisplaynoteComponent, ArchiveComponent,ReminderComponent,LabelsComponent,TakenoteComponent,IconlistComponent,LabelpipePipe,
        TrashComponent,
        UpdatenoteComponent,
        ImageCropperComponent, ],
      imports:[
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        BrowserAnimationsModule,
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
        MatListModule,
        MatCheckboxModule,
        MatSelectModule,
        MatMenuModule,
        MatTooltipModule,
        MatDialogModule,
        AppRoutingModule,
        MatChipsModule,
        MatDatepickerModule,
        NgxMaterialTimepickerModule,
        ImageCropperModule,
        AngularFireModule,
        AngularFireDatabaseModule,
        // AngularFirestore
        
      ],
      providers:[
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
