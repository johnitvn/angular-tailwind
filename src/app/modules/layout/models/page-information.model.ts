export interface PageInformation {
  title: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  pageTitle?: string;
  previous?: { url: string; title: string };
  actions?: [{ icon: string; title?: string; click?: () => void }];
}
