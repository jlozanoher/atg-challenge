import { StartModel } from ".";

// race number, race name, race start time
export interface RaceModel {
  id: string;
  name: string;
  number: number;
  startTime: string;
  starts: StartModel[];
}
