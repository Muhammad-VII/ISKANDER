import { SharedService } from './../../../services/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-shared-contact',
  templateUrl: './shared-contact.component.html',
  styleUrls: ['./shared-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SharedContactComponent implements OnInit, OnDestroy {
  subscribtions$: Subscription[] = [];
  constructor(
    private _SharedService: SharedService,
    private toast: HotToastService
  ) {}

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(``, {
      validators: [Validators.required, Validators.minLength(2)]
    }),
    email: new FormControl(``, [Validators.required, Validators.email, Validators.minLength(2)]),
    subject: new FormControl(``, [Validators.required, Validators.minLength(2)]),
    message: new FormControl(``, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  submitContactForm() {
    if (!this.contactForm.valid) {
    } else {
      this.subscribtions$.push(
        this._SharedService.sendContactForm(this.contactForm.value).pipe(
          this.toast.observe({
            loading: 'Sending...',
            success: 'Sent successfully',
            error: 'Could not send.',
          })
        ).subscribe({
          next: (val) => {
            this.contactForm.reset()
          },
          error: (err) => {
            console.log(err);
          },
        })
      );
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscribtions$.forEach((sub) => sub.unsubscribe());
  }
}
