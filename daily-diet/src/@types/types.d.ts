export interface MealsProps {
  title: Date;
  data: {
    id: string;
    description: string;
    foodName: string;
    hour: number;
    insideDiet: boolean;
  }[];
}

export interface SnackProps {
  title: Date;
  data: {
    id: string;
    description: string;
    foodName: string;
    insideDiet: boolean;
    hour: string
  }[];
}
