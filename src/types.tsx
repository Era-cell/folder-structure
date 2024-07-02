export interface Project {
  id: number;
  name: string;
}

export interface WBS {
  id: number;
  name: string;
  projectId: number;
}

export interface Task {
  id: number;
  name: string;
  projectId: number;
  wbsId: number;
}
