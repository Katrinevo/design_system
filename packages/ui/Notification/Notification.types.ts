export interface NotificationProps {
  title: string;
  message: string;
  type?:
    | "info"
    | "success"
    | "warning"
    | "error";
}