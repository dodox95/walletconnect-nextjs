// components/Navbar.tsx
import WalletConnect from './WalletConnect'; // Upewnij się, że ścieżka do importu jest poprawna

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">EcoWay DEX</div>
        <WalletConnect />
      </div>
    </nav>
  );
}

export default Navbar;
