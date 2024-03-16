import { Dayjs } from 'dayjs';

// ==============================|| PlanDto ||============================== //

export interface PlanDto {
  startDate: Dayjs | string;
  endDate: Dayjs | string;
  planTitle: string;
  users: PlanDtoUsers[];
  postsByDate: PlanDtoPostsByDate[];
}

export interface PlanDtoUsers {
  userId: number;
  userName: string;
  userProfileImg?: string;
}

interface PlanDtoPostsByDate {
  date: Dayjs | string;
  totalPrice: number;
  posts: PostsDto[];
}

interface PostsDto {
  placeName: string;
  location: string;
  star: number;
  price: number;
  reviews: Reviews[];
}

interface Reviews extends PlanDtoUsers {
  content: string;
  star: number;
  images?: string[];
}

// ==============================|| PlanGetParams ||============================== //

export interface PlanGetParams {
  planId: number;
  userId: number;
}
