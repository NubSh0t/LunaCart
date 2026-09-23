type HeaderProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-wrap">
          <div className="logo-badge">N</div>
          <span>Lunar Cart</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#features">Features</a>
          <a href="#reviews">Reviews</a>
          <a href="#support">Support</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            <span className="theme-icon">{theme === 'dark' ? '☀' : '☾'}</span>
            <span className="theme-icon moon">{theme === 'dark' ? '☾' : '☀'}</span>
          </button>
          <button className="ghost-btn">Sign in</button>
          <button className="nav-button">Cart (2)</button>
        </div>
      </div>
    </header>
  );
}
