import '@styles/globals.css';
import { Montserrat } from 'next/font/google';
import Sidebar from '@components/Sidebar/Sidebar';
import Navbar from '@components/Navbar/Navbar';

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
      <body className='from-darkindigo-800 flex h-full min-h-screen flex-col bg-gradient-radial to-zinc-900 text-lg text-gray-100'>
        <Navbar />
        <main className='grid-cols-main grid h-screen'>
          <aside className='border-electric-700 h-full w-fit border-r'>
            <Sidebar />
          </aside>
          <div className='m-4 rounded-lg p-4'>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
