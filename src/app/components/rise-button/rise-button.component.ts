import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-rise-button',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './rise-button.component.html',
  styleUrl: './rise-button.component.css'
})
export class RiseButtonComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<RiseButtonComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    // event.preventDefault();
  }
}
