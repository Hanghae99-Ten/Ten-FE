import PlaneDetailMock from 'mock/planDetail.json';
import { PlanDto } from 'types/planDetail';

export const getPlaneDetail = async (): Promise<PlanDto> => PlaneDetailMock;
