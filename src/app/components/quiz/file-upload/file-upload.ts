import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css'
})
export class FileUpload {

  @Input() isLoading = false;
  @Input() actionLabel = 'Upload';
  @Output() fileSelected = new EventEmitter<File>();
  @Output() submit = new EventEmitter<File>();

  selectedFile?: File;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileSelected.emit(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.submit.emit(this.selectedFile)
    }
  }

}
