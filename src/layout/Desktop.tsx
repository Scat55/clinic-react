import { Icon } from '@iconify/react';

export default function Desktop() {
  const items = [
    {
      title: 'Записи',
      link: '/cabinet/records',
      icon: 'vaadin:records',
    },
    { title: 'Продажи', link: '/cabinet/sales', icon: 'carbon:sales-ops' },
    {
      title: 'Финансы',
      link: '/cabinet/finance',
      icon: 'material-symbols:finance-mode-rounded',
    },
    { title: 'Склад', link: '/cabinet/warehouse', icon: 'prime:warehouse' },
    {
      title: 'Клиенты',
      link: '/cabinet/clients',
      icon: 'weui:contacts-outlined',
    },
    {
      title: 'Аналитика',
      link: '/cabinet/analytics',
      icon: 'clarity:analytics-line',
    },
  ];

  return (
    <div className={'flex px-8 '}>
      <div className={'flex flex-col mt-2 gap-2 border-r border-gray-200 h-screen w-[300px]'}>
        <h1 className={'text-2xl'}>Клиника доверие</h1>
        <nav>
          <ul className={'flex flex-col gap-2 mt-5'}>
            {items.map((item, idx) => {
              return (
                <li className={'flex items-center gap-2 text-xl'} key={idx}>
                  <Icon icon={item.icon} />
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
