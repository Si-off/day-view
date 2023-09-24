import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Spinner from '@/shared/component/Atom/Spinner';
import styled from 'styled-components';
import { testGetAccessToken } from '@/shared/api';
import Auth from '@/shared/axios';

const AuthPage = () => {
  const router = useRouter();
  const token = router.query.token as string;

  useEffect(() => {
    if (!token) return;
    Auth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    (async () => {
      // axios.get("")
      await testGetAccessToken();
      // await getAccessToken();
      // await window.location.replace('/calendar');
    })();
  }, [router, token]);

  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AuthPage;
