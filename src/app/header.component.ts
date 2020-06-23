import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header-background">
      <h2>
        <button (click)="onClick()" mat-icon-button>
          <mat-icon>keyboard_backspace</mat-icon></button
        ><span>{{ title }}</span>
      </h2>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() title: string;
  @Output() clickToGoBack: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onClick() {
    this.clickToGoBack.emit();
  }
}
