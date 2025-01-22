import { Icon } from '@iconify/react';

export default function Mobile() {
  const items = [
    { link: '/cabinet/records', icon: 'vaadin:records' },
    { link: '/cabinet/sales', icon: 'carbon:sales-ops' },
    { link: '/cabinet/finance', icon: 'material-symbols:finance-mode-rounded' },
    { link: '/cabinet/warehouse', icon: 'prime:warehouse' },
    { link: '/cabinet/clients', icon: 'weui:contacts-outlined' },
    { link: '/cabinet/analytics', icon: 'clarity:analytics-line' },
  ];
  return (
    <>
      <div className={'flex items-end w-full h-screen'}>
        <ul
          className={
            'w-full flex justify-between py-1 px-8 xs:px-3 border-t pt-2 border-gray-300'
          }
        >
          {items.map((item, idx) => {
            return (
              <li key={idx}>
                <a href={item.link}>
                  <Icon icon={item.icon} className={'icon-lg'} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
