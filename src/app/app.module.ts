import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule } from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { NoteComponent } from './components/note/note.component';
import { IconlistComponent } from './components/iconlist/iconlist.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NativeDateModule} from '@angular/material';
import {MatNativeDateModule, MatSliderModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './service/shared/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { LabelsComponent } from './components/labels/labels.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { LabelpipePipe } from './pipe/labelpipe.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    NoteComponent,
    IconlistComponent,
    DisplaynoteComponent,
    ArchiveComponent,
    TrashComponent,
    UpdatenoteComponent,
    ImageCropperComponent,
    LabelsComponent,
    ReminderComponent,
    LabelpipePipe,


  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
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
    ImageCropperModule,
    MatDatepickerModule,
    NativeDateModule,
    MatNativeDateModule,
    MatSliderModule,
    MatChipsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxMaterialTimepickerModule,
  
   
    
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
