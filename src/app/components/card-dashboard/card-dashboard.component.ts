import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'ng-card-dashboard',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './card-dashboard.component.html',
  styleUrl: './card-dashboard.component.scss'
})
export class CardDashboard {

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) color: string = '';
  @Input() money: boolean = false;
  @Input() description: string = '';
  @Input() link: string = '';

  constructor(private router: Router) {

  }

  navCardFunction(link: any) {

    this.router.navigateByUrl(link);

  }

  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  years = [2020, 2021, 2022, 2023, 2024];
  date = new Date();
  currentMonth = this.months[this.date.getMonth()];
  currentYear = this.date.getFullYear();
  selectedMonth = this.currentMonth;
  selectedYear = this.currentYear;

  ngOnInit() {

  }

}
