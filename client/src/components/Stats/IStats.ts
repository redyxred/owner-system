export interface IStatsItems {
  key: string
  name: string
  value: string
}

export interface IStatsProps {
  items: IStatsItems[]
  className?: string
}
