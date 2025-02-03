export interface PageInfo {
  title: string;
  heading?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  previous?: { url: string; title: string };
  actions?: [{ icon: string; title?: string; click?: () => void }];
}
