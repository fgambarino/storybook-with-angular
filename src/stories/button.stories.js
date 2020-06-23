import { ButtonComponent } from "../app/button.component";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";
import { wrap } from "./template-wrapper.utils";

storiesOf("Button Component", module)
  .addDecorator(
    moduleMetadata({
      imports: [MatButtonModule],
    })
  )
  .add("no wrapper", () => ({
    component: ButtonComponent,
    props: { text: "no wrapper", color: "warn" },
  }));
