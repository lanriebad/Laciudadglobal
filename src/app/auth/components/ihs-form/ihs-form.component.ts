import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FormGroup, UntypedFormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-ihs-form',
  templateUrl: './ihs-form.component.html',
  styleUrls: ['./ihs-form.component.scss']
})
export class IhsFormComponent implements OnInit {
  ihsForm!: FormGroup;
  @Input() loading = false;
  @Output() ihsFormUploaded = new EventEmitter<string>();
  @ViewChild('ihsInputEl') ihsInputEl!: ElementRef;

  constructor(private fb: UntypedFormBuilder) { }
  ngOnInit(): void {
    this.ihsForm = this.fb.group({
      safetyCertificate: [null, Validators.required]
    });
  }
  onUploadIhsForm(): void {
    const image = (this.ihsInputEl.nativeElement as HTMLInputElement)?.files?.[0];
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.addEventListener('load', () => {
        const imageBase64 = (reader.result as string).replace(/data.*base64,/, '');
        this.ihsFormUploaded.emit(imageBase64);
        this.ihsForm.reset();
      });
    }
  }

}
