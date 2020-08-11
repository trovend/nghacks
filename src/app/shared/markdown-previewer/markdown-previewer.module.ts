import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MarkdownPreviewerComponent } from './markdown-previewer.component';
import { MarkdownDialogPreviewComponent } from './components/markdown-dialog-preview/markdown-dialog-preview.component';

@NgModule({
  declarations: [
    MarkdownPreviewerComponent,
    MarkdownDialogPreviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [
    MarkdownPreviewerComponent
  ]
})
export class MarkdownPreviewerModule { }