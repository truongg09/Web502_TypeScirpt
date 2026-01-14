import { Outlet } from 'react-router-dom'

function AdminLayout() {
  // check token (hoac user)
  return (
    <div>
      AdminLayout
      {/* slot */}
      <Outlet />
    </div>
  )
}

export default AdminLayout