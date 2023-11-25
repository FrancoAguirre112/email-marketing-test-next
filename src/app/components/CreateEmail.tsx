"use client";

import { SyntheticEvent, useEffect, useRef, useState } from "react";

import EmailEditor, { EditorRef } from "react-email-editor";
import { addToDB, lastID } from "../services/supabase.service";

export const CreateEmail = () => {
  const emailEditorRef = useRef<EditorRef>(null);
  const [currentID, setCurrentID] = useState(0);

  const [email, setEmail] = useState({
    email_id: 0,
    subject: "",
    from: "",
    content: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail({
      ...email,
      email_id: currentID,
      [name]: value,
    });
  };

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    const unlayer = emailEditorRef.current?.editor;

    const exportHtmlPromise = () => {
      return new Promise((resolve) => {
        unlayer?.exportHtml((data) => {
          const { html } = data;
          console.log(html);
          resolve(html);
        });
      });
    };

    // Await the HTML export
    const html = await exportHtmlPromise();

    // Update the email content with the exported HTML
    email.content = html?.toString() || "<p>No email</p>";

    console.log(email);
    
    await addToDB({ table: "emails", dbData: email });

    // Reload page to update values
    window.location.reload();
  };

  useEffect(() => {
    lastID("emails", "email_id").then((count) => {
      setCurrentID(count + 1);
    });
  }, [currentID]);

  return (
    <div className="w-full overflow-hidden">
      <h1>Create Email</h1>
      <h2 className="text-center mb-2">For testing: Can only send from onboarding@resend.dev</h2>
      <EmailEditor ref={emailEditorRef} />
      <div>
        <h2 className="text-center my-2">
          Bug: Email doesnt update if you click Save email too fast. Wait 5
          seconds after editing the mail, then click save email
        </h2>
        <form
          className="flex w-full justify-between gap-5"
          onSubmit={submitForm}
        >
          <input
            className="w-full border-2 border-black px-4 py-2"
            type="text"
            placeholder="Subject"
            name="subject"
            value={email.subject}
            onChange={handleInputChange}
          />
          <input
            className="w-full border-2 border-black px-4 py-2"
            type="text"
            placeholder="From"
            name="from"
            value={email.from}
            onChange={handleInputChange}
          />
          <button
            onClick={submitForm}
            type="submit"
            className="w-full bg-green-500 px-4 py-2 font-bold text-white"
          >
            Save email
          </button>
        </form>
      </div>
    </div>
  );
};
