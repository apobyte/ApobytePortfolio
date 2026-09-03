import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="form-status">
        Thanks — this starter form is client-side only. Wire it to an API,
        Formspree, or your email service when you are ready.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <button className="button button-cta" type="submit">
        Send message
      </button>
    </form>
  );
}
