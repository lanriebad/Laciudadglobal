import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import {IProject} from '../../../core/models/project';
import { DashboardService } from '../../services/dashboard.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/home/models/project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  loading = false;
  projectCompletionDetailOptions!: Observable<String[]>
  projects$!: Observable<Project[]>;

  @Input() project?: IProject | null;
  images: {[k: string | number]: string} = {};

  projectForm!: FormGroup;

  @Output() createProject = new EventEmitter<IProject>();
  constructor(private fb: UntypedFormBuilder,private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.projectForm = this.onInitForm();
    this.updateFormValidation();
    this.projectForm.updateValueAndValidity();
    this.projectCompletionDetailOptions = this.dashboardService.getProjectCompletionDetail()
    this.dashboardService.getConstructionProjects()
  }
  get photos() {
    return (this.projectForm.get('photos') as FormArray);
  }

  get photoControls() {
    return this.photos.controls;
  }
  isProjectCompleted(): boolean {
    const projectCompletionDetailControl = this.projectForm.get('projectCompletionDetail');
    return projectCompletionDetailControl?.value?.toLowerCase() === 'completed';
  }

  onCreateForm() {
    const photos = this.project?.constructionPhoto || [];

    this.createProject.emit({
      ...this.project,
      ...this.projectForm.value,
      dateOfCompletion: new Date(),
      photos: [
        ...photos,
        ...Object.values(this.images)
        .filter(image => !!image)]
    });

    this.projectForm.reset();
  }

  onRemovePhoto(i: number) {
    this.photos.removeAt(i);
  }

  onAddPhoto() {
    this.photos.push(this.newPhoto);
  }


  onGetDataUriForImage(event: Event, imgType: any): void {
    const image = (event.currentTarget as HTMLInputElement)?.files?.[0];
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.addEventListener('load', () => {
        this.images[imgType] = (reader.result as string).replace(/data.*base64,/, '');
      });
    } else {
      this.images[imgType] = '';
    }
  }

  private get newPhoto() {
    return this.fb.group({
      constructionPhoto: [null, [Validators.required]]
    });
  }

  private onInitForm(): FormGroup {
    return this.fb.group({
      clientName: [this.project?.clientName || null, [Validators.required]],
      projectType: [this.project?.projectType || null, [Validators.required]],
      industry: [this.project?.industry || null, [Validators.required]],
      dateOfCompletion: [this.formatDate(this.project?.dateOfCompletion)],
      projectName: [this.project?.projectName || null, [Validators.required]],
      photos: this.fb.array([this.newPhoto]),
      projectCompletionDetail:[this.project?.projectCompletionDetail || null, [Validators.required]],
      longDescription: [this.project?.longDescription || null, [Validators.required]]
    });
  }

  private formatDate(date?: Date | string): string | null {
    if (date) {
      const dateObj = new Date(date);
      const projectDate = dateObj.getDate();
      const projectMonth = dateObj.getMonth() + 1 < 10 ? '0' + (dateObj.getMonth() + 1) : dateObj.getMonth() + 1;
      const projectYear = dateObj.getFullYear();
      return `${projectYear}-${projectMonth}-${projectDate}`;
    }
    return null;
  }

  onEditPhoto(i: number) {
    const onConfirmDelete = confirm('Are you sure you want to remove this image?')
    if (onConfirmDelete) {
     this.project!.constructionPhoto = this.project!.constructionPhoto?.filter((project, index) => i !== index);
     this.updateFormValidation();
    }
  }

  private updateFormValidation() {
    if (!this.project?.constructionPhoto?.length) {
      this.photos.controls.forEach(control => {
        control.get('constructionPhoto')?.setValidators(Validators.required);
        control.get('constructionPhoto')?.updateValueAndValidity();
      });
    } else {
      this.photos.controls.forEach(control => {
        control.get('constructionPhoto')?.clearValidators();
        control.get('constructionPhoto')?.updateValueAndValidity();
      });
    }
  }
}
