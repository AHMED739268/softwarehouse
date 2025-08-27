import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Footer from '../pages/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main > {/* ← Add padding-top */}
        <Outlet />
      </main>
     <Footer />
    </div>
  );
}