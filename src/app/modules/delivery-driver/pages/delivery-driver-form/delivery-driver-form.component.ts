import { Component, inject, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NonNullableFormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LottieComponent } from 'ngx-lottie';
import { ButtonComponent } from '../../../../components/button/button.component';
import { InputFieldComponent } from '../../../../components/input-field/input-field.component';
import { AutoCompleteFieldConfig } from '../../../../components/input-field/models/input-config.interface';
import { PageTitleComponent } from '../../../../components/page-title/page-title.component';
import { HandleMessage } from '../../../../services/handle-message.service';
import { LoadingService } from '../../../../services/loading.service';
import { DeliveryDriverGroup } from '../../interfaces/delivery-driver-interface';
import { DeliveryDriverFormService } from '../../services/delivery-driver.form.service';
import { DeliveryDriverAPIService } from '../../services/delivery-driver.api.service';

@Component({
  selector: 'app-delivery-driver-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputFieldComponent,
    ButtonComponent,
    RouterModule,
    PageTitleComponent
  ],
  templateUrl: './delivery-driver-form.component.html',
  styleUrl: './delivery-driver-form.component.scss'
})
export class DeliveryDriverFormComponent {

  // Declarate form
  form!: DeliveryDriverGroup;

  editController: boolean = false;

  constructor(
    private formBuilder$: NonNullableFormBuilder,
    private form$: DeliveryDriverFormService,
    private service$: DeliveryDriverAPIService,
    private msg$: HandleMessage,
  private router$: Router) {
    this.form = form$.getForm();
  }


  // Function to send employee data back
  submitCollaborator() {
    if (this.form.invalid) {
      // Mark all controls of the invalid form group as dirty.
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field);
        control?.markAsDirty();
      });
      return;
    }

    // Clone the address form group.
    let clone: FormGroup = this.formBuilder$.group(this.form.value);

    if (this.editController) {
      this.service$.create(clone.value).subscribe({
        next: (response) => {
          this.msg$.addMsg(
            'success',
            'Sucesso',
            'Colaborador cadastrado com sucesso!'
          );
          // this.router.navigateByUrl('/collaborator-page');
          // this.loading$.setLoading(false)
        },
        error: (error) => {
          if (error.error.detail === 'Colaborador não encontrado no sistema.') {
            this.msg$.addMsg(
              'error',
              'Erro!',
              'Colaborador não encontrado no sistema.'
            );
          } else {
            // Handle server errors by displaying error messages.
            for (let err of error.error.error) {
              this.msg$.addMsg("error", "Erro!", err);
            }
          }
        },
      });
    } else {
      this.service$
        .update(clone.value.id, clone.value)
        .subscribe({
          next: (response) => {
            this.msg$.addMsg(
              'success',
              'Sucesso!',
              'Colaborador atualizado com sucesso!'
            );
          },
          error: (error) => {
            if (
              error.error.detail === 'Colaborador não encontrado no sistema.'
            ) {
              this.msg$.addMsg(
                'error',
                'Erro!',
                'Colaborador não encontrado no sistema.'
              );
            } else {
              // Handle server errors by displaying error messages.
              for (let err of error.error.error) {
                this.msg$.addMsg("error", "Erro!", err);
              }
            }
          },
        });
    }
  }

  // Cancel Registration
  cancelForm(): void {
    this.router$.navigate(['/collaborator-page']);
  }

  // Clean Form
  cleanForm() {
    this.form.reset();
  }

  // This functions populates the form with the collaborator data.
  @Input()
  set id(id: any) {
    if (!id) {
     
      this.editController = true;
    } else {
      this.editController = false;
      // Update the form group for the user.
      this.service$.detail(id).subscribe({
        next: (value) => {

          // Set the active index to the current invalid form group's index.
          this.form.patchValue(value);
        },
      });
    }
  }

}
