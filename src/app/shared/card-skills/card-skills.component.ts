import { Component } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.scss']
})
export class CardSkillsComponent {
  skills = [
    {
      name: 'HTML',
      icon: '../../../assets/HTML-icon.png',
    },
    {
      name: 'CSS',
      icon: '../../../assets/CSS-icon.png',
    },
    {
      name: 'JavaScript',
      icon: '../../../assets/JavaScript-icon.png',
    },
    {
      name: 'Angular',
      icon: '../../../assets/Angular-icon.png',
    },
    {
      name: 'TypeScript',
      icon: '../../../assets/typescript-icon.png',
    },
    {
      name: 'Git',
      icon: '../../../assets/GitHub-icon.png',
    }
  ]
}
