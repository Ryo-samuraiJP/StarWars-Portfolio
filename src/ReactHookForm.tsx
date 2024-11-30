import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { contactFormSchema, TContactFormSchema } from "./lib/types";
import sendEmailWithEmailjs from "./lib/emailjs";
import Spotlight, { SpotlightCard } from "./components/ui/spotlight-card";
import { ImRocket } from "react-icons/im";
import validateEmail from "./lib/emailValidator";
import { MdError, MdCheckCircle } from "react-icons/md";
import { CiLinkedin, CiMail } from "react-icons/ci";
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

    // Validate email address using emailValidator function before sending the email with EmailJS
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
    <Spotlight className="mx-[20rem] relative">
      <div className="absolute z-10 inset-0 pointer-events-none">
        <ParticlesAnimation />
      </div>
      <SpotlightCard>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col gap-y-[1.5rem] py-[2rem] pb-[2.75rem] border rounded-[1.5em]
          border-[rgba(75,30,133,0.5)] bg-[linear-gradient(225deg,rgba(75,30,133,0.8),rgb(0,0,0))]"
        >
          <div className="flex flex-row gap-x-[0.5rem] items-center justify-center mt-[0.5rem] text-[1.5rem]">
            <ImRocket />
            <p>Submit the contact form</p>
          </div>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="rounded-[1rem] p-[1rem] mx-[5rem] bg-transparent border border-slate-500"
          />
          {/* Display error message if name is not provided */}
          {errors.name && (
            <span className="text-left text-sm font-medium px-[6rem] -my-[1rem] text-red-600">
              {`${errors.name.message}`}
            </span>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="rounded-[1rem] p-[1rem] mx-[5rem] bg-transparent border border-slate-500"
          />
          {/* Display error message if email is not provided */}
          {errors.email && (
            <span className="text-left text-sm font-medium px-[6rem] -my-[1rem] text-red-600">
              {`${errors.email.message}`}
            </span>
          )}
          {/* Display email validation status */}
          {emailStatus && (
            <span
              className={`text-left text-sm font-medium px-[6rem] -my-[1rem] ${emailStatus.color}`}
            >
              <div className="flex flex-row gap-x-[0.25rem] items-center">
                {emailStatus.color === "text-red-600" ? (
                  // Display error icon if email is invalid
                  <MdError className="text-[1.125rem]" />
                ) : (
                  // Display check icon if email is valid
                  <MdCheckCircle className="text-[1.125rem]" />
                )}
                {emailStatus.message}
              </div>
            </span>
          )}
          <input
            type="subject"
            placeholder="Subject"
            {...register("subject")}
            className="rounded-[1rem] p-[1rem] mx-[5rem] bg-transparent border border-slate-500"
          />
          {/* Display error message if subject is not provided */}
          {errors.subject && (
            <span className="text-left text-sm font-medium px-[6rem] -my-[1rem] text-red-600">
              {`${errors.subject.message}`}
            </span>
          )}
          <textarea
            placeholder="Message"
            {...register("message")}
            className="rounded-[1rem] p-[1rem] pb-[6rem] mx-[5rem] resize-none bg-transparent border border-slate-500"
          />
          {/* Display error message if message is not provided */}
          {errors.message && (
            <span className="text-left text-sm font-medium px-[6rem] -my-[1rem] text-red-600">
              {`${errors.message.message}`}
            </span>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            className="relative z-10 p-[0.75rem] mt-[0.75rem] mx-[5rem] rounded-lg border border-slate-500 bg-transparent text-slate-400 hover:bg-slate-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
          {/* Display form submission status */}
          {formStatus && (
            <span
              className={`text-left text-sm font-medium px-[6rem] -my-[1rem] ${formStatus.color}`}
            >
              <div className="flex flex-row gap-x-[0.25rem] items-center">
                {formStatus.color === "text-red-600" ? (
                  // Display error icon if form submission failed
                  <MdError className="text-[1.125rem]" />
                ) : (
                  // Display check icon if form submission succeeded
                  <MdCheckCircle className="text-[1.125rem]" />
                )}
                {formStatus.message}
              </div>
            </span>
          )}
          <hr className="mx-[2.5rem] bg-slate-600 border-0 h-px" />
          <p className="text-slate-500 mb-[0.5rem]">
            Or reach out to me through LinkedIn or email
          </p>
          <div className="flex flex-col gap-y-[1rem] items-center text-slate-500">
            <a
              href="https://linkedin.com/in/ryoichihomma/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-x-[0.25rem] items-center hover:text-white hover:underline transition-all duration-300 ease-in-out"
            >
              <CiLinkedin className="text-[1.75rem]" />
              <span>linkedin.com/in/ryoichihomma/</span>
            </a>
            <a
              href="mailto:r.homma.inbox@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-x-1 items-center hover:text-white hover:underline transition-all duration-300 ease-in-out"
            >
              <CiMail className="text-[1.5rem]" />
              <span>r.homma.inbox@gmail.com</span>
            </a>
          </div>
        </form>
      </SpotlightCard>
    </Spotlight>
  );
};

export default ReactHookForm;
