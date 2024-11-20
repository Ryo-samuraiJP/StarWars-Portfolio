import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema, TContactFormSchema } from "./lib/types";
import Spotlight, { SpotlightCard } from "./components/ui/spotlight-card";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { Meteors } from "./components/ui/meteros";
import { ImRocket } from "react-icons/im";

const ReactHookForm = () => {
  // Setup and configure contact form validation and submission
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactFormSchema>({
    // TContactFormSchema is inferred from contactFormSchema
    resolver: zodResolver(contactFormSchema),
  });

  // Handle form submission and reset form after submission
  const onSubmit = async (data: TContactFormSchema) => {
    console.log(data);
    // Submit data to server
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <Spotlight className="mx-[20rem]">
      <SpotlightCard>
        <Meteors number={15} />
        <form
          onSubmit={handleSubmit(onSubmit)} // onSubmit will trigger validation
          className="flex flex-col gap-y-[1.5rem] py-[2rem] bg-slate-900"
        >
          <div className="flex flex-row gap-x-[0.5rem] items-center justify-center text-[1.25rem]">
            <ImRocket />
            <p>Submit your inquiry here</p>
          </div>
          <input
            type="text"
            placeholder="Name"
            {...register("name")} // register will trigger validation on change
            className="rounded-[1rem] p-[1rem] mx-[5rem] bg-transparent border border-slate-500"
          />
          {/* Display error message if name is invalid */}
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
          {/* Display error message if email is invalid */}
          {errors.email && (
            <span className="text-left text-sm font-medium px-[6rem] -my-[1rem] text-red-600">
              {`${errors.email.message}`}
            </span>
          )}
          <input
            type="subject"
            placeholder="Subject"
            {...register("subject")}
            className="rounded-[1rem] p-[1rem] mx-[5rem] bg-transparent border border-slate-500"
          />
          {/* Display error message if subject is invalid */}
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
          {/* Display error message if message is invalid */}
          {errors.message && (
            <span className="text-left text-sm font-medium px-[6rem] -my-[1rem] text-red-600">
              {`${errors.message.message}`}
            </span>
          )}
          <button
            disabled={isSubmitting} // Disable button while submitting form data to server
            type="submit"
            className="p-[0.75rem] my-[0.75rem] mx-[5rem] rounded-md bg-slate-500 text-white"
          >
            Submit
          </button>
          <hr className="mx-[2.5rem] bg-slate-600 border-0 h-px" />
          <p className="text-slate-500 mb-[0.5rem]">
            or reach out to me through LinkedIn or email
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
