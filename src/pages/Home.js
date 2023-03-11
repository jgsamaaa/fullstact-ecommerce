import axios from '../axios';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import categories from '../categories';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../features/productSlice';
import ProductPreview from '../components/ProductPreview';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get('/products').then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div>
      <img
        src=" https://res.cloudinary.com/dj5wubw5n/image/upload/v1677021006/welcome_to_our_gxakjx.png"
        className="mx-auto mt-3 home-banner"
      />
      <div className="container mt-4 featured-products-container">
        <h2>Lastest products</h2>
        {/* last products here */}
        <div className="flex-wrap d-flex justify-content-center">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: 'right',
              display: 'block',
              textDecoration: 'none',
            }}
          >
            See more {'>>'}
          </Link>
        </div>
      </div>
      {/*  banner */}

      <div>
        <h1 className="mt-3 mb-5">Why Jonel's Brief</h1>
        <div class="ratio ratio-21x9">
          <iframe
            src="https://www.youtube.com/embed/3WRPEhMjQDw"
            allowfullscreen
            title="YouTube video"
          ></iframe>
        </div>
      </div>

      <section class="overflow-hidden text-neutral-700 mt-32">
        <h1 className="pb-10">Jonel's Customer Images</h1>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dj5wubw5n/image/upload/v1677032679/h3s8zmguugpzpmof8wyt.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dj5wubw5n/image/upload/v1677032522/ve3fj5tvzsgg4o4tls1v.jpg"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dj5wubw5n/image/upload/v1677022269/gwgsc8jg4rnd4fhkswjf.jpg"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dj5wubw5n/image/upload/v1677023295/sdzvexe7erbm5bva8yfu.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dj5wubw5n/image/upload/v1677032133/laprfodq1iqh8xwrnsjr.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dj5wubw5n/image/upload/v1677032367/jq9h11vccui8p3kgm6vv.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
