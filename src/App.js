import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './components/ProtectedRoute';
import DashboardAdminPage from './pages/admin/DashboardAdminPage';
import PesananAdminPage from './pages/admin/PesananAdminPage';
import KategoriAdminPage from './pages/admin/KategoriAdminPage';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import ProdukAdminCreatePage from './pages/admin/ProdukAdminCreatePage';
import ProdukAdminDetailPage from './pages/admin/ProdukAdminDetailPage';
import ProdukAdminEditPage from './pages/admin/ProdukAdminEditPage';
import ProdukAdminListPage from './pages/admin/ProdukAdminListPage';
import PenggunaAdminPage from './pages/admin/PenggunaAdminPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <DashboardAdminPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/pesanan" element={
          <ProtectedRoute>
            <PesananAdminPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/kategori" element={
          <ProtectedRoute>
            <KategoriAdminPage />
          </ProtectedRoute>
        } />

        <Route path="/admin/produk" element={
          <ProtectedRoute>
            <ProdukAdminListPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/produk/create" element={
          <ProtectedRoute>
            <ProdukAdminCreatePage />
          </ProtectedRoute>
        } />
        <Route path="/admin/produk/detail/:id" element={
          <ProtectedRoute>
            <ProdukAdminDetailPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/produk/edit/:id" element={
          <ProtectedRoute>
            <ProdukAdminEditPage />
          </ProtectedRoute>
        } />

        <Route path="/admin/pengguna" element={
          <ProtectedRoute>
            <PenggunaAdminPage/>
          </ProtectedRoute>
        } />
        </Routes>
    </div>
  )
}

export default App;
