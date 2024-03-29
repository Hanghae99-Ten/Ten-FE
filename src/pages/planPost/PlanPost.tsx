import styled from 'styled-components';

// project import
import { PostHeader } from 'components';

const PlanPost = () => (
  <PostWrapper>
    <PostHeader />
    <div id="postContents">Post</div>
  </PostWrapper>
);

const PostWrapper = styled.div`
  ${({ theme }) => theme.WH100};
  justify-content: flex-start;
`;

export default PlanPost;
