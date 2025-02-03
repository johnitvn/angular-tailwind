import type { TemplateRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import type { TuiDialogContext } from '@taiga-ui/core';
import { tuiDialog, TuiDialogService } from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { ReportIssueDialog } from './report-issue.component';
import { SuggestIdeaDialog } from './suggest-idea-dialog.component';

@Component({
  selector: 'app-feedback-dialog',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col',
  },
  template: `
    <button (click)="onReportIssueClick()">Report an issue</button>
    <button (click)="onSuggestIdeaClick()">Suggest an idea</button>
  `,
})
export class FeedbackDialog {
  private readonly dialogs = inject(TuiDialogService);
  public readonly context = injectContext<TuiDialogContext<void, void>>();

  private readonly reportIssueDialog = tuiDialog(ReportIssueDialog, {
    dismissible: true,
    label: 'Report an issue',
  });

  private readonly sugguestIdeaDialog = tuiDialog(SuggestIdeaDialog, {
    dismissible: true,
    label: 'Suggest an idea',
  });

  protected showDialog(content: TemplateRef<TuiDialogContext>): void {
    this.dialogs.open(content, { dismissible: true }).subscribe();
  }

  protected onSuggestIdeaClick() {
    this.context.completeWith();
    this.reportIssueDialog().subscribe();
  }

  protected onReportIssueClick() {
    this.context.completeWith();
    this.sugguestIdeaDialog().subscribe();
  }
}
