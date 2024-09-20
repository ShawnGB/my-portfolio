import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FormValues = {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  role: string;
  message: string;
};

export default function ContactComponent() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data: FormValues) =>
    alert(
      `Dear ${data.firstName} this from is still in development pls sent an email to contact@shawnbecker.de`,
    ),
  );

  const inputStyle =
    "block w-full p-2 bg-background dark:bg-darkMode-background border-b-2 border-primary-200 dark:border-darkMode-primary-200 focus:outline-none focus:border-accent-500 dark:focus:border-darkMode-accent-500";

  const labelStyle = "text-lg text-primary-700  mb-2";

  return (
    <div className="w-full flex flex-col align-middle justify-center items-center p-4">
      <form
        onSubmit={onSubmit}
        className="shadow-lg border border-primary-50 dark:border-darkMode-primary-50 md:max-w-2/4 p-16 mx-auto flex flex-col gap-y-4"
        style={{ maxWidth: "500px" }}
      >
        <label htmlFor="firstName" className={labelStyle}>
          <input
            className={inputStyle}
            placeholder={
              errors.firstName
                ? t("contact.form.required.firstName")
                : t("contact.form.placeholder.firstName")
            }
            type="text"
            {...register("firstName", { required: true })}
          />
        </label>

        <label htmlFor="lastName" className={labelStyle}>
          <input
            placeholder={
              errors.lastName
                ? t("contact.form.required.lastName")
                : t("contact.form.placeholder.lastName")
            }
            type="text"
            {...register("lastName", { required: true })}
            className={inputStyle}
          />
        </label>

        <label htmlFor="company" className={labelStyle}>
          <input
            placeholder={t("contact.form.placeholder.company")}
            type="text"
            {...register("company")}
            className={inputStyle}
          />
        </label>

        <label htmlFor="email" className={labelStyle}>
          <input
            placeholder={
              errors.email
                ? t("contact.form.required.email")
                : t("contact.form.placeholder.email")
            }
            type="text"
            {...register("email", { required: true })}
            className={inputStyle}
          />
        </label>

        <div className={labelStyle}>
          <label htmlFor="role" className="block">
            <select
              {...register("role", { required: true })}
              className={inputStyle}
              style={{ appearance: "none" }}
            >
              <option value="Webdevelopment">
                {t("contact.form.placeholder.services.webDev")}
              </option>
              <option value="Product Management">
                {t("contact.form.placeholder.services.product")}
              </option>
              <option value="Consulting">
                {t("contact.form.placeholder.services.consulting")}
              </option>
            </select>
          </label>
        </div>
        {errors.role && (
          <p className="text-accent-500 dark:text-darkMode-accent-500 text-sm mb-2">
            {t("contact.from.required.services")}
          </p>
        )}

        <label htmlFor="message" className={labelStyle}>
          <textarea
            placeholder={
              errors.message
                ? t("contact.form.required.message")
                : t("contact.form.placeholder.message")
            }
            {...register("message", { required: true })}
            className={inputStyle}
            rows={4}
          ></textarea>
        </label>

        <button
          type="submit"
          className="block border border-primary-700 text-primary-700 dark:border-darkMode-primary-700  hover:text-background hover:border-primary-500 dark:hover:text-darkMode-background dark:hover:border-darkMode-primary-500"
        >
          {t("contact.form.placeholder.submit")}
        </button>
      </form>
    </div>
  );
}
