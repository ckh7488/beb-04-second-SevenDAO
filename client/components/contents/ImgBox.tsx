import { css } from '@emotion/react';
import { FunctionComponent } from 'react';
import Img from 'next/image';

interface ImgBoxProps {
  imgUrl: string;
  size: string;
}

const ImgBox: FunctionComponent<ImgBoxProps> = ({ imgUrl, size = '200px' }) => {
  const wrapperStyle = css`
    display: flex;
    align-items: center;
    margin: 20px;
    max-width: 200;
    width: ${size};
    height: ${size};
  `;

  return (
    <div css={wrapperStyle}>
      {imgUrl === '' ? (
        <Img src={'/sevendao-logo-col.png'} width={size} height={size} priority />
      ) : (
        <Img src={imgUrl} width={size} height={size} priority />
      )}
    </div>
  );
};

export default ImgBox;
