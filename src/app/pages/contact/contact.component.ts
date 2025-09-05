import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.send(
      'SEU_SERVICE_ID',    
      'SEU_TEMPLATE_ID',   
      this.formData,
      'SEU_PUBLIC_KEY'    
    ).then((result: EmailJSResponseStatus) => {
      alert('Mensagem enviada com sucesso!');
      this.formData = { name: '', email: '', message: '' };
    }, (error) => {
      alert('Erro ao enviar: ' + error.text);
    });
  }
}
