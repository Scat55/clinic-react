import Desktop from '@/layout/Desktop.tsx';
import Mobile from '@/layout/Mobile.tsx';
import { Outlet } from 'react-router-dom';

export default function Cabinet() {
  return (
    <div>
      <div className={'xs:hidden md:flex'}>
        <Desktop />
      </div>
      <div className={'xs:flex md:hidden'}>
        <Mobile />
      </div>
      <Outlet />
    </div>
  );
}
