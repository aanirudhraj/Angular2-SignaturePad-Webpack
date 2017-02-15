import { Component }              from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  public title = 'app works!';
   form: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      signatureField: '',
    });
  }

}
