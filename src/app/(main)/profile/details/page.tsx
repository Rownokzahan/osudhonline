const ProfileDetailsPage = () => {
  return (
    <div className="px-6 py-8 border rounded-3xl">
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="grid">
            <label
              htmlFor="name"
              className="text-sm text-dark-light font-medium"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="pb-1 border-b-2 focus-visible:border-b-secondary outline-0 duration-300"
            />
          </div>

          <div className="grid">
            <label
              htmlFor="name"
              className="text-sm text-dark-light font-medium"
            >
              Email
            </label>
            <input
              id="name"
              type="text"
              className="pb-1 border-b-2 focus-visible:border-b-secondary outline-0 duration-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="grid text-dark-light/50!">
            <label
              htmlFor="name"
              className="text-sm text-dark-light font-medium"
            >
              Mobile Number
            </label>

            <input
              id="name"
              readOnly
              type="text"
              placeholder="8697741594"
              className="pb-1 border-b-2 focus-visible:border-b-secondary outline-0 duration-300"
            />
          </div>

          <div className="grid">
            <label
              htmlFor="name"
              className="text-sm text-dark-light font-medium"
            >
              Gender
            </label>
            <input
              id="name"
              type="text"
              className="pb-1 border-b-2 focus-visible:border-b-secondary outline-0 duration-300"
            />
          </div>
        </div>
        <button className="block mx-auto w-5/12 py-3 border rounded-3xl font-bold bg-gray-100 text-secondary hover:text-dark-primary">
          Edit profile
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
