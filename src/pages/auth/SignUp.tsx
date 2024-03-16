import { Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';

const SignUp = () => (
  <Container maxWidth="sm">
    <Stack sx={{ mb: 8 }}>
      <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 28 }}>회원가입</Typography>
    </Stack>
    <Stack spacing={2} sx={{ mb: 2 }}>
      <Stack spacing={1}>
        <Typography>이메일</Typography>
        <TextField placeholder="pyong@naver.com" />
      </Stack>
      <Stack spacing={1}>
        <Typography>비밀번호</Typography>
        <TextField placeholder="비밀번호" />
        <TextField placeholder="비밀번호 확인" helperText="비밀번호가 일치하지 않습니다." />
      </Stack>
      <Stack spacing={1}>
        <Typography>닉네임</Typography>
        <FormControl>
          <RadioGroup defaultValue="J">
            <FormControlLabel control={<Radio />} value="J" label="계획적인 여행을 추구하는 꼼꼼이" />
            <FormControlLabel control={<Radio />} value="P" label="자유로운 여행을 추구하는 방랑자" />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField sx={{ flex: 1 }} />
        <Button variant="contained" disabled>
          딴거 할래요
        </Button>
      </Stack>
    </Stack>
    <Button variant="contained" sx={{ width: '100%', height: 69, fontSize: 24, fontWeight: 'bold' }}>
      가입하기
    </Button>
  </Container>
);

export default SignUp;
