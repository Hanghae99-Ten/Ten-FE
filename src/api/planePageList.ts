import PlanePageList from 'mock/planPageList.json';
import { ReviewListDto } from 'types/planPageList';

export const getPlanePageList = async (): Promise<ReviewListDto> => PlanePageList;
