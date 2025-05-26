import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    convertPxToVw: (sizeInPx: number) => string;
    convertPxToVh: (sizeInPx: number) => string;
    zIndex: {
      dropdown: number;
      sticky: number;
      fixed: number;
      bottomSheet: number;
      'modal-backdrop': number;
      modal: number;
      popover: number;
      tooltip: number;
      modalMobile: number;
      toast: number;
    };
    constants: {
      imxLinkIframeContainerWidth: string;
    };
  }
}
