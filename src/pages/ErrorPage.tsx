import errorImage from '@/app/assets/images/error.png';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className={'w-full h-screen flex items-center justify-center'}>
      <div className={'flex flex-col text-center gap-[8px]'}>
        <h1 className={'text-7xl'}>Упс!</h1>
        <p className={'text-5xl'}>Страница не найдена</p>
        <img src={errorImage} alt='Error' />
        <div>
          <Link
            to={'cabinet'}
            className={
              'border border-blue-600 text-blue-500 py-1.5 px-2 rounded-[8px] w-[200px] transition-all ease-in-out duration-300 active:transform active:scale-90'
            }
          >
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
}
