import React, { useState } from 'react';
import * as S from './Navbar.styled';
import { useDeviceDetect } from '../../hooks/UseDeviceDetect';

interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home', onSectionChange }) => {
  const { isMobile } = useDeviceDetect();
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
              <S.ButtonText>{item.label}</S.ButtonText>
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
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMobileOpen((v) => !v)}
      >
      </S.FabButton>
      <S.MobileMenuOverlay $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <S.MobileMenu $open={mobileOpen}>
        {navItems.map((item) => (
          <S.MobileNavButton
            key={item.id}
            $isActive={activeSection === item.id}
            onClick={() => handleNavClick(item.id)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {item.label}
          </S.MobileNavButton>
        ))}
      </S.MobileMenu>
    </>
  );
};

export default Navbar;
