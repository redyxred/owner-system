import { IRouteSiderRender } from "@app/routes/IRoute";

export interface IMenuContainerProps {
  items: IRouteSiderRender[];
  current?: string;
}
