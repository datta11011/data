import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmPopupProps {
  heading: string;
  description: string;
  iconName: string;
  onClose?: () => void;
  buttons: {
    label: string,
    buttonType: string,
    onClick: () => void,
  }[];
}

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public popupData: ConfirmPopupProps) {

  }

}
