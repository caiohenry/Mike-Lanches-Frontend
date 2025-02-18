import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputValidatorService {
  constructor() {}

  static getInputErrors(
    validatorsName: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validatorsValue?: any
  ) {
    const messages: Record<string, string> = {
      required: `Esse campo é obrigatório.`,
      minlength: `Esse campo deve conter no mínimo ${validatorsValue.requiredLength} caracteres.`,
      maxlength: `Esse campo deve conter no máximo ${validatorsValue.requiredLength} caracteres.`,
      email: `Esse campo deve ser um email válido.`,
      invalidCPF: `Esse campo deve ser um CPF válido.`,
      confirmPasswordValidator: `As senhas não coincidem.`,
      cpfInvalid: `Dígitos verificadores não correspondem. `
    };

    return messages[validatorsName];
  }
}
