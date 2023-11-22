import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
            <Link to='/' className='brand'>Clickshoes</Link>
          </div>

      {/* Links de navegação do cabeçalho */}
          <nav className='nav nav-pills'>
            <NavLink to='/' 
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Sobre</NavLink>
            <NavLink to='products'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Produtos</NavLink>
            <NavLink to='contatos'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Contatos</NavLink>
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header