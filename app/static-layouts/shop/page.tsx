const products = [null,null,null,null,null,null,null]

export default function Shop () {
  return <div>

    <h1 className="widget-title">SHOP</h1>
    <div className="grid grid-cols-1 md:grid-cols-3  gap-12">
      {
        products?.map((product, i) => {
          return (
            <div className="card bg-base-100  shadow-xl" key={i}>
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
          )
        })
      }

    </div>
  </div>
}

