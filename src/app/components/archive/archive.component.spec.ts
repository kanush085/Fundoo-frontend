import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponent } from './archive.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { MatMenuModule} from '@angular/material/menu';
import { IconlistComponent } from '../iconlist/iconlist.component';
import {MatListModule} from '@angular/material/list';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { LabelpipePipe } from '../../pipe/labelpipe.pipe';

describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveComponent,DisplaynoteComponent,IconlistComponent,LabelpipePipe ],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        HttpClientModule,
        RouterTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatChipsModule,
        MatMenuModule,
        MatListModule,
        MatDatepickerModule,
        MatSelectModule,
        NgxMaterialTimepickerModule,
        MatTooltipModule,
        MatCheckboxModule

      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
