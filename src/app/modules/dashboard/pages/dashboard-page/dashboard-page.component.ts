import { Component } from '@angular/core';
import { CardDashboard } from '../../../../components/card-dashboard/card-dashboard.component';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard-page',
  imports: [CardDashboard, CommonModule, ChartModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

  // Cards list variable
  cards = [
    { title: 'Vendas', description: '1000', icon: 'storefront', color: '#1465bb', money: true, link: '/vendas' },
    { title: 'Pedidos', description: '1000', icon: 'local_mall', color: '#17a130', money: false, link: '/pedidos' },
    { title: 'Entregadores', description: '1000', icon: 'delivery_dining', color: '#ff4224', money: false, link: '/entregadores' },
    { title: 'Clientes', description: '1000', icon: 'face_retouching_natural', color: '#ff9a02', money: false, link: '/client' },
  ]

  // Chart data
  data: any;
  options: any;

  dataPie: any;
  optionsPie: any;

  dateGrafh: any;
  optionsGrafh: any;

  constructor() {
    // Chart data
    this.data = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: 'Clientes Cadastrados',
          backgroundColor: 'rgb(0, 200, 50, 0.5)',
          borderColor: '#4aa14e',
          fill: true,
          data: [105, 100, 120, 324, 234],
          borderRadius: 5,

        },
        {
          label: 'Clientes Atendidos',
          backgroundColor: 'rgba(33, 150, 243, 0.25)',
          borderColor: '#2196f3',
          fill: true,
          data: [195, 100, 220, 224, 334],
          borderRadius: 5,

        },
      ]
    };

    // Chart options
    this.options = {
      responsive: false,
      maintainAspectRatio: true,

      legend: {
        display: false
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: "#000000"
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#495057'
          }
        },
        y: {
          beginAtZero: true,
          gridLines: {
            display: true,
            color: '#dee2e6'
          },
          ticks: {
            fontColor: '#495057'
          }
        }
      },

    }

    this.dataPie = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: ['#f9220a', '#007bff', '#fac200'],
          hoverBackgroundColor: ['#f9220a', '#007bff', '#fac200']
        }
      ]
    };

    this.optionsPie = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: '#000000'
          }
        }
      }
    };

    this.dateGrafh = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#f9220a',
              tension: 0.4
          }
      ]
  };

  this.optionsGrafh = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
          legend: {
              labels: {
                  color: '#000000'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#dee2e6'
              },
              grid: {
                  color: '#fac200',
                  drawBorder: false
              }
          },
          y: {
              ticks: {
                  color: '#dee2e6'
              },
              grid: {
                  color: '#fac200',
                  drawBorder: false
              }
          }
      }
  };
  }

}
