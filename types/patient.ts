import { Gender } from "./enums/gender";

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: Gender;
}