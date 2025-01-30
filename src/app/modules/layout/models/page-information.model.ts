export interface PageInformation {
  title: string;
  previous?: { url: string; title: string };
  actions?: [{ icon?: string; title?: string; click?: () => void }];
}
