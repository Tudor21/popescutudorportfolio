import { useCallback } from 'react';

import { useDeviceDetect } from './UseDeviceDetect';

import useDimensions from './UseDimensions';

interface ReturnType {
  convertPxToVw: (sizeInPx: number) => string;
  convertPxToVh: (sizeInPx: number) => string;
}

const DeviceSizeMapping = {
  MobileWidth: 360,
  DesktopWidth: 1920,
  WideDesktopWidth: 3000,
  MobileHeight: 800,
  DesktopHeight: 1080,
};

const useMetricConverter = (): ReturnType => {
  const { isMobile, isWideDesktop } = useDeviceDetect();

  const { width, height } = useDimensions();

  const convertPxToVw = useCallback(
    (sizeInPx: number | string): string => {
      const viewportWidth = isMobile
        ? DeviceSizeMapping.MobileWidth
        : isWideDesktop
        ? DeviceSizeMapping.WideDesktopWidth
        : DeviceSizeMapping.DesktopWidth;

      if (
        width >= DeviceSizeMapping.DesktopWidth &&
        typeof sizeInPx === 'number'
      ) {
        return `${sizeInPx}px`;
      } else if (
        width < DeviceSizeMapping.DesktopWidth &&
        typeof sizeInPx === 'number'
      ) {
        const itemSize = sizeInPx * 100;
        const sizeInVw = itemSize / viewportWidth;
        return `${sizeInVw}vw`;
      } else {
        return String(sizeInPx);
      }
    },
    [isMobile, isWideDesktop, width]
  );

  const convertPxToVh = useCallback(
    (sizeInPx: number | string): string => {
      const viewportHeight = isMobile
        ? DeviceSizeMapping.MobileHeight
        : DeviceSizeMapping.DesktopHeight;

      if (
        height >= DeviceSizeMapping.DesktopHeight &&
        typeof sizeInPx === 'number'
      ) {
        return `${sizeInPx}px`;
      } else if (
        height < DeviceSizeMapping.DesktopHeight &&
        typeof sizeInPx === 'number'
      ) {
        const itemSize = sizeInPx * 100;
        const sizeInVh = itemSize / viewportHeight;
        return `${sizeInVh}vh`;
      } else {
        return String(sizeInPx);
      }
    },
    [height, isMobile]
  );

  return {
    convertPxToVw,
    convertPxToVh,
  };
};

export { useMetricConverter };
