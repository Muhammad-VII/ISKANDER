import { SharedService } from './../../../services/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-shared-contact',
  templateUrl: './shared-contact.component.html',
  styleUrls: ['./shared-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SharedContactComponent implements OnInit, OnDestroy {
  subscribtions$: Subscription[] = [];
  lang: string = localStorage.getItem('lang')! ?? 'due';

  constructor(
    private _SpinnerService: NgxSpinnerService,
    private _SharedService: SharedService,
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
    this._SpinnerService.show();
    if (!this.contactForm.valid) {
    } else {
      this.subscribtions$.push(
        this._SharedService.sendContactForm(this.contactForm.value).subscribe({
          next: (val) => {
            this._SpinnerService.hide();
            this.contactForm.reset();
            $('#liveToast').addClass('show');
            setTimeout(() => {
              $('#liveToast').removeClass('show');
            }
            , 3000);
          },
          error: (err) => {
            this._SpinnerService.hide();
          },
        })
      );
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscribtions$.forEach((sub) => sub.unsubscribe());
  }
}
