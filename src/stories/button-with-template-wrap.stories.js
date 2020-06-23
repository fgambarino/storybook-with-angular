import { ButtonComponent } from "../app/button.component";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";
import { wrap } from "./template-wrapper.utils";

storiesOf("Button Component", module)
  .addDecorator(
    moduleMetadata({
      imports: [MatButtonModule],
      declarations: [ButtonComponent],
    })
  )
  .addDecorator(
    wrap((content) => `<div class="ng-content-wrapper">${content}<div>`)
  )
  .add("with wrapper", () => ({
    template: `<app-button [text]="text" [color]="color"></app-button>`,
    props: {
      text: "with wrapper",
      color: "accent",
    },
  }));
