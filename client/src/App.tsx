import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { HOME, LOGIN } from "@app/consts/routes";
import { useStore } from "@app/hooks/stores.hooks";
import useRouter from "@app/hooks/router.hook";

function App() {
  const authStore = useStore("authStore");
  const { all } = useRouter();

  if (authStore.loading) {
    return <h3>Loading app...</h3>;
  } else {
    return (
      <Switch>
        {all().map(({ component, path, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
        <Redirect to={authStore.isAuthenticated ? HOME : LOGIN} />
      </Switch>
    );
  }
}

export default observer(App);
