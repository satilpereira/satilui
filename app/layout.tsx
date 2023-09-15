import '@styles/globals.css';
import { Montserrat } from 'next/font/google';
import Sidebar from '@components/Sidebar/Sidebar';

const montserrat = Montserrat({
  weight: ['200', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'satilui',
  icons: [
    {
      rel: 'icon',
      type: 'image/ico',
      url: '/assets/icons/favicon-light.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/ico',
      url: '/assets/icons/favicon-dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  description: 'generic description',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-BR' className={montserrat.className}>
      <body>
        <main className='bg-darkindigo-700 flex flex-row text-gray-100'>
          <aside className='h-screen border-r'>
            <Sidebar />
          </aside>
          <div className='m-4 w-full rounded-lg p-4'>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
