
import { BreakPoint } from '../constants/BreakPoint';
import { useMediaQuery } from './UseMediaQuery';

interface ReturnType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWideDesktop: boolean;
  isUltraWideDesktop: boolean;
}

export const useDeviceDetect = (): ReturnType => {
  const isMobile = useMediaQuery(`(max-width: ${BreakPoint.Mobile})`);
  const isTablet = useMediaQuery(`(max-width: ${BreakPoint.Tablet})`);
  const isDesktop = useMediaQuery(`(max-width: ${BreakPoint.Desktop})`);
  const isWideDesktop = useMediaQuery(`(min-width: ${BreakPoint.WideDesktop})`);
  const isUltraWideDesktop = useMediaQuery(
    `(min-width: ${BreakPoint.UltraWideDesktop})`
  );

  return { isMobile, isTablet, isDesktop, isWideDesktop, isUltraWideDesktop };
};