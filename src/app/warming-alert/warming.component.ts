import { Component } from '@angular/core';

@Component ({
  selector: 'app-warming',
  template: `
    <p>This is a warming message!</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
      }
    `
  ]
})

export class WarmingComponent {

}
