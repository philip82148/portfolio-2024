export const Header: React.FC = () => {
  return (
    <div className="h-16">
      <header className="fixed w-full flex justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-amber-300 size-10" />
          <div className="text-2xl font-bold">Ryota Sasaki</div>
        </div>
        <div className="flex items-center">
          <button></button>
        </div>
      </header>
    </div>
  );
};
