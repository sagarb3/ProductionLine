import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { LOGO } from '../../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FlexLayoutModule, MatIconModule, MatToolbarModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo:string = LOGO;
  currentDate: Date = new Date();
  constructor(private router: Router){}
  username:string = 'Operator'
  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
  navigate(){
    this.router.navigate([''])
  }
}
