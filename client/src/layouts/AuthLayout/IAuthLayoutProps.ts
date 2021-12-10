import { RouteComponentProps } from 'react-router-dom'
import { IHeaderProps } from '@app/components/Header/IHeaderProps'

export interface IAuthLayoutProps extends RouteComponentProps {
  subHeader?: JSX.Element
  headerOptions?: IHeaderProps
}
