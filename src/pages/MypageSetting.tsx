import { useState } from 'react';
import styled, { useTheme } from 'styled-components';

// material-ui
import { Button, Container, List, Stack, Typography, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { DefaultCard } from 'components/common';
// assets
import Left from 'assets/icons/left.svg?react';
import Setting from 'assets/icons/setting.svg?react';
import Headset from 'assets/icons/headset.svg?react';
import Info from 'assets/icons/info.svg?react';
import Notification from 'assets/icons/notification.svg?react';
import Comment from 'assets/icons/comment.svg?react';
import World from 'assets/icons/world.svg?react';
// type

// project import

export const MypageSetting = () => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Container maxWidth="lg">
      <BackGoMypage>
        <Left />
        <Typography sx={{ fontSize: 20, fontWeight: 600, alignContent: 'center' }}>마이페이지</Typography>
      </BackGoMypage>

      <Stack direction="row" spacing={2} sx={{ mb: 12 }}>
        <DefaultCard
          direction="column"
          sx={{
            width: '384px',
            height: '438px',
            padding: 0,
          }}
          alignItems="center"
        >
          <List component="nav" aria-label="main mailbox folders" sx={{ paddingTop: 0 }}>
            <ListItemButton
              sx={{ width: '384px', height: '72px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <Setting />
              </ListItemIcon>
              <ListItemText primary="개인정보설정" />
            </ListItemButton>

            <ListItemButton
              sx={{ width: '384px', height: '72px' }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <Notification />
              </ListItemIcon>
              <ListItemText primary="알림" />
            </ListItemButton>
          </List>

          <ListItemButton
            sx={{ width: '384px', height: '72px' }}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <Headset />
            </ListItemIcon>
            <ListItemText primary="고객센터" />
          </ListItemButton>

          <ListItemButton
            sx={{ width: '384px', height: '72px' }}
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <Comment />
            </ListItemIcon>
            <ListItemText primary="이용약관" />
          </ListItemButton>

          <ListItemButton
            sx={{ width: '384px', height: '72px' }}
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="개인정보 처리방침" />
          </ListItemButton>

          <ListItemButton
            sx={{ width: '384px', height: '72px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <World />
            </ListItemIcon>
            <ListItemText primary="오픈소스 라이선스" />
          </ListItemButton>
        </DefaultCard>

        <DefaultCard
          spacing={2}
          sx={{ width: '792px', height: '789px', bgcolor: theme.bgColor, boxShadow: 0, padding: 0, fontSize: '20px', fontWeight: '600' }}
        >
          <DefaultCard
            spacing={2.5}
            direction="column"
            justifyContent="center"
            alignContent="center"
            sx={{ width: '792px', height: '163px', padding: ' 28px 42px 30px 28px' }}
          >
            <Typography variant="h5" align="left" sx={{ color: theme.colors.gray5 }}>
              이메일
            </Typography>
            <DefaultCard
              display="flex"
              justifyContent="center"
              sx={{ width: '723px', height: '58px', bgcolor: theme.bgColor, color: theme.colors.gray4, paddingLeft: '15px' }}
            >
              xxxx@naver.com
            </DefaultCard>
          </DefaultCard>

          <DefaultCard
            spacing={2.5}
            direction="column"
            justifyContent="center"
            alignContent="center"
            sx={{ width: '792px', height: '158px', padding: ' 28px 42px 30px 28px', color: theme.colors.gray5 }}
          >
            <Typography variant="h5" align="left">
              닉네임
            </Typography>
            <DefaultCard
              display="flex"
              justifyContent="center"
              sx={{ width: '723px', height: '56px', border: '1px solid #333', paddingLeft: '15px' }}
            >
              모시깽이
            </DefaultCard>
          </DefaultCard>

          <DefaultCard sx={{ width: '792px', height: '329px' }} alignItems="center">
            비밀번호
          </DefaultCard>

          <DefaultCard sx={{ width: '792px', height: '85px' }} alignItems="center">
            탈퇴하기
          </DefaultCard>
        </DefaultCard>
      </Stack>
    </Container>
  );
};

const BackGoMypage = styled.div`
  ${({ theme }) => theme.FlexRow};
  align-items: center;
  width: 155px;
  height: 41px;
  gap: 13px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray4};
`;
