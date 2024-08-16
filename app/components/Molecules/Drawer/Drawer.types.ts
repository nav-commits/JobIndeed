export interface DrawerComponentProps {
  toggleDrawer: (open: boolean) => () => void;
  pathname: string;
}
