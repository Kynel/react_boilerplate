/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const TestPage = () => {
  return <div css={testCss}>test!</div>;
};

export default TestPage;

const testCss = css`
  color: red;
`;
