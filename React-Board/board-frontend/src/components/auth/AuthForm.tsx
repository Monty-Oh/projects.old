import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

// 에러 로그
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

// 로그인 폼
const AuthFromBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

// 스타일링 된 Input
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

// 로그인 혹은 회원가입 링크
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap: any = {
  login: '로그인',
  register: '회원가입',
};

type AuthFormProps = {
  type: string;
  form: {
    username: string;
    password: string;
    passwordConfirm?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
};

function AuthForm({ type, form, onChange, onSubmit, error }: AuthFormProps) {
  const text: string = textMap[type];
  return (
    <AuthFromBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
        <Footer>
          {type === 'login' ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </form>
    </AuthFromBlock>
  );
}

export default AuthForm;
