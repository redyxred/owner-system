export interface IDescriptionsItems {
  key: string
  title: string
  value?: string | JSX.Element
}

export interface IDescriptionsProps {
  items: IDescriptionsItems[]
}
