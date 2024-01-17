import { Component } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
    setTimeout(function(){
      router.navigate(['/login']);
    }, 3000);
  }

}
