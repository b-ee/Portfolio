import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent implements OnInit {
  projectArray = [
    {
      icons: [
        {tooltip: "Angular 5", class: "fab fa-angular fa-lg"},
        {tooltip: "JavaScript", class: "fab fa-js-square fa-lg"},
        {tooltip: "Sass", class: "fab fa-sass fa-lg"},
        {tooltip: "PostgreSQL database", class: "fas fa-database fa-lg"},
        {tooltip: "Node.js", class: "fab fa-node-js fa-lg"},
        {tooltip: "Express server", class: "fas fa-server fa-lg"},
        {tooltip: "Team project", class: "fas fa-users fa-lg"},
        {tooltip: "Project board", class: "fab fa-trello fa-lg"},
        {tooltip: "Team git", class: "fab fa-github-square fa-lg"}
      ],
      title: "MovieProDB",
      link: "#",
      image: "../../../assets/moviePic.png",
      description: "With my team, created a full-stack application for our client. This was done in an Agile setting, where we produced an MVP from scratch over the course of a two week sprint.",
      monthDate: "May 2018 (current)",
      visit: false
    },
    {
      icons: [
        {tooltip: "React", class: "fab fa-react fa-lg"},
        {tooltip: "JavaScript", class: "fab fa-js-square fa-lg"},
        {tooltip: "Sass", class: "fab fa-sass fa-lg"},
        {tooltip: "PostgreSQL database", class: "fas fa-database fa-lg"},
        {tooltip: "Node.js", class: "fab fa-node-js fa-lg"},
        {tooltip: "Express server", class: "fas fa-server fa-lg"},
        {tooltip: "Team project", class: "fas fa-users fa-lg"},
        {tooltip: "Project board", class: "fab fa-trello fa-lg"}      

      ],
      title: "Maa",
      link: "https://bh-maa.herokuapp.com/",
      image: "../../../assets/maaPic.PNG",
      description: "My proudest body of work so far, and a project through which I have learned a ton. Content addition and changes will continue!",
      monthDate: "April 2018 (current)",
      visit: true
    },
    {
      icons: [
        {tooltip: "JavaScript", class: "fab fa-js-square fa-lg"},
        {tooltip: "HTML5", class: "fab fa-html5 fa-lg"},
        {tooltip: "CSS3", class: "fab fa-css3-alt fa-lg"},
        {tooltip: "API calls", class: "fas fa-database fa-lg"},
        {tooltip: "Learning git/GitHub", class: "fab fa-git fa-lg"}
      ],
      title: "API Random Photo Project",
      link: "https://api-project-b64ba.firebaseapp.com/",
      image: "../../../assets/imagePic.PNG",
      description: "A project to generate writing prompts in the form of random pictures, utilizing images pulled from an API. Uses Formspree to allow users to send ideas to themselves.",
      monthDate: "March 2018",
      visit: true
    },
    {
      icons: [
        {tooltip: "HTML5", class: "fab fa-html5 fa-lg"},
        {tooltip: "CSS3", class: "fab fa-css3-alt fa-lg"},
        {tooltip: "Learning git/GitHub", class: "fab fa-git fa-lg"}
      ],
      title: "The Crooked Starling",
      link: "https://bhutter512.github.io/Storefront-Project/",
      image: "../../../assets/crookedStarling.jpg",
      description: "A website built from the ground up. Serves as a playground when working to refine my style and implement more and more advanced techniques",
      monthDate: "March 2018",
      visit: true
    },
    {
      icons: [
        {tooltip: "CSS3", class: "fab fa-css3-alt fa-lg"},
        {tooltip: "CodePen", class: "fab fa-codepen fa-lg"}
      ],
      title: "CSS Creature",
      link: "https://codepen.io/karikamiya/pen/GQbgjQ",
      image: "../../../assets/creaturePic.PNG",
      description: "An early project to manipulate CSS to create graphic elements",
      monthDate: "March 2018",
      visit: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
