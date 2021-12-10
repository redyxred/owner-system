export const queryParams = (search: any) => new URLSearchParams(search)

export const appendQueryParam = (
  name: string,
  param: string,
  location: any
) => {
  const prevQueries = queryParams(location.search)
  if (prevQueries.has(name)) {
    prevQueries.set(name, param)
  } else {
    prevQueries.append(name, param)
  }
  return `${location.pathname}?${prevQueries.toString()}`
}

export const deleteQueryParam = (name: string, location: any) => {
  const current = queryParams(location.search)
  current.delete(name)
  return `${location.pathname}?${current.toString()}`
}
