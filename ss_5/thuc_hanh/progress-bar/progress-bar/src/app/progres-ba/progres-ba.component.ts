import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progres-ba',
  templateUrl: './progres-ba.component.html',
  styleUrls: ['./progres-ba.component.css']
})
export class ProgresBaComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;
  constructor() { }

  ngOnInit(): void {
    this.loading();
  }
  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 5;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
