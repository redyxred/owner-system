import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { message } from "antd";
import { isNull } from "@app/utils/validators";
import { ServerUser } from "@app/feathers/serverInterfaces";
import { Permissions } from "@app/consts/permissions";
import { BAD_PERMISSIONS } from "@app/consts/messages";
import { RootStore } from "@app/stores/stores";
import { AuthService } from "@app/services/AuthService";
import { PermissionService } from "@app/services/PermissionService";

export class AuthStore {
  user: ServerUser | undefined;
  loading: boolean;
  rootStore: RootStore;
  permissionService: typeof PermissionService;

  constructor(root: RootStore) {
    makeObservable(this, {
      user: observable,
      loading: observable,
      setLoading: action,
      isAuthenticated: computed,
      permissions: computed,
      authorize: action,
      tryAuth: action,
      logout: action,
      allowFor: action,
      rootStore: false,
    });
    this.user = undefined;
    this.loading = true;
    this.rootStore = root;

    this.tryAuth();
    this.permissionService = PermissionService;
  }

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  get isAuthenticated() {
    return !isNull(this.user);
  }

  get permissions() {
    return this.isAuthenticated ? this.user?.permissions : undefined;
  }

  authorize = (authData: any) => {
    return AuthService.authorize(authData).catch((e) => {
      message.error(e.message).then();
    });
  };

  tryAuth = () => {
    this.setLoading(true);
    Promise.all([
      AuthService.tryAuth().catch((e) => {
        message.error(e.message).then();
        runInAction(() => (this.user = undefined));
      }),
      AuthService.onAuthenticated((loginResult) => {
        if (loginResult.user.permissions === Permissions.USER) {
          message.error(BAD_PERMISSIONS).then();
          this.logout();
          return;
        }
        runInAction(() => (this.user = loginResult.user));
        this.permissionService.init(this.permissions);
      }),
    ]).finally(() => {
      this.setLoading(false);
    });
  };

  logout = () => {
    this.setLoading(true);
    Promise.all([
      AuthService.logout().catch((e) => {
        message.error(e.message).then();
      }),
      AuthService.onLogout(() => {
        runInAction(() => (this.user = undefined));
      }),
    ]).finally(() => this.setLoading(false));
  };

  allowFor = (allowPermissions: string[]) =>
    this.permissionService.allowFor(allowPermissions);
}
