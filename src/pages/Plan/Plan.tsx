import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

// project import
import { getPlanePageList } from 'api/planePageList';
import { PostHeader } from 'components';

const Plan = () => {
  const { data: planDetailData } = useQuery({
    queryKey: ['planDetailData'],
    queryFn: async () => (await getPlanePageList()).data,
  });

  const planDetail = planDetailData || [];

  return (
    <PostWrapper>
      <PostHeader />
    </PostWrapper>
  );
};

export default Plan;

const PostWrapper = styled.div`
  ${({ theme }) => theme.WH100};
  justify-content: flex-start;
`;
