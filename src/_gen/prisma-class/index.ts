import { Provider as _Provider } from './provider';
import { Login as _Login } from './login';
import { User as _User } from './user';
import { Role as _Role } from './role';
import { Permission as _Permission } from './permission';
import { RolePermission as _RolePermission } from './role_permission';
import { Chat as _Chat } from './chat';
import { Message as _Message } from './message';

export namespace PrismaModel {
  export class Provider extends _Provider {}
  export class Login extends _Login {}
  export class User extends _User {}
  export class Role extends _Role {}
  export class Permission extends _Permission {}
  export class RolePermission extends _RolePermission {}
  export class Chat extends _Chat {}
  export class Message extends _Message {}

  export const extraModels = [
    Provider,
    Login,
    User,
    Role,
    Permission,
    RolePermission,
    Chat,
    Message,
  ];
}
