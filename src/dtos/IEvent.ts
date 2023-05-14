import { IAddress } from './IAddress';

export interface IEvent {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  addresses?: IAddress[];
}