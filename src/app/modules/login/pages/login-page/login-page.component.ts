import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../../../components/input-field/input-field.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { HandleMessage } from '../../../../services/handle-message.service';
import { AuthGroup } from '../../interfaces/auth-interface';
import { PasswordFieldConfig } from '../../../../components/input-field/models/input-config.interface';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule, ButtonComponent, InputFieldComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  // Declarate form
  form!: AuthGroup;

  // Configuration password field
  config_password: PasswordFieldConfig = {
    toggle_mask: true,
  };

  constructor(private service$: AuthService, private msg$: HandleMessage) {
    this.form = this.service$.getForm();
  }

  postLogin() {

    // Form is valid
    if (this.form.valid) {

      // Login Service
      this.service$.postForm(this.form.value).subscribe({
        next: (response: any) => {

          // Set token
          this.service$.setToken(response);

          // Add messsage success login
          this.msg$.addMsg(
            'success',
            'Sucesso!',
            `Bem-vindo(a), ${this.service$.name_user}`
          );
          // this.route$.navigateByUrl('/home');
        },
        error: (error: HttpErrorResponse) => {

          // Add messsage error login
          this.msg$.addNotificationByMgs(
            this.msg$.messages['auth'][error.status]
          );

        },
      });
    } else {

      // Add messsage error form
      return this.msg$.addMsg(
        'error',
        'Erro!',
        'Preencha os campos corretamente!'
      );
    }
  }

}
