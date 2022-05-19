export interface HorseModel {
  name: string;
  age: number;
  trainer: {
    firstName: string;
    lastName: string;
    shortName: string;
  };
  pedigree: {
    father: {
      name: string;
    };
  };
}
