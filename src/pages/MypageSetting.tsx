import { useState } from 'react';
import styled from 'styled-components';

// material-ui
import { Button, Container, List, Stack, Typography, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

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
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 25, ml: 25, border: '1px solid red' }}>
      <BackGoMypage>
        <Left />
        <Typography sx={{ fontSize: 20, fontWeight: 600, alignContent: 'center' }}>마이페이지</Typography>
      </BackGoMypage>

      <Stack direction="row" spacing={2}>
        <Stack
          direction="column"
          sx={{
            width: '384px',
            height: '438px',

            borderRadius: '20px',
            boxShadow: '0px 0px 7px 0px rgba(0, 0, 0, 0.15)',
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
        </Stack>

        <Stack sx={{ width: '792px', height: '789px', border: '1px solid red' }} alignItems="center">
          21
        </Stack>
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
  color: ${({ theme }) => theme.colors.gray4};
`;
