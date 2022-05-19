import { HorseModel } from ".";

export interface StartModel {
  number: number;
  horse: HorseModel;
  driver: {
    id: number;
    firstName: string;
    lastName: string;
  };
}
