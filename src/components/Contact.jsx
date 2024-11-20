import { useState } from "react";
import { Element } from "react-scroll";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "b5b02f6c-4d8a-4401-a4c8-16c6b35050f9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setSubmitResult({
          success: true,
          message: "Message envoyé avec succès !",
        });
      } else {
        setSubmitResult({
          success: false,
          message: "Erreur lors de l'envoi du message.",
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto my-6 grid h-auto w-full gap-8 rounded-lg bg-zinc-100 p-8 px-4 pt-4 ring-2 ring-sky-500 ring-offset-4 ring-offset-inherit md:w-3/4 md:grid-cols-[1fr,auto] dark:bg-regal-zinc-200 dark:ring-atlantis dark:ring-offset-regal-zinc-300">
      <div className="space-y-6">
        <Element name="contact">
          <h2 className="max-w-max text-nowrap bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent dark:from-atlantis dark:to-lime-800">
            • Contact
          </h2>
        </Element>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              required
              className="rounded border px-4 py-2 text-white transition-colors placeholder:text-zinc-500 focus:border-sky-700 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-atlantis"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              className="rounded border px-4 py-2 text-white transition-colors placeholder:text-zinc-500 focus:border-sky-700 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-atlantis"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="rounded border px-4 py-2 text-white transition-colors placeholder:text-zinc-500 focus:border-sky-700 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-atlantis"
            />
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              className="rounded border px-4 py-2 text-white transition-colors placeholder:text-zinc-500 focus:border-sky-700 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-atlantis"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            required
            rows={6}
            className="w-full resize-none rounded border px-4 py-2 text-white transition-colors placeholder:text-zinc-500 focus:border-sky-700 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-atlantis"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded bg-zinc-600 px-6 py-2 font-medium text-zinc-50 ring-1 ring-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="mr-2 size-5 animate-spin text-sky-700 dark:text-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              "Envoyer le message"
            )}
          </button>

          {submitResult && (
            <p
              className={`text-center ${submitResult.success ? "text-sky-700 dark:text-green-500" : "text-red-500"}`}
            >
              {submitResult.message}
            </p>
          )}
        </form>
      </div>

      <div className="flex flex-wrap place-content-around gap-5 self-center text-black md:block md:space-y-6 dark:text-zinc-400">
        <div className="space-y-1">
          <p className="font-medium text-green-700 dark:text-pink-400">
            Numéro de téléphone
          </p>
          <p>06 73 72 18 80</p>
        </div>

        <div className="space-y-1">
          <p className="font-medium text-green-700 dark:text-pink-400">Email</p>
          <p>dancoinathan@gmail.com</p>
        </div>

        <div className="space-y-1">
          <p className="font-medium text-green-700 dark:text-pink-400">
            Adresse
          </p>
          <p>885 Avenue Julien Panchot, Perpignan</p>
        </div>
      </div>
    </div>
  );
}
