import { css } from '@emotion/core';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const contentBox = css`
  background-color: var(--bg-content-color);
  max-width: var(--content-width);
  margin: 0 auto;
  transition: background-color 0.6s;
  padding: var(--space);
  border-radius: var(--radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02), 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.6s;
`;