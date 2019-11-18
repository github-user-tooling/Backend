import { IProfileShortNode } from 'github/queries';
import { IUserDTO } from './UserDTO';

export interface IDashboard {
  user: IProfileShortNode;
  following: IUserDTO[];
}
