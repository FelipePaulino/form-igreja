import React from "react";
import * as S from "./styles";

function DefaultLayout({ children, bgImage, content }: any) {
  return (
    <S.Container bgImage={bgImage}>
      <S.ChildrenContent content={content}>
        {children}
      </S.ChildrenContent>
    </S.Container>
  );
}

export default DefaultLayout;
