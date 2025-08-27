import { useActionState } from "react";
import FormRow from "../../components/FormRow/FormRow";
import styles from "./Shipment.module.css";
import { useAppDispatch } from "../../hooks/storeHooks";
import { changeStep, saveUserShipment } from "../Cart/cartProgressSlice";
import Button from "../../components/Button/Button";

interface IShipmentObj {
  field: string;
  error: string;
}

type TShipmentData = {
  fullName?: IShipmentObj;
  email?: IShipmentObj;
  phoneNumber?: IShipmentObj;
  address?: IShipmentObj;
  city?: IShipmentObj;
  zipCode?: IShipmentObj;
};

type PrevState = {
  errors: Partial<TShipmentData>;
  enteredValues: {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;
  };
};

function Shipment() {
  const dispatch = useAppDispatch();

  function handleSubmit(
    _state: PrevState | { errors: null; enteredValues?: undefined },
    formData: FormData
  ) {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const zipCode = formData.get("zipCode") as string;

    const errors: Partial<TShipmentData> = {};

    if (!fullName.trim() || fullName.trim().length <= 4) {
      errors.fullName = {
        field: "fullName",
        error: "Full Name field is empty or is less than 4 characters",
      };
    }

    if (!email.trim() || !email.includes("@")) {
      errors.email = {
        field: "email",
        error: "Email field is empty or wrong format",
      };
    }

    if (!phoneNumber.trim() || !Number(phoneNumber)) {
      errors.phoneNumber = {
        field: "phoneNumber",
        error: "Phone number field is empty or is not a number",
      };
    }

    if (!address.trim()) {
      errors.address = {
        field: "address",
        error: "Address field is empty",
      };
    }

    if (!city.trim()) {
      errors.city = {
        field: "city",
        error: "City field is empty",
      };
    }

    if (!zipCode.trim()) {
      errors.zipCode = {
        field: "zipCode",
        error: "Zip-code field is empty",
      };
    }

    if (Object.keys(errors).length > 0) {
      return {
        errors,
        enteredValues: {
          fullName,
          email,
          phoneNumber,
          address,
          city,
          zipCode,
        },
      };
    }

    dispatch(
      saveUserShipment({
        fullName,
        email,
        phoneNumber,
        address,
        city,
        zipCode,
      })
    );

    handleChangeStep(2);

    return { errors: null };
  }

  const [formState, formAction, isPending] = useActionState(handleSubmit, {
    errors: null,
  });

  function handleChangeStep(step: number) {
    dispatch(changeStep(step));
  }

  return (
    <div className={styles.shipmentWrapper}>
      <form action={formAction} className={styles.form}>
        <FormRow
          label="Full Name"
          id="fullName"
          defaultValue={formState.enteredValues?.fullName}
          error={formState.errors?.fullName?.error}
        />
        <FormRow
          label="Email"
          id="email"
          type="email"
          defaultValue={formState.enteredValues?.email}
          error={formState.errors?.email?.error}
        />
        <FormRow
          label="Phone Number"
          id="phoneNumber"
          defaultValue={formState.enteredValues?.phoneNumber}
          error={formState.errors?.phoneNumber?.error}
        />
        <FormRow
          label="Address"
          id="address"
          defaultValue={formState.enteredValues?.address}
          error={formState.errors?.address?.error}
        />
        <FormRow
          label="City"
          id="city"
          defaultValue={formState.enteredValues?.city}
          error={formState.errors?.city?.error}
        />
        <FormRow
          label="Zip Code"
          id="zipCode"
          defaultValue={formState.enteredValues?.zipCode}
          error={formState.errors?.zipCode?.error}
        />

        <div className={styles.actions}>
          <Button onClick={() => handleChangeStep(0)} isDisabled={isPending}>
            Go Back
          </Button>
          <Button isDisabled={isPending} type="submit">
            Go to Summary
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Shipment;
