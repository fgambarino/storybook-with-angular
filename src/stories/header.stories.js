import { HeaderComponent } from "../app/header.component";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

storiesOf("Header Component", module)
  .addDecorator(
    moduleMetadata({
      imports: [MatIconModule, MatButtonModule],
    })
  )
  .add("Short text", () => ({
    component: HeaderComponent,
    props: { title: "Hello!" },
  }))
  .add("Very long text", () => ({
    component: HeaderComponent,
    props: {
      title:
        "This is a very very long text, so you can check how the header behaves in such cases!",
    },
  }));
