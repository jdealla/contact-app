import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1366 });
  return isDesktop ? children : null;
};

export const TabletLandscapeAndLarger = ({ children }) => {
  const isTabletLandscapeAndLarger = useMediaQuery({ minWidth: 1024 });
  return isTabletLandscapeAndLarger ? children : null;
};

export const TabletLandscape = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1365 });
  return isTablet ? children : null;
};

export const TabletPortraitAndLarger = ({ children }) => {
  const isTabletLandscapeAndLarger = useMediaQuery({ minWidth: 768 });
  return isTabletLandscapeAndLarger ? children : null;
};

export const ExcludeTabletPortraitAndMobileWide = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ minWidth: 414, maxWidth: 1023 });
  return isTabletOrMobile ? null : children;
};

export const TabletPortrait = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};

export const MobileWideAndTabletPortrait = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 414, maxWidth: 1023 });
  return isMobile ? children : null;
};

export const MobileWide = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 414, maxWidth: 767 });
  return isMobile ? children : null;
};

export const MobileNarrow = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 413 });
  return isNotMobile ? children : null;
};

export const Default = ({ children }) => children;
