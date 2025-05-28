import React, { useState } from 'react';
import * as S from './Navbar.styled';
import { useDeviceDetect } from '../../hooks/UseDeviceDetect';
import { useLanguage } from '../../contexts/LanguageContext';

interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const navItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'skills' },
  { id: 'projects' },
  { id: 'contact' }
];

const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home', onSectionChange }) => {
  const { isMobile } = useDeviceDetect();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
    setMobileOpen(false);
  };

  if (!isMobile) {
    return (
      <S.Wrapper>
        <S.Container>
          {navItems.map((item) => (
            <S.NavButton
              key={item.id}
              $isActive={activeSection === item.id}
              onClick={() => handleNavClick(item.id)}
            >
              <S.ButtonText>{t(`navigation.${item.id}`)}</S.ButtonText>
            </S.NavButton>
          ))}
        </S.Container>
      </S.Wrapper>
    );
  }

  return (
    <>
      <S.FabButton
        $open={mobileOpen}
        aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
        onClick={() => setMobileOpen((v) => !v)}
      />
      <S.MobileMenuOverlay $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <S.MobileMenu $open={mobileOpen}>
        {navItems.map((item) => (
          <S.MobileNavButton
            key={item.id}
            $isActive={activeSection === item.id}
            onClick={() => handleNavClick(item.id)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {t(`navigation.${item.id}`)}
          </S.MobileNavButton>
        ))}
      </S.MobileMenu>
    </>
  );
};

export default Navbar;
