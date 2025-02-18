import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../../components/input-field/input-field.component';
import { ContactGroup } from '../../interfaces/contact-interface';
import { ContactService } from '../../services/contact.service';
import { TextAreaFieldConfig } from '../../../../components/input-field/models/input-config.interface';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { ButtonComponent } from '../../../../components/button/button.component';
import { HandleMessage } from '../../../../services/handle-message.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from '../../../../services/loading.service';

@Component({
  selector: 'app-contact-page',
  imports: [InputFieldComponent, LottieComponent, ButtonComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  // Declarate form
  form!: ContactGroup;

  // Config textarea for the field message contact
  config_textarea_message_contact: TextAreaFieldConfig = {
    rows: 5,
    cols: 5,
  };

  // Lottie options
  options_lottie_contact: AnimationOptions = {
    path: 'lottie/contact-page.json',
    loop: true,
    autoplay: true,
  };

  constructor(private service$: ContactService, private msg$: HandleMessage){
    this.form = this.service$.getForm();
  }

  sendContact() {

    // Form is valid
        if (this.form.valid) {
    
          // Login Service
          this.service$.postForm(this.form.value).subscribe({
            next: (response: any) => {

              // Reset form
              this.form.reset();
    
              // Add messsage success login
              this.msg$.addMsg(
                'success',
                'Sucesso!',
                `Mensagem enviada com sucesso.`
              );
              
            },
            error: (error: HttpErrorResponse) => {
    
              // Add messsage error contact
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
