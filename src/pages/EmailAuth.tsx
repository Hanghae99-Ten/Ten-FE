import React from 'react';

import { Button, Checkbox, Divider, FormControl, FormControlLabel, Stack, TextField, Typography } from '@mui/material';

export default function EmailAuth() {
  return (
    <Stack>
      <Stack sx={{ justifyContent: 'space-between', alignItems: 'center', height: 102 }}>
        <Typography sx={{ fontSize: 28, fontWeight: 'bold' }}>이메일 인증</Typography>
        <Typography>원활한 서비스 이용을 위해 이메일 인증을 받아주세요.</Typography>
      </Stack>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Typography sx={{ fontSize: 24, fontWeight: 'bold' }}>이메일</Typography>
        <TextField placeholder="pyong@naver.com" />
        <Button variant="contained" sx={{ width: '100%', height: 69, fontSize: 24, fontWeight: 'bold', backgroundColor: '#4836FF' }}>
          재전송
        </Button>
      </Stack>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Typography sx={{ fontSize: 24, fontWeight: 'bold' }}>인증번호</Typography>
        <Stack direction="row" spacing={2}>
          <TextField sx={{ flex: 1 }} />
          <Button variant="contained" sx={{ width: 150, fontSize: 24, fontWeight: 'bold', backgroundColor: '#4836FF' }}>
            확인
          </Button>
        </Stack>
      </Stack>
      <Stack sx={{ mt: 2, p: 2, border: '1px solid #9A9A9A', borderRadius: 1 }}>
        <FormControl>
          <FormControlLabel control={<Checkbox />} label="모두 동의합니다." />
          <Divider sx={{ my: 1 }} />
          <FormControlLabel control={<Checkbox />} label="만 14세 이상입니다." />
          <FormControlLabel control={<Checkbox />} label="서비스 이용약관에 동의합니다." />
          <FormControlLabel control={<Checkbox />} label="개인정보 수집/이용에 동의합니다." />
          <FormControlLabel control={<Checkbox />} label="마케팅 수신/홍보 목적의 개인정보 수집 및 이용에 동의합니다." />
          <FormControlLabel control={<Checkbox />} label="위치기반 서비스 이용약관에 동의합니다." />
        </FormControl>
      </Stack>
      <Button variant="contained" sx={{ mt: 2, height: 69, fontSize: 24, fontWeight: 'bold', backgroundColor: '#4836FF' }}>
        다음
      </Button>
    </Stack>
  );
}
