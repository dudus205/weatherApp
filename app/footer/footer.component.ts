import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  userTime: string;
  constructor() { }

  ngOnInit(): void {
    if (new Date().getMinutes() < 10) {
      this.userTime = new Date().getHours() + ':0' + new Date().getMinutes() + ':' + new Date().getSeconds();
    }
    else if (new Date().getSeconds() < 10){
      this.userTime = new Date().getHours() + ':' + new Date().getMinutes() + ':0' + new Date().getSeconds();
    }
    else {
      this.userTime = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    }
  }

}
