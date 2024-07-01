import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>

      <div className="div container  mt-5 mb-5">
        <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9851416d529a17c6fdc8249c9e7625d8f7cae05d0bb8ca76f8ad913b8ba94fff?apiKey=3981a1a580e04c7d8499fa871d6cc3d2&"
            className="img"
          />
          <div className="div-3">404</div>
          <div className="div-4">Page not found!</div>
          <div className="div-5">
            Sorry, it appears that the page you're trying to
            <br />
            find has gone on a coffee break.
          </div>
          <div className="header-btn d-inline-block">
            <Link to="/" className="button-round-primary mt-5">BACK HOME</Link>
          </div>
        </div>
      </div>{" "}
      <style jsx>{`
        .div {
          justify-content: center;
          align-items: center;
          border-radius: 14.04px;
          mix-blend-mode: multiply;
          box-shadow: 0px 0px 84.24px 0px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          display: flex;
          max-width: 702px;
          font-weight: 700;
          text-align: center;
          line-height: 100%;
          padding: 80px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          margin-top: 10px;
          width: 100%;
          max-width: 488px;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 70px;
        }
        .div-3 {
          color: #f94c30;
          letter-spacing: -1.4px;
          margin-top: 48px;
          font: 97px Be Vietnam Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-3 {
            margin-top: 40px;
            font-size: 40px;
          }
        }
        .div-4 {
          color: #292929;
          letter-spacing: -1.68px;
          margin-top: 54px;
          font: 44px/130% Be Vietnam Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            margin-top: 40px;
          }
        }
        .div-5 {
          color: #868686;
          align-self: stretch;
          margin-top: 40px;
          font: 400 22px/34px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
          }
        }
        .div-6 {
          justify-content: center;
          border-radius: 7.02px;
          background-color: #f94c30;
          margin-top: 36px;
          margin-bottom: 20px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          padding: 15px 36px;
          font: 500 17px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-6 {
            padding: 10 20px;
          }
        }
      `}</style>{" "}


    </>
  )
}

export default Error;
