"use client";

import FormField from "@/components/form/FormField";
import { useForm } from "react-hook-form";

type ProfileDetailsFormData = {
  fullName: string;
  email: string;
  landmark?: string;
  phone: string;
};

const ProfileDetailsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileDetailsFormData>();

  const onSubmit = (data: ProfileDetailsFormData) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 py-8 border rounded-3xl"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <FormField
            id="fullName"
            label="Full Name"
            placeholder="John Doe"
            registerProps={register("fullName", {
              required: "Full Name is required",
            })}
            error={errors.fullName}
          />

          <FormField
            id="email"
            label="Email"
            placeholder="example@example.com"
            registerProps={register("email", {
              required: "Email is required",
            })}
            error={errors.email}
          />
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
    </form>
  );
};

export default ProfileDetailsPage;
