import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  imports: [],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.css'
})
export class LoadingSpinner {
  @Input() loadingText: string | undefined;
}
