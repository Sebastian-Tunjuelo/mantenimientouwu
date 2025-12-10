function Navbar() {
  return (
    <div>
      <nav>
        <a href="/home">Home</a>
        <a href="/catalog">Catalog</a>
        <form action="">
          <input type="text" />
          <button>search</button>
        </form>
        <a href="/myprofile">My profile</a>
        <a href="/myproducts">My products</a>
      </nav>
    </div>
  );
}

export default Navbar;
