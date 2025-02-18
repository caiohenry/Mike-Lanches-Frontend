// Importing necessary components from Angular core
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class HandleMessage {
  constructor(private mes$: MessageService) {}

  messages: {
    [key: string]: { [key: number | string]: [string, string, string] };
  } = {
    auth: {
      401: ['error', 'Erro!', 'Usuário ou senha inválidos!'],
      400: ['error', 'Erro!', 'Combinação incorreta de e-mail e senha!'],
      500: ['error', 'Erro!', 'Erro interno do servidor! Por favor, tente novamente mais tarde!'],
      expired: [
        'error',
        'Erro!',
        'Sessão expirada! Por favor, faça login novamente!',
      ],
    },
  };

  addMsg(
    type: 'success' | 'error' | 'info' | 'warn',
    summary: string,
    message: string
  ) {
    this.mes$.add({ severity: type, summary: summary, detail: message, life: 3000 });
  }

  addNotificationByMgs(message: any) {
    this.addMsg(message[0], message[1], message[2]);
  }
}