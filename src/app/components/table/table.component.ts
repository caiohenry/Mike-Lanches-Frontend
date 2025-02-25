import {
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  input,
  output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MenuService } from '../../services/menu.service';
import { TableLoadingComponent } from '../table-loading/table-loading.component';

@Component({
  selector: 'ng-table',
  standalone: true,
  imports: [
    TableModule,
    NgTemplateOutlet,
    TableLoadingComponent,
    NgStyle
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {

  value = input<any>();
  @Input({ required: true }) columns!: any[];

  getHtmlContent(col: any, rowData: any): SafeHtml {

    let htmlContent = col.html_field;
    if (htmlContent.includes("{{value}}")) {
      htmlContent = htmlContent.replace('{{value}}', rowData[col.field]);
    }
    if (htmlContent.includes("{{status}}")) {
      htmlContent = htmlContent.replace('{{status}}', this.getStatusClass(rowData[col.field]));
    }
    if (htmlContent.includes("{{field}}")) {
      htmlContent = htmlContent.replace('{{field}}', rowData[col.field]);
    }
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  getStatusClass(status: string): string {
    return status === "Recusado" ? "refuse"
      : status === "Aguardando Resposta" ? "wait"
        : status === "Ativo" ? "active": status === "Disponível" ? "disponible": "indisponible"
  }

  @Input() search_field?: FormControl<string> | null;
  @Input() lazy: boolean = false;
  @Input() show_index: boolean = false;
  @Input() loading_table: boolean = false;
  @Input() status!: any;

  onLazyLoad = output<any>();
  onPage = output<any>();

  @ContentChild('options', { static: false })
  headerTemplateRef!: TemplateRef<any>;

  @ContentChild('bodyTable', { static: false })
  bodyTemplateRef!: TemplateRef<any>;

  protected totalRecords: number = 0;
  protected page: number | undefined = 0;
  protected sortField: string | string[] | null = null;
  protected sortOrder: number | null | undefined = null;
  protected filteredValue: any[] = [];

  constructor(private sanitizer: DomSanitizer, private el: ElementRef, private menuService: MenuService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWidth();
  }

  checkWidth() {
    const container = this.el.nativeElement.querySelector('.table-comp');
    if (container.offsetWidth < 1600) {
      container.classList.add('small-width');

    } else {

      container.classList.remove('small-width');

    }
  }
  ngOnInit() {

    // this.checkWidth();

    // this.menuService.menuToggle$.subscribe(() => {
    //   // Adicione um pequeno atraso para garantir que o menu tenha tempo de expandir
    //   setTimeout(() => {
        
    //       this.checkWidth();

    //   }, 300);
    // });

    if (this.lazy) {
      this.search_field?.valueChanges
        .pipe(
          map((value) => value.trim()),
          debounceTime(500),
          distinctUntilChanged()
        )
        .subscribe({
          next: (value) => {
            this.page = 0;
            this.onLazyLoad.emit({
              page: this.page / 10 + 1,
              filter: value ? value : null,
            });
          },
        });
    } else {
      this.search_field?.valueChanges
        .pipe(
          map((value) => value.trim()),
          distinctUntilChanged()
        )
        .subscribe({
          next: (value) => {

            this.filteredValue = [];
            if (!value) {
              return;
            }
            this.value().forEach((element: any) => {
              this.columns.forEach((column) => {

                if (typeof element[column.field] != 'boolean') {
                  if (column.field) {
                    if (
                      element[column.field]
                        .toLowerCase()
                        .includes(value.toLowerCase()) &&
                      !this.filteredValue.includes(element)
                    ) {
                      this.filteredValue.push(element);
                    }
                  }
                }
              });
            });
          },
        });
    }
  }

  onLazyLoadEvent(event: TableLazyLoadEvent) {
    this.sortField = event.sortField!;
    this.sortOrder = event.sortOrder;
    this.onLazyLoad.emit({
      page: event.first! / 10 + 1,
      filter: this.search_field?.value ? this.search_field.value : null,
      sortField: this.sortField ? this.sortField : null,
      sortOrder: this.sortOrder ? this.sortOrder : null,
      status: this.status ? this.status : null,
    });
  }

}
