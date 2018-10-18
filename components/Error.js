const Error = () => {
  return (
    // main body of 404 page -->
    <div className="notfound-full-width">
      <div className="notfound-table">
        <div className="notfound-tablecell">
          <h1>
            <span>Opps</span>
            Page Not Found!
          </h1>
          <p>
            The link you followed may be broken, or the page may have been
            removed.
          </p>
          <a href="landing.html" className="boxed-btn">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
