import FormField from "@/components/form/FormField";
import { useForm } from "react-hook-form";

type AddressFormData = {
  fullName: string;
  address: string;
  landmark?: string;
  phone: string;
};

const AddAddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>();

  const onSubmit = (data: AddressFormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-8 space-y-7">
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
        id="address"
        label="Detailed Address"
        placeholder="House 12, Road 5, Dhanmondi"
        registerProps={register("address", { required: "Address is required" })}
        error={errors.address}
      />

      <FormField
        id="landmark"
        label="Landmark (Optional)"
        placeholder="Near City College"
        registerProps={register("landmark")}
        error={errors.landmark}
      />

      <FormField
        id="phone"
        label="Phone Number"
        type="tel"
        placeholder="01XXXXXXXXX"
        registerProps={register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{11}$/,
            message: "Invalid phone number",
          },
        })}
        error={errors.phone}
      />

      <button
        type="submit"
        className="w-full h-14 px-4 py-3 rounded-full bg-primary text-dark-primary font-bold"
      >
        Save Address
      </button>
    </form>
  );
};

export default AddAddressForm;
