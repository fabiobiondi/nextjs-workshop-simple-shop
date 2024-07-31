import Divider from '@/components/utilities/divider';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/*HERO*/}
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://res.cloudinary.com/my-notes-demo/image/upload/v1712149829/tutorial-content/video-corsi/ngrx/image-keychains/fb.jpg"
            className="max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <h1 className="text-5xl font-bold">Geek Gadgets</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-secondary">Go to Shop</button>
          </div>
        </div>
      </div>

      <Divider/>

      {/*Stats*/}
      <div className="flex  justify-center">
        <div className="stats shadow stats-vertical md:stats-horizontal">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <div className="stat-title">Clients</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
            </div>
            <div className="stat-title">Products</div>
            <div className="stat-value">1,200</div>
            {/*<div className="stat-desc">↘︎ 90 (14%)</div>*/}
          </div>
        </div>
      </div>

      <Divider/>

      {/*LATEST PRODUCTS*/}
      <h1 className="widget-title">LATEST PRODUCTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/my-notes-demo/image/upload/v1712149831/tutorial-content/video-corsi/ngrx/image-keychains/github-2.jpg"
              alt="Producgt Name"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Producgt Name!</h2>
            <p>Here we can add the product description</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-secondary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/my-notes-demo/image/upload/v1712149827/tutorial-content/video-corsi/ngrx/image-keychains/angular-1.jpg"
              alt="Producgt Name"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Producgt Name!</h2>
            <p>Here we can add the product description</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-secondary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/my-notes-demo/image/upload/v1712149835/tutorial-content/video-corsi/ngrx/image-keychains/react.jpg"
              alt="Producgt Name"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Producgt Name!</h2>
            <p>Here we can add the product description</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-secondary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/my-notes-demo/image/upload/v1712149834/tutorial-content/video-corsi/ngrx/image-keychains/js-2.jpg"
              alt="Producgt Name"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Producgt Name!</h2>
            <p>Here we can add the product description</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-secondary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>


      <Divider/>

      {/*FOOTER: CONTACT FORM*/}

      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Keep in Touch</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">

                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Message</span>
                    {/*<span className="label-text-alt">Max 500 chars</span>*/}
                  </div>
                  <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                  <div className="label">
                    <span className="label-text-alt"></span>
                    <span className="label-text-alt">Max 500 chars</span>
                  </div>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-secondary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </main>
  );
}
