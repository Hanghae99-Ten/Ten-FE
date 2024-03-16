import { Dayjs } from 'dayjs';
import { PlanDtoUsers } from 'types/planDetail';

export interface ReviewListDto {
  data: PlanPageList[];
}

export interface PlanPageList {
  planId: number;
  startDate: Dayjs | string;
  endDate: Dayjs | string;
  title: string;
  image: string;
  totalPrice: number;
  users: PlanDtoUsers[];
}
