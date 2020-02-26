import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StmtModifier } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIA-angular';
  
  formdata;
  error;

  cid;
  ip;

  ngOnInit() {
    this.formdata = new FormGroup({
      ipt: new FormControl('')
    });
  }

  onRdoChanged(obj, ipt, smt) {
    this.cid == null;
    this.ip == null;
    this.error = false;
    ipt.value = '';
    ipt.placeholder = 'Circuit_ID';
    if(obj.id == 'down') {
      smt.value = 'Go Check';
      smt.blur();
    } else {
      smt.value = 'Next';
      smt.blur();
    }
  }

  onSmtClicked(ipt, smt) {
    // console.log(this.formdata.value);
    if(ipt.value == '') {
      this.error = true;
    } 
    else {
      this.error = false;
      if(this.cid == null) {
        this.cid = ipt.value;
      }
      else {
        this.ip = ipt.value;
        ipt.placeholder = 'X.X.X.X';
        ipt.value = '';
        smt.value = 'Go Check';
        smt.blur();
      }
      if(this.cid != null && this.ip != null) {
        // TODO: send request out
      }

    }
    console.log(this.cid, this.ip)
  }
  
}
