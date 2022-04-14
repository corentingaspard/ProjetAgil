import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  template: `
    <div>
      <h1>Option du jeu</h1>

      <h2>Nuggets</h2>
      <p>
        Chaque équipe répond l'une après l'autre à des questions. Celle-ci comporte quatre propositions et une ou plusieurs solutions.
        Il y a quatre questions (deux par équipe). Chaque bonne réponse rapporte 1 miam. Si la réponse est mauvaise, le miam n'est pas gagné par l'équipe.
        Cette phase du jeu n'est pas une épreuve de rapidité !
      </p>

      <h2>Sel ou poivre</h2>
      <p>
        Comme son nom l'indique, il faut associer les deux éléments aux questions posées. C'est une épreuve de rapidité.
        Parfois il ne faut pas répondre l'un ou l'autre mais « les deux ». Considérons le thème suivant : « Pikachu ou le yéti ».
        À chaque question posée, l'équipe doit répondre l'un ou l'autre mais aussi les deux (exemple : « Est poilu ? »).
        Il y a 10 questions, chaque bonne réponse rapporte 1 miam. En cas de mauvaise réponse, le miam va à l'autre équipe.
      </p>

      <p>Bouton clair/sombre:</p>
      <label>
        <input type="checkbox">
        <span class="check"></span>
      </label>
    </div>
  `,
  styles: [
    'div {color: white}'
  ]
})
export class ParametresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
