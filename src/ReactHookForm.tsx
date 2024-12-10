import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { contactFormSchema, TContactFormSchema } from "./lib/types";
import sendEmailWithEmailjs from "./lib/emailjs";
import Spotlight, { SpotlightCard } from "./components/ui/spotlight-card";
import { ImRocket } from "react-icons/im";
import validateEmail from "./lib/emailValidator";
import { MdError, MdCheckCircle } from "react-icons/md";
import ParticlesAnimation from "./components/ui/particles-animation";

const ReactHookForm = () => {
  // State for email validation status
  const [emailStatus, setEmailStatus] = useState<{
    message: string;
    color: string;
  } | null>(null);

  // State for form submission status
  const [formStatus, setFormStatus] = useState<{
    message: string;
    color: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactFormSchema>(
    // Use zodResolver to validate form data
    {
      resolver: zodResolver(contactFormSchema),
    }
  );

  const onSubmit = async (data: TContactFormSchema) => {
    setEmailStatus(null);
    setFormStatus(null);

    // Validate email address before sending the email with EmailJS
    const isEmailValid = await validateEmail(data.email);
    if (!isEmailValid) {
      setEmailStatus({
        message: "Email address is invalid",
        color: "text-red-600",
      });
      return;
    } else {
      setEmailStatus({
        message: "Email address is valid",
        color: "text-green-600",
      });
    }

    // Send email with EmailJS and handle success/failure
    await sendEmailWithEmailjs(data)
      .then(() => {
        setFormStatus({
          message: "Submitted the form successfully!",
          color: "text-green-600",
        });

        // Reset the form fields, emailStatus, and formStatus ONLY after a delay of successful form submission
        setTimeout(() => {
          setEmailStatus(null);
          setFormStatus(null);
          reset();
        }, 5000);
      })
      .catch(() => {
        setFormStatus({
          message: "Failed to submit the form. Please try again",
          color: "text-red-600",
        });
      });
  };

  return (
    <Spotlight className="relative md:-mx-5 lg:mx-0">
      <div className="absolute z-10 inset-0 pointer-events-none">
        <ParticlesAnimation />
      </div>
      <SpotlightCard>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col gap-y-6 py-8 pb-11 md:pb-14 lg:pb-20 border rounded-3xl
          border-[rgba(75,30,133,0.5)] bg-[linear-gradient(225deg,rgba(75,30,133,0.8),rgb(0,0,0))]"
        >
          <div className="flex flex-row gap-x-2 items-center justify-center mt-2 text-base md:text-lg lg:text-xl">
            <ImRocket />
            <p className="font-thin">SUBMIT CONTACT FORM</p>
          </div>
          <input
            type="text"
            placeholder="Name*"
            {...register("name")}
            className="rounded-lg md:rounded-xl p-2 md:p-2.5 mx-7 md:mx-12 bg-transparent border border-slate-500 text-xs md:text-sm lg:text-base"
          />
          {/* Display error message if name is not provided */}
          {errors.name && (
            <div className="flex flex-row items-center gap-1 text-left text-xs lg:text-sm font-medium px-24 -mx-16 md:-mx-10 -my-4 text-red-600">
              <MdError />
              {`${errors.name.message}`}
            </div>
          )}
          <input
            type="email"
            placeholder="Email Address*"
            {...register("email")}
            className="rounded-lg md:rounded-xl p-2 md:p-2.5 mx-7 md:mx-12 bg-transparent border border-slate-500 text-xs md:text-sm lg:text-base"
          />
          {/* Display error message if email is not provided */}
          {errors.email && (
            <div className="flex flex-row items-center gap-1 text-left text-xs lg:text-sm font-medium px-24 -mx-16 md:-mx-10 -my-4 text-red-600">
              <MdError />
              {`${errors.email.message}`}
            </div>
          )}
          {/* Display email validation status */}
          {emailStatus && (
            <span
              className={`text-left text-xs lg:text-sm font-medium px-24 -mx-16 md:-mx-10 -my-4 ${emailStatus.color}`}
            >
              <div className="flex flex-row gap-x-1 items-center">
                {emailStatus.color === "text-red-600" ? (
                  // Display error icon if email is invalid
                  <MdError />
                ) : (
                  // Display check icon if email is valid
                  <MdCheckCircle />
                )}
                {emailStatus.message}
              </div>
            </span>
          )}
          <input
            type="subject"
            placeholder="Subject*"
            {...register("subject")}
            className="rounded-lg md:rounded-xl p-2 md:p-2.5 mx-7 md:mx-12 bg-transparent border border-slate-500 text-xs md:text-sm lg:text-base"
          />
          {/* Display error message if subject is not provided */}
          {errors.subject && (
            <div className="flex flex-row items-center gap-1 text-left text-xs lg:text-sm font-medium px-24 -mx-16 md:-mx-10 -my-4 text-red-600">
              <MdError />
              {`${errors.subject.message}`}
            </div>
          )}
          <textarea
            placeholder="Message*"
            {...register("message")}
            className="rounded-lg md:rounded-xl p-2 md:p-2.5 pb-20 md:pb-24 mx-7 md:mx-12 resize-none bg-transparent border border-slate-500 text-xs md:text-sm lg:text-base"
          />
          {/* Display error message if message is not provided */}
          {errors.message && (
            <div className="flex flex-row items-center gap-1 text-left text-xs lg:text-sm font-medium px-24 -mx-16 md:-mx-10 -my-[1rem] text-red-600">
              <MdError />
              {`${errors.message.message}`}
            </div>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            className="relative z-10 p-2 md:p-2 mx-7 md:mx-12 rounded-lg md:rounded-xl border border-slate-500 bg-transparent text-slate-400 
              text-xs md:text-sm lg:text-base hover:bg-slate-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
          {/* Display form submission status */}
          {formStatus && (
            <span
              className={`text-left text-xs lg:text-sm font-medium px-24 -mx-16 md:-mx-10 -my-4 ${formStatus.color}`}
            >
              <div className="flex flex-row gap-x-1 items-center">
                {formStatus.color === "text-red-600" ? (
                  // Display error icon if form submission failed
                  <MdError />
                ) : (
                  // Display check icon if form submission succeeded
                  <MdCheckCircle />
                )}
                {formStatus.message}
              </div>
            </span>
          )}
        </form>
      </SpotlightCard>
    </Spotlight>
  );
};

export default ReactHookForm;
