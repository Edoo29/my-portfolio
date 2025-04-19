export interface RoadmapItemType {
  year: number;
  title: string;
  description: string;
  color: string;
}

export interface RoadmapItemProps extends RoadmapItemType {
  idx: number;
}
