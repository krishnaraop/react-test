import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout">
      <div className="header">
        <Header />
      </div>
      <div className="mainContainer">
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="contentContainer">{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
