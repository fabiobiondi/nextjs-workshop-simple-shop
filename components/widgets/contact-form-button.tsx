"use client";

import Loader from '@/components/utilities/loader';
import { useFormStatus } from "react-dom";

interface NewsletterButton {
  sent: boolean
}

export default function ContactFormButton(props: NewsletterButton) {
  const status = useFormStatus()
  return <>
    <button
      className="btn btn-secondary"
      disabled={props.sent}
    >
      Send Message
      { status.pending && <Loader/> }
    </button>
  </>
}
