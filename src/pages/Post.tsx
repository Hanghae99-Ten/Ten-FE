import styled from 'styled-components';

// project import
import { PostHeader } from 'components';

export const Post = () => (
  <PostWrapper>
    <PostHeader />
    <div id="postContents">Post</div>
  </PostWrapper>
);

const PostWrapper = styled.div`
  ${({ theme }) => theme.WH100};
  justify-content: flex-start;
`;
