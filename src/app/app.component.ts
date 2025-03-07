import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { listen } from '@tauri-apps/api/event';
import { XkcdComic } from './common/interfaces';
import { AlertService, TauriApiService } from './common/services';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatSnackBarModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    comicForm: FormGroup;
    comic: XkcdComic | null = null;
    index: number = 0;
    maxIndex: number = 0;
    loading: boolean = false;

    constructor(
        formBuilder: FormBuilder,
        private tauriApi: TauriApiService,
        private alertService: AlertService
    ) {
        this.comicForm = formBuilder.group({
            index: ['']
        });
    }

    async ngOnInit() {
        await this.fetchComic();
        this.maxIndex = this.comic?.num || 0;
        this.comicForm.get('index')?.setValue(this.index);

        listen('alert', event => {
            alert(event.payload);
        });
    }

    async onSubmit() {
        if (this.loading) {
            return;
        }

        this.index = this.comicForm.get('index')?.value;

        if (this.index < 1 || this.index > this.maxIndex) {
            this.alertService.error('Invalid comic index');
            return;
        }

        await this.fetchComic();
    }

    onPrevious() {
        this.index--;
        if (this.index < 1) {
            this.index = 1;
        }
        this.comicForm.get('index')?.setValue(this.index);
        this.fetchComic();
    }

    onNext() {
        this.index++;
        if (this.index > this.maxIndex) {
            this.index = this.maxIndex;
        }
        this.comicForm.get('index')?.setValue(this.index);
        this.fetchComic();
    }

    onRandom() {
        this.index = Math.floor(Math.random() * this.maxIndex) + 1;
        this.comicForm.get('index')?.setValue(this.index);
        this.fetchComic();
    }

    private async fetchComic() {
        this.loading = true;
        try {
            this.comic = await this.tauriApi.fetchComic(this.index);
            if (this.comic) {
                this.index = this.comic.num;
            }
        } catch (error) {
            this.alertService.error('Error fetching XKCD comic: ' + error);
        } finally {
            this.loading = false;
        }
    }
}
