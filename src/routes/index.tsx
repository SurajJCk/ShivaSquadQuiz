import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import MobileHome from '../components/MobileHome';
import DesktopHome from '../components/DesktopHome';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileHome /> : <DesktopHome />;
}