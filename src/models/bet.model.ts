export interface BetModel {
  id: string;
  startTime: string;
  tracks: TrackModel[];
}

export interface TrackModel {
  id: number;
  name: string;
}
