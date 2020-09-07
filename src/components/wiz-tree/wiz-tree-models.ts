export interface itemTreeModel {
  label: string;
  selected: boolean;
  open: boolean;
  disabledChild?: boolean;
  data: any;
  child?: itemTreeModel[];
}
export interface EventDataChild {
  id: string;
  data: itemTreeModel;
  child: itemTreeModel[];
}
