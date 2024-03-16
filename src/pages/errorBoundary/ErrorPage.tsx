import { AxiosError } from 'axios';
import { Link, useLocation, useNavigate, useRouteError } from 'react-router-dom';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// project import
import { APP_DEFAULT_PATH } from 'config';

// types
import { UseRouteError } from 'types/api';

// assets
import error404 from 'assets/images/error/Error404.png';
import error500 from 'assets/images/error/Error500.png';
import { useEffect } from 'react';

// ==============================|| ERROR 404 - MAIN ||============================== //
const ErrorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const error = useRouteError() as UseRouteError;
  const { status } = error;

  const prevButton = () => {
    if (status === 404) {
      navigate(-1);
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    if (status === 404) {
      navigate('/page-not-found', {
        state: {
          from: location.pathname,
        },
        replace: true,
      });
    }
  }, [location.pathname, navigate, status]);

  if (error instanceof AxiosError) {
    return <Typography>⚠️ {error?.response?.data}</Typography>;
  }

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', py: 1, overflow: 'hidden' }}>
      <Grid item xs={12}>
        <Stack direction="row">
          <Grid item>
            {status === 404 ? (
              <Box sx={{ width: { xs: 250, sm: 590 }, height: { xs: 130, sm: 300 } }}>
                <img src={error404} alt="mantis" style={{ width: '100%', height: '100%' }} />
              </Box>
            ) : (
              <Box sx={{ width: { xs: 350, sm: 396 } }}>
                <img src={error500} alt="mantis" style={{ width: '100%', height: '100%' }} />
              </Box>
            )}
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography variant="h4">{status === 404 ? '페이지를 찾을 수 없습니다.' : '페이지를 불러올 수 없습니다.'}</Typography>
          <Stack>
            <Typography color="textSecondary" align="center">
              {status === 404
                ? '페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.'
                : '예기치 못한 오류가 발생했습니다. 나중에 다시 시도해 주세요.'}
            </Typography>
            <Typography color="textSecondary" align="center">
              {status === 404
                ? '입력하신 주소 정확한지 다시 한 번 확인해주세요.'
                : '오류가 지속해서 발생할 시, 풀부킹 고객센터로 문의 부탁드립니다.'}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button onClick={prevButton} variant="outlined">
              {status === 404 ? '이전 페이지' : '새로고침'}
            </Button>
            <Button component={Link} to={APP_DEFAULT_PATH} variant="contained">
              뿅뿅지구여행기 홈
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
