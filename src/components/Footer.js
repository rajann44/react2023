function Footer() {
  return (
    <div className="container my-5">
      <footer
        className="text-center text-lg-start"
        style={{backgroundColor: '#2E2EFE'}}>
        <div className="container d-flex justify-content-center py-3">
          <img src="https://madewithreactjs.com/images/powered-madewithreactjs--white.png" className="powered-by-react mx-2" alt="rajan chaudhary react"
          style={{ width: "195px", height: "75px"}}/>
        </div>
        <div
          className="text-center text-white p-3"
          style={{backgroundColor: '#rgba(0, 0, 0, 0.2)'}}>
          © 2023 Copyright:
          <a className="text-white" href="https://rajan-chaudhary.com/">
            Rajan-Chaudhary.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
