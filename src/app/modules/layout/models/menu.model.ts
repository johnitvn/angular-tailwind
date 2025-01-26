export interface MenuItem {
  group: string;
  separator?: boolean;
  selected?: boolean;
  active?: boolean;
  items: Array<SubMenuItem>;
}

export interface SubMenuItem {
  icon?: string;
  label?: string;
  route?: string | null;
  expanded?: boolean;
  active?: boolean;
  children?: Array<SubMenuItem>;
}

export interface PageInformation {
  title: string;
  previous?: { url: string; title: string };
  actions?: [{ icon?: string; title?: string; click?: () => void }];
}
