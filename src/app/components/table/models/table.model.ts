export interface TableColumns {
  field: string;
  icon?: string;
  width?: string;
  header?: string;
  sort?: boolean;
  hide_field?: 'sm' | 'md' | 'lg' | 'xl'| 'xxl';
  html_field?: string;
}
