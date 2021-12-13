import { useStore } from "@app/hooks/stores.hooks";
import { IRoute, IRouteSiderRender } from "@app/routes/IRoute";
import { routes } from "@app/routes";
import { visibleForPermission } from "@app/utils/permissions";
import { useLocation } from "react-router-dom";

const useRouter = () => {
  const authStore = useStore("authStore");
  const permission = authStore.permissions;
  const location = useLocation();

  const all = (): IRoute[] => {
    const hasAuthorized = authStore.isAuthenticated;

    return routes.filter((route) => {
      if (route.meta.authorized === hasAuthorized) {
        if (route.meta.permissions) {
          if (
            permission &&
            visibleForPermission(permission, route.meta.permissions)
          ) {
            return route;
          }
          return route;
        }
        return route;
      }
      return undefined;
    });
  };

  const siderRoutes = (): IRouteSiderRender[] => {
    return routes
      .filter(
        (route) =>
          route.visibleOnSider &&
          route.meta.permissions &&
          permission &&
          visibleForPermission(permission, route.meta.permissions)
      )
      .map((route) => {
        let newPath = location.pathname.split("/")[1];
        if (route.path.includes(newPath)) {
          return { ...route, active: true } as IRouteSiderRender;
        }
        return route;
      }) as IRouteSiderRender[];
  };

  const current = (): IRoute | undefined => {
    let newPath = location.pathname.split("/")[1];
    return routes.find((route) => route.path.includes(newPath));
  };

  return {
    all,
    siderRoutes,
    current,
  };
};

export default useRouter;
