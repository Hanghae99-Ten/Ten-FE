import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SnackbarProvider } from 'notistack';

// assets
import { Reset, GlobalStyle, Theme } from 'styles';

// @Mui
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider, PickersLocaleText } from '@mui/x-date-pickers-pro';
import { LicenseInfo } from '@mui/x-license-pro';

// project import
import router from 'routes';

// dayjs
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ko';

dayjs.extend(isLeapYear);
dayjs.locale('ko');
LicenseInfo.setLicenseKey(import.meta.env.VITE_APP_DATE_PICKER_PRO_LICENSE);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: true,
      refetchOnMount: 'always',
    },
  },
});

const customPtBRLocaleText: Partial<PickersLocaleText<any>> = {
  okButtonLabel: '확인',
};

const App = () => (
  <ThemeProvider theme={Theme}>
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={customPtBRLocaleText}
        adapterLocale="ko"
        dateFormats={{ year: 'YYYY', month: 'MM' }}
      >
        <SnackbarProvider>
          <Reset />
          <GlobalStyle />
          <RouterProvider router={router} />
        </SnackbarProvider>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      </LocalizationProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
