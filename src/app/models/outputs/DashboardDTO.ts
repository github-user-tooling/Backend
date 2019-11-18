import { IProfileNode } from 'github/queries';
import { IUserDTO } from './UserDTO';

export interface IDashboard {
  user: IProfileNode;
  following: IUserDTO[];
}
