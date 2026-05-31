import { Gender } from "./enums/gender";
import { Role } from "./enums/role";
import { UserStatus } from "./enums/user-status";

export interface User {
  id: string;
  name : string;
  email: string;

  role: Role;
  gender: Gender;
  status: UserStatus;

  createdAt: Date;
  updatedAt: Date;
}