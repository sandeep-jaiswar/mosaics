const ProfilePage = () => {
  return (
    <div className="font-[family-name:var(--font-balsamiq-sans)] py-5 max-w-5xl mx-auto">
      <div className="grid grid-cols-5 gap-7 my-20">
        <div className="col-span-1 flex flex-col gap-2">
          <ul className="text-xl">
            <li className="pb-2">Personal</li>
            <li className="pb-2">Orders</li>
          </ul>
        </div>
        <div className="col-span-4">
          <div className="text-xl">Profile Page</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
