import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const AdminLayout: React.FC = (): JSX.Element => {
    return (
        <div>
            <Header />
            Admin Dashboard
            <Outlet />
            <Footer />
        </div>
    )
}

export default AdminLayout
