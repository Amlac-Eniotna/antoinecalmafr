"use client";

import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../action/sendMail";

type FieldErrors = {
  name?: string[];
  email?: string[];
  message?: string[];
};

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});
    setFormStatus(null);

    try {
      const result = await sendEmail({ name, email, message });

      if (result.success) {
        setFormStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else if (result.errors) {
        setFieldErrors(result.errors);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-dvh w-full snap-start snap-always flex-col items-center justify-center px-4"
    >
      <div className="mb-6 grid w-full max-w-md grid-cols-3">
        <h2
          id="contact-heading"
          className="col-start-2 m-auto border-b text-center text-xl font-medium text-gray-800"
        >
          Contact
        </h2>
        <div className="flex w-fit gap-1.5 justify-self-end border-t border-b p-1">
          <a
            className="flex items-center justify-center text-gray-800 hover:text-gray-500"
            href="https://github.com/Amlac-Eniotna"
          >
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a
            className="flex items-center justify-center text-gray-800 hover:text-gray-500"
            href="https://www.linkedin.com/in/antoine-calma/"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`mt-1 block w-full rounded-xl border px-3 py-2 ${
              fieldErrors.name ? "border-red-500" : "border-black"
            } `}
          />
          {fieldErrors.name && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.name[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`mt-1 block w-full rounded-xl border px-3 py-2 ${
              fieldErrors.email ? "border-red-500" : "border-black"
            }`}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.email[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className={`mt-1 block w-full rounded-xl rounded-br-none border px-3 py-2 ${
              fieldErrors.message ? "border-red-500" : "border-black"
            } `}
          ></textarea>
          {fieldErrors.message && (
            <p className="mt-1 text-sm text-red-600">
              {fieldErrors.message[0]}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="card relative w-full cursor-pointer overflow-hidden rounded-xl border px-4 py-2 font-medium text-black"
        >
          <span className="relative -z-2">
            {isSubmitting ? "Envoi en cours..." : "Envoyer !"}
          </span>
          <div className="card-invert absolute top-0 left-0 -z-1 size-full backdrop-invert" />
        </button>

        {formStatus === "success" && (
          <p className="text-center text-green-600">Message envoyé !</p>
        )}

        {formStatus === "error" && (
          <p className="text-center text-red-600">
            Une erreur est survenue lors de l{"'"}envoi du message, merci de
            réessayer plus tard.
          </p>
        )}
      </form>
    </section>
  );
};
