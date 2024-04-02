import { Component } from '@angular/core';
import { MatModule } from '../../appModule/mat.module';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [MatModule,MatDatepickerModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {

}
