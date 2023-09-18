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
      <body className='flex h-full min-h-screen flex-col bg-gradient-radial from-darkindigo-800 to-zinc-900 bg-fixed bg-no-repeat text-lg text-gray-100'>
        <Navbar />
        {/* layout-hack */}
        <div className='h-20 w-full'></div>
        <aside className='minus-nav fixed top-20 w-64 border-r border-electric-700'>
          <Sidebar />
        </aside>
        <main className='grid h-screen grid-cols-main'>
          <div className='w-64'></div>
          <div className='rounded-lg p-4 pt-16'>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
