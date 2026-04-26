const Header = () => {
  return (
    <div className="flex flex-row gap-2 p-4 items-center justify-center border-b border-main-border">
      <p className="text-2xl sm:text-4xl font-black tracking-tighter bg-linear-to-r from-red-500 via-red-300 to-red-500 bg-clip-text text-transparent">
        Kanban Board
      </p>
      <p>•</p>
      <p className="text-2xl sm:text-4xl italic">かんばん</p>
    </div>
  );
};

export default Header;
