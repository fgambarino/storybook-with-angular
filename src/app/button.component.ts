import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button mat-raised-button [color]="color" (click)="onClick()">
      {{ text }}
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn';
  @Input() text: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  onClick() {
    this.buttonClick.emit();
  }
}
