export interface MealsProps {
  title: Date;
  data: {
    id: string;
      foodName: string;
      description: string;
      hour: number;
      status: "POSITIVE" | "NEGATIVE"
  }[];
}
