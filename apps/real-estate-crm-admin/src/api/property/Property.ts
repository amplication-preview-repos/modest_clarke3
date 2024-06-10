import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  typeField: string | null;
  updatedAt: Date;
};
