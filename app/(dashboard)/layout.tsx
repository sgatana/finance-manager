import Header from '../../components/header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-screen w-full'>
      <Header />
      {children}
    </main>
  );
};
export default DashboardLayout;
