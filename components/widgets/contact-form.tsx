'use client'
import ContactFormButton from '@/components/widgets/contact-form-button';
import { sendMessageAction } from '@/services/actions/send-message.action';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
  status: 0
}
export default function ContactForm () {

  const [state, formAction] = useFormState(sendMessageAction, initialState);

  const emailError = state.status === 404;
  const emailSent = state.status === 200;

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Keep in Touch</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>

        <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl ">

          <form className="card-body" action={formAction}>
            {emailSent && <div className="alert alert-success">Message Sent</div>}
            {emailError  && <div className="alert alert-error">Error. Try Later</div>}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" placeholder="email"
                name="email"
                className="input input-bordered" required/>
            </div>
            <div className="form-control">

              <label className="form-control">
                <div className="label">
                  <span className="label-text">Message</span>
                </div>
                <textarea className="textarea textarea-bordered h-24"
                          name="message"
                          placeholder="Your message here"></textarea>
                <div className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt">Max 500 chars</span>
                </div>
              </label>
            </div>

            <div className="form-control mt-6">
              <ContactFormButton sent={emailSent}/>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}


