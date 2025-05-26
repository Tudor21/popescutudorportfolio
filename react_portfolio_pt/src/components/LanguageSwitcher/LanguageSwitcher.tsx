import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './LanguageSwitcher.styled';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <S.Wrapper>
      <S.Button
        $isActive={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </S.Button>
      <S.Button
        $isActive={language === 'ro'}
        onClick={() => setLanguage('ro')}
      >
        RO
      </S.Button>
    </S.Wrapper>
  );
};

export default LanguageSwitcher;