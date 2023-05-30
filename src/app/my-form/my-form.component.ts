import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeriesService } from './service/series/series.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent  implements OnInit {

  numberForm!: FormGroup;
  result : string = " ";
  constructor( private fb: FormBuilder, private seriesServer: SeriesService) { 
    this.numberForm = this.fb.group({
      number:['1', [Validators.min(1), Validators.max(100)]]
    });
  }

  getControl() { return (this.numberForm.get('number'))}

  onSubmit() { 
    this.result = this.seriesServer.getSeries(this.numberForm.value.number);
  }

  ngOnInit() {}

}
