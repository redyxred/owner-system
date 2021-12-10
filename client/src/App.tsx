import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { RouteService } from '@app/services/RouteService'
import { HOME, LOGIN } from '@app/consts/routes'
import Loader from '@app/components/Loader'
import { useStore } from '@app/hooks/stores.hooks'

function App() {
  const authStore = useStore('authStore')

  if (authStore.loading) {
    return <Loader block />
  } else {
    return (
      <Switch>
        {RouteService.all(authStore.isAuthenticated, authStore.permissions).map(
          ({ component, path, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          )
        )}
        <Redirect to={authStore.isAuthenticated ? HOME : LOGIN} />
      </Switch>
    )
  }
}

export default observer(App)
