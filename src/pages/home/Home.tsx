import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from 'styled-components';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

// material-ui
import { Avatar, AvatarGroup, CardMedia, Stack, Typography } from '@mui/material';

// project import
import { getPlanePageList } from 'api/planePageList';
import { MainCard } from 'components/common/MainCard';
import { DefaultCard } from 'components/common';
import { addCommas } from 'utile/formatUtils';

const Home = () => {
  const theme = useTheme();

  const { data: reviewListData } = useQuery({
    queryKey: ['reviewListData'],
    queryFn: async () => (await getPlanePageList()).data,
  });

  const reviewList = reviewListData || [];

  return (
    <MainCard fullHeight fullWidth sx={{ padding: 3 }}>
      <Stack direction="row" spacing={1}>
        {reviewList.map((item) => (
          <DefaultCard key={item.planId} sx={{ width: 300, p: 0, '&:hover': { bgcolor: theme.colors.gray1 } }}>
            <Link to="/">
              <Stack sx={{ width: 'auto', padding: 3 }} spacing={1}>
                <CardMedia component="img" image={item.image} sx={{ borderRadius: 2, width: '100%', height: 200 }} />
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</Typography>
                <Stack direction="row" alignItems="center" spacing={0.5} width="100%">
                  <Typography variant="caption" color={theme.colors.gray4} lineHeight="normal">
                    총 비용
                  </Typography>
                  <Typography>{addCommas(item.totalPrice)}</Typography>
                  <AvatarGroup
                    max={2}
                    sx={{
                      marginLeft: 'auto !important',
                      '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
                    }}
                  >
                    {item.users.map((user) => (
                      <Avatar key={user.userId} alt={`${user.userName}-${user.userId}`} src={user.userProfileImg} />
                    ))}
                  </AvatarGroup>
                </Stack>
                <Typography variant="body2" sx={{ color: theme.colors.gray3 }}>
                  {dayjs(item.startDate).format('YYYY-MM-DD')} - {dayjs(item.endDate).format('YYYY-MM-DD')}
                </Typography>
              </Stack>
            </Link>
          </DefaultCard>
        ))}
      </Stack>
    </MainCard>
  );
};

export  default Home