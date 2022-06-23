import './menu-style.sass';

export const Menu = () => {
  const links = ['collesctions', 'blog', 'about', 'contacts'];

  return (
    <nav className='menu'>
      <ul className='menu_list'>
        {
          links.map(link => <li className='menu_item'>
                              <a href='#' className='menu_link'>{link}</a>
                            </li>)
        }
      </ul>
    </nav>
  )
};
