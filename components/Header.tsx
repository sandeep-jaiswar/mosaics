const Header = () => {
  return (
    <header className="shadow fixed w-full z-50 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Mosaics</h1>
        <nav className="flex justify-between">
          <ul className="flex space-x-5">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
          </ul>
          <ul className="flex space-x-5">
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
