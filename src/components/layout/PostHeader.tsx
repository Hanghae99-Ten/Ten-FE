import styled from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import 'dayjs/locale/ko';

// assets
import { ReactComponent as PlusButton } from 'assets/icons/PlusButton.svg';
import { ReactComponent as Share } from 'assets/icons/Share.svg';
import { ReactComponent as Edit } from 'assets/icons/Edit.svg';

export const PostHeader = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [endDate, setEndDate] = useState<Dayjs | null>(startDate);
  const [totalDays, setTotalDays] = useState<string>('');

  document.addEventListener('scroll', () => {
    const current = document.documentElement.scrollTop;
    const blurAmount = Math.round(current / 40);
    const elem = document.getElementById('postHeader');

    if (elem) {
      elem.style.filter = `blur(${blurAmount}px)`;
    }
  });

  useEffect(() => {
    if (startDate && endDate) {
      const startYear = startDate.year();
      const startMonth = startDate.month();
      const startDay = startDate.date();

      const endYear = endDate.year();
      const endMonth = endDate.month();
      const endDay = endDate.date();

      const newStartDate = new Date(`${startYear}-${startMonth + 1}-${startDay} 00:00:00`);
      const newEndDate = new Date(`${endYear}-${endMonth + 1}-${endDay} 00:00:00`);

      const time = newEndDate.getTime() - newStartDate.getTime();
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      if (days > 0) {
        setTotalDays(`${days}박 ${days + 1}일`);
      } else {
        setTotalDays(`0박 1일`);
      }
    }
  }, [startDate, endDate]);

  return (
    <PostWrapper>
      <Container id="postHeader">
        <EditArea>
          <Edit />
          <Share />
        </EditArea>
        <ContentsArea>
          <h1>양이김김의 쩝쩝여행</h1>
          <CalendarArea>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
              <DemoContainer components={['DesktopDatePicker']}>
                <DatePicker format="YYYY-MM-DD" defaultValue={dayjs(startDate)} value={startDate} onChange={(date) => setStartDate(date)} />
                <DatePicker format="YYYY-MM-DD" minDate={dayjs(startDate)} value={dayjs(startDate)} onChange={(date) => setEndDate(date)} />
              </DemoContainer>
            </LocalizationProvider>
            <div>{totalDays}</div>
          </CalendarArea>
          <MemberArea>
            <NameBox>양혜원</NameBox>
            <NameBox>이현동</NameBox>
            <NameBox>김은성</NameBox>
            <NameBox>김선중</NameBox>
            <PlusButton />
          </MemberArea>
        </ContentsArea>
      </Container>
    </PostWrapper>
  );
};

const PostWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const Container = styled.div`
  width: 75rem;
  height: 32rem;
  margin: 0 auto;
  padding-top: 8.5625rem;
`;

const EditArea = styled.div`
  ${({ theme }) => theme.FlexRow};
  justify-content: flex-end;
  gap: 0.9375rem;
  width: 100%;
  margin-bottom: 7.3125rem;
`;

const ContentsArea = styled.div`
  ${({ theme }) => theme.FlexCol};
  align-items: start;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};

  > h1 {
    margin-bottom: 1.5625rem;
    ${({ theme }) => theme.Title_48_bold};
  }
`;

const CalendarArea = styled.div`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  gap: 0.875rem;
  margin-bottom: 1.25rem;
  ${({ theme }) => theme.Body_500_24};

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.white};
  }
  .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input,
  .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root {
    ${({ theme }) => theme.Body_500_24};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const MemberArea = styled.div`
  ${({ theme }) => theme.FlexRow};
  gap: 0.75rem;
  margin-bottom: 4.5625rem;
`;

const NameBox = styled.div`
  ${({ theme }) => theme.BoxCenter};
  padding: 0.125rem 0.875rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.Body_700_16};
  color: ${({ theme }) => theme.colors.blue};
`;
