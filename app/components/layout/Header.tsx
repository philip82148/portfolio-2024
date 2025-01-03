export const Header: React.FC = () => {
  return (
    <div className="h-16">
      <header className="fixed z-50 w-full flex justify-between h-16 px-6 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary-content size-10" />
          <div className="text-2xl font-bold">Ryota Sasaki</div>
        </div>
        <div className="flex items-center">
          <button></button>
        </div>
      </header>
    </div>
  );
};
