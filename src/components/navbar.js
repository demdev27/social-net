const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Social network</h1>
      <div className="links">
        <a href="/"> Home </a>
        <a href="/signin"> Sign in </a>
        <a href="/signup"> Sign up </a>
      </div>
    </nav>
  );
};

export default Navbar;
