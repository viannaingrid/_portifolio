import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss']
})
export class CardProjectsComponent implements OnInit {

  repos = [
    {
      name: 'BuzzFeed',
      description: 'Aplicação web no estilo de quizzes do BuzzFeed, onde os usuários podem criar, responder e compartilhar seus próprios questionários. Desenvolvida com Angular e TypeScript.',
      image: '../../../assets/project-buzzfeed.png',
      html_url: 'https://vercel.com/ingrid-viannas-projects'
    },
    {
      name: 'Playstation',
      description: 'Simulação da interface da PlayStation Store, permitindo a navegação por jogos, consoles e acessórios. Desenvolvida em Angular.',
      image: '../../../assets/project-playstation.png',
      html_url: 'https://playstation-store-peach.vercel.app/'
    },
    {
      name: 'Site sobre o Natal',
      description: 'Aplicação comemorativa que celebra o Natal, trazendo informações sobre a história, tradições e curiosidades da festividade. Desenvolvida em React.',
      image: '../../../assets/project-christmas.png',
      html_url: 'https://desafio-natal-amber.vercel.app/'
    },
    {
      name: 'Livros na web',
      description: 'Simulação de uma livraria online, com funcionalidades para visualizar informações sobre livros e registrar doações. Desenvolvida em React.',
      image: '../../../assets/project-livros-na-web.png',
      html_url: 'https://livros-vainaweb.vercel.app/'
    },
    {
      name: 'Tela de cadastro',
      description: 'Protótipo de uma interface de tela de cadastro corporativo, criada para demonstrar boas práticas de layout e design responsivo. Desenvolvida em HTML e CSS.',
      image: '../../../assets/project-tela-cadastro.png',
      html_url: 'https://tela-cadastro-wheat.vercel.app/'
    },
    {
      name: 'Jogo Detona Ralph',
      description: 'Jogo web interativo inspirado em Detona Ralph, desenvolvido como prática de lógica de programação e manipulação de DOM. Criado com HTML, CSS e JavaScript.',
      image: '../../../assets/project-detona-ralph.png',
      html_url: 'https://detona-ralph-gray.vercel.app/'
    },
    {
      name: 'Melanie`s Blog',
      description: 'Blog temático desenvolvido para apresentar informações sobre a cantora Melanie Martinez, com foco em estilo e identidade visual. Criado com HTML, CSS e SASS.',
      image: '../../../assets/project-melanie.png',
      html_url: 'https://outubro-rosa-beta.vercel.app/'
    },
    {
      name: 'Outubro Rosa',
      description: 'Blog informativo sobre a campanha Outubro Rosa, com foco em conscientização e prevenção. Desenvolvido em HTML e CSS.',
      image: '../../../assets/project-outubro.png',
      html_url: 'https://outubro-rosa-beta.vercel.app/'
    },
    {
      name: 'Blog Ano Novo',
      description: 'Blog comemorativo de Ano Novo, com layout festivo e estilização moderna, criado em React e SASS.',
      image: '../../../assets/project-ano-novo.png',
      html_url: 'https://ano-novo2025-blush.vercel.app/'
    },
    {
      name: 'We form',
      description: 'Aplicação web voltada para cadastro e gestão de empresas, desenvolvida como simulação de formulário institucional. Criada com HTML e CSS.',
      image: '../../../assets/project-ano-novo.png',
      html_url: 'https://we-form-psi.vercel.app/'
    }


  ]

  constructor() { }

  ngOnInit(): void {

  }
}