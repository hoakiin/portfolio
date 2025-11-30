import React from "react";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "framer-motion";
import { S } from "../About_Styles";

type LanguagePropsType = {
  name: string;
  percent: number;
  level: string;
};

export const Language: React.FC<LanguagePropsType> = ({
  name,
  percent,
  level,
}: LanguagePropsType) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const shouldReduce = useReducedMotion();

  return (
    <S.Language ref={ref}>
      <S.TopRow>
        <h3>{name}</h3>
        <span>{level}</span>
      </S.TopRow>

      <S.Bar>
        <S.Fill
          percent={percent}
          initial={{ scaleX: shouldReduce ? 1 : 0 }}
          animate={{ scaleX: shouldReduce ? 1 : inView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </S.Bar>
    </S.Language>
  );
};
