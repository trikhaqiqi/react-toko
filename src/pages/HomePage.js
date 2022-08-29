import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
            <div className="header-3-3 container-xxl mx-auto p-0 position-relative" style={{fontFamily: '"Poppins", sans-serif'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div href="#">
                    <h3>Tokoku</h3>
                {/* <img style={{marginRight: '0.75rem'}} src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header3/Header-3-6.png" alt="" /> */}
                </div>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="modal" data-bs-target="#targetModal-item">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="modal-item modal fade" id="targetModal-item" tabIndex={-1} role="dialog" aria-labelledby="targetModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content bg-white border-0">
                    <div className="modal-header border-0" style={{padding: '2rem', paddingBottom: 0}}>
                        <a className="modal-title" id="targetModalLabel">
                        <img style={{marginTop: '0.5rem'}} src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header3/Header-3-6.png" alt="" />
                        </a>
                        <button type="button" className="close btn-close text-black" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body" style={{padding: '2rem', paddingTop: 0, paddingBottom: 0}}>
                        <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                        <li className="nav-item active position-relative">
                            <a className="nav-link main" style={{color: '#243142'}} href="#">Home</a>
                        </li>
                        <li className="nav-item position-relative">
                            <a className="nav-link" href="#">Feature</a>
                        </li>
                        <li className="nav-item position-relative">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item position-relative">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item position-relative">
                            <a className="nav-link" data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapse">
                            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.85 1.69346C3.5304 1.69346 1.65 3.57386 1.65 5.89346C1.65 8.21305 3.5304 10.0935 5.85 10.0935C8.1696 10.0935 10.05 8.21305 10.05 5.89346C10.05 3.57386 8.1696 1.69346 5.85 1.69346ZM0.25 5.89346C0.25 2.80066 2.75721 0.293457 5.85 0.293457C8.94279 0.293457 11.45 2.80066 11.45 5.89346C11.45 8.98625 8.94279 11.4935 5.85 11.4935C2.75721 11.4935 0.25 8.98625 0.25 5.89346Z" fill="#8B9CAF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.85503 8.89848C9.12839 8.62512 9.57161 8.62512 9.84497 8.89848L14.045 13.0985C14.3183 13.3718 14.3183 13.8151 14.045 14.0884C13.7716 14.3618 13.3284 14.3618 13.055 14.0884L8.85503 9.88843C8.58166 9.61506 8.58166 9.17185 8.85503 8.89848Z" fill="#8B9CAF" />
                            </svg>
                            </a>
                            <form method className="collapse position-absolute form center-search border-0" id="collapse">
                            <div className="d-flex">
                                <input type="text" className="rounded-full border-0 focus:outline-none" placeholder="Search" />
                                <button className="btn" type="button">
                                <svg style={{width: '20px', height: '20px'}} data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapse" fill="none" stroke="#273B56" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                </button>
                            </div>
                            </form>
                        </li>
                        </ul>
                    </div>
                    <div className="modal-footer border-0" style={{padding: '2rem', paddingTop: '0.75rem'}}>
                        {/* <button className="btn btn-default btn-no-fill" >Sign In</button> */}
                        {/* <button className="btn btn-fill text-black">Sign Up</button> */}

                        
                    </div>
                    </div>
                </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo">
                <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                    <li className="nav-item active position-relative">
                    <a className="nav-link main=" style={{color: '#243142'}} href="#">Home</a>
                    </li>
                    <li className="nav-item position-relative">
                    <a className="nav-link" href="#">Feature</a>
                    </li>
                    <li className="nav-item position-relative">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item position-relative">
                    <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item my-auto">
                    <a className="nav-link" data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapse">
                        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.85 1.69346C3.5304 1.69346 1.65 3.57386 1.65 5.89346C1.65 8.21305 3.5304 10.0935 5.85 10.0935C8.1696 10.0935 10.05 8.21305 10.05 5.89346C10.05 3.57386 8.1696 1.69346 5.85 1.69346ZM0.25 5.89346C0.25 2.80066 2.75721 0.293457 5.85 0.293457C8.94279 0.293457 11.45 2.80066 11.45 5.89346C11.45 8.98625 8.94279 11.4935 5.85 11.4935C2.75721 11.4935 0.25 8.98625 0.25 5.89346Z" fill="#8B9CAF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.85503 8.89848C9.12839 8.62512 9.57161 8.62512 9.84497 8.89848L14.045 13.0985C14.3183 13.3718 14.3183 13.8151 14.045 14.0884C13.7716 14.3618 13.3284 14.3618 13.055 14.0884L8.85503 9.88843C8.58166 9.61506 8.58166 9.17185 8.85503 8.89848Z" fill="#8B9CAF" />
                        </svg>
                    </a>
                    <form className="collapse position-absolute form center-search border-0" id="collapse">
                        <div className="d-flex">
                        <input type="text" className="rounded-full border-0 focus:outline-none" placeholder="Search" />
                        <button className="btn" type="button">
                            <svg style={{width: '20px', height: '20px'}} data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapse" fill="none" stroke="#273B56" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
                            </path>
                            </svg>
                        </button>
                        </div>
                    </form>
                    </li>
                </ul>
                <div><Link className="btn btn-default btn-no-fill" to="/signin"><span>Sign In</span></Link></div>
                <div><Link className="btn btn-default btn-no-fill" to="/signup"><span>Sign Up</span></Link></div>
                
                </div>
            </nav>
            <div className="hr">
                <hr style={{borderColor: '#F4F4F4', backgroundColor: '#F4F4F4', opacity: 1, margin: '0 !important'}} />
            </div>
            <div>
                <div className="mx-auto d-flex flex-lg-row flex-column hero">
                {/* Left Column */}
                <div className="left-column flex-lg-grow-1 d-flex flex-column align-items-lg-start text-lg-start align-items-center text-center">
                    <h1 className="title-text-big">
                    The most complete,  <br className="d-lg-block d-none" />
                    <span style={{color: '#504CEE'}}>free</span> and trusted shopping place in <br className="d-lg-block d-none" />
                    Tokoku
                    </h1>
                    <p className="text-caption">
                    Hard to find a good mentor according to your wishes?<br className="d-sm-block d-none" />Don't
                    worry because we
                    are here to help you
                    </p>
                    
                </div>
                {/* Right Column */}
                <div className="right-column d-flex justify-content-center justify-content-lg-start text-center pe-0">
                    <img className="position-absolute d-lg-block d-none hero-right" src="https://www.nicepng.com/png/full/255-2559672_ecommerce-website-development-e-commerce-vector.png" alt="" />
                </div>
                </div>
            </div>
            </div>
            <div className="content-3-3 container-xxl mx-auto position-relative" style={{fontFamily: '"Poppins", sans-serif'}}>
  <div className="d-flex flex-lg-row flex-column align-items-center">
    {/* Left Column */}
    <div className="img-hero text-center justify-content-center d-flex">
      <img id="hero" className="img-fluid" src="https://5.imimg.com/data5/NG/JE/PE/SELLER-34727929/multi-vendor-e-commerce-website-development-500x500.jpg" alt="" />
    </div>
    {/* Right Column */}
    <div className="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
      <h2 className="title-text text-black">3 Keys Benefit</h2>
      <ul style={{padding: 0, margin: 0}}>
        <li className="list-unstyled" style={{marginBottom: '2rem'}}>
          <h4 className="title-caption text-black d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
            <span className="circle text-white d-flex align-items-center justify-content-center">
              1
            </span>
            Easy shopping
          </h4>
          <p className="text-caption">
            
          </p>
        </li>
        <li className="list-unstyled" style={{marginBottom: '2rem'}}>
          <h4 className="title-caption text-black d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
            <span className="circle text-white d-flex align-items-center justify-content-center">
              2
            </span>
            Can shop anywhere
          </h4>
          <p className="text-caption">
          can shop anywhere
          </p>
        </li>
        <li className="list-unstyled" style={{marginBottom: '4rem'}}>
          <h4 className="title-caption text-black d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
            <span className="circle text-white d-flex align-items-center justify-content-center">
              3
            </span>
            Safe and reliable
          </h4>
          <p className="text-caption">
          Safe and reliable
          </p>
        </li>
      </ul>
      <button className="btn btn-learn text-white">Shop now</button>
    </div>
  </div>
</div>


<div className="footer-2-2 container-xxl mx-auto position-relative p-0" style={{fontFamily: '"Poppins", sans-serif'}}>
  <div className="list-footer">
    <div className="row gap-md-0 gap-3">
      <div className="col-lg-3 col-md-6">
        <div className>
          <div className="list-space">
            <h3>Tokoku</h3>
          </div>
          <nav className="list-unstyled">
            <li className="list-space">
              <a href className="list-menu">Home</a>
            </li>
            <li className="list-space">
              <a href className="list-menu">About</a>
            </li>
            <li className="list-space">
              <a href className="list-menu">Features</a>
            </li>
            <li className="list-space">
              <a href className="list-menu">Pricing</a>
            </li>
            <li className="list-space">
              <a href className="list-menu">Testimonial</a>
            </li>
            <li className="list-space">
              <a href className="list-menu">Help</a>
            </li>
          </nav>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h2 className="footer-text-title">Product</h2>
        <nav className="list-unstyled">
          <li className="list-space">
            <a href className="list-menu">Real Time Analytic</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Easy to Operate</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Full Secured</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Analytic Tool</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Story</a>
          </li>
        </nav>
      </div>
      <div className="col-lg-3 col-md-6">
        <h2 className="footer-text-title">Company</h2>
        <nav className="list-unstyled">
          <li className="list-space">
            <a href className="list-menu">Contact Us</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Blog</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Culture</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Security</a>
          </li>
        </nav>
      </div>
      <div className="col-lg-3 col-md-6">
        <h2 className="footer-text-title">Support</h2>
        <nav className="list-unstyled">
          <li className="list-space">
            <a href className="list-menu">Getting Started</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Help Center</a>
          </li>
          <li className="list-space">
            <a href className="list-menu">Server Status</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="border-color info-footer">
    <div className>
      <hr className="hr" />
    </div>
    <div className="mx-auto d-flex flex-column flex-lg-row align-items-center footer-info-space gap-4">
      <div className="d-flex title-font font-medium align-items-center gap-4">
        <a href>
          <svg className="social-media-c" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={15} cy={15} r={15} fill="#C7C7C7" />
            <g clipPath="url(#clip0)">
              <path d="M17.6648 9.65667H19.1254V7.11267C18.8734 7.078 18.0068 7 16.9974 7C14.8914 7 13.4488 8.32467 13.4488 10.7593V13H11.1248V15.844H13.4488V23H16.2981V15.8447H18.5281L18.8821 13.0007H16.2974V11.0413C16.2981 10.2193 16.5194 9.65667 17.6648 9.65667V9.65667Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width={16} height={16} fill="white" transform="translate(7 7)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href>
          <svg className="social-media-c" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={15} cy={15} r={15} fill="#C7C7C7" />
            <g clipPath="url(#clip0)">
              <path d="M23 10.039C22.405 10.3 21.771 10.473 21.11 10.557C21.79 10.151 22.309 9.513 22.553 8.744C21.919 9.122 21.219 9.389 20.473 9.538C19.871 8.897 19.013 8.5 18.077 8.5C16.261 8.5 14.799 9.974 14.799 11.781C14.799 12.041 14.821 12.291 14.875 12.529C12.148 12.396 9.735 11.089 8.114 9.098C7.831 9.589 7.665 10.151 7.665 10.756C7.665 11.892 8.25 12.899 9.122 13.482C8.595 13.472 8.078 13.319 7.64 13.078C7.64 13.088 7.64 13.101 7.64 13.114C7.64 14.708 8.777 16.032 10.268 16.337C10.001 16.41 9.71 16.445 9.408 16.445C9.198 16.445 8.986 16.433 8.787 16.389C9.212 17.688 10.418 18.643 11.852 18.674C10.736 19.547 9.319 20.073 7.785 20.073C7.516 20.073 7.258 20.061 7 20.028C8.453 20.965 10.175 21.5 12.032 21.5C18.068 21.5 21.368 16.5 21.368 12.166C21.368 12.021 21.363 11.881 21.356 11.742C22.007 11.28 22.554 10.703 23 10.039Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width={16} height={16} fill="white" transform="translate(7 7)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href>
          <svg className="social-media-p" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8711 15C17.8711 16.5857 16.5857 17.8711 15 17.8711C13.4143 17.8711 12.1289 16.5857 12.1289 15C12.1289 13.4143 13.4143 12.1289 15 12.1289C16.5857 12.1289 17.8711 13.4143 17.8711 15Z" fill="#C7C7C7" />
            <path d="M21.7144 9.92039C21.5764 9.5464 21.3562 9.20789 21.0701 8.93002C20.7923 8.64392 20.454 8.42374 20.0797 8.28572C19.7762 8.16785 19.3203 8.02754 18.4805 7.98932C17.5721 7.94789 17.2997 7.93896 14.9999 7.93896C12.6999 7.93896 12.4275 7.94766 11.5193 7.98909C10.6796 8.02754 10.2234 8.16785 9.92014 8.28572C9.54591 8.42374 9.2074 8.64392 8.92976 8.93002C8.64366 9.20789 8.42348 9.54617 8.28523 9.92039C8.16736 10.2239 8.02705 10.6801 7.98883 11.5198C7.9474 12.428 7.93848 12.7004 7.93848 15.0004C7.93848 17.3002 7.9474 17.5726 7.98883 18.481C8.02705 19.3208 8.16736 19.7767 8.28523 20.0802C8.42348 20.4545 8.64343 20.7927 8.92953 21.0706C9.2074 21.3567 9.54568 21.5769 9.91991 21.7149C10.2234 21.833 10.6796 21.9733 11.5193 22.0115C12.4275 22.053 12.6997 22.0617 14.9997 22.0617C17.3 22.0617 17.5723 22.053 18.4803 22.0115C19.3201 21.9733 19.7762 21.833 20.0797 21.7149C20.8309 21.4251 21.4247 20.8314 21.7144 20.0802C21.8323 19.7767 21.9726 19.3208 22.011 18.481C22.0525 17.5726 22.0612 17.3002 22.0612 15.0004C22.0612 12.7004 22.0525 12.428 22.011 11.5198C21.9728 10.6801 21.8325 10.2239 21.7144 9.92039V9.92039ZM14.9999 19.4231C12.5571 19.4231 10.5768 17.4431 10.5768 15.0002C10.5768 12.5573 12.5571 10.5773 14.9999 10.5773C17.4426 10.5773 19.4229 12.5573 19.4229 15.0002C19.4229 17.4431 17.4426 19.4231 14.9999 19.4231ZM19.5977 11.4361C19.0269 11.4361 18.5641 10.9733 18.5641 10.4024C18.5641 9.83159 19.0269 9.36879 19.5977 9.36879C20.1685 9.36879 20.6313 9.83159 20.6313 10.4024C20.6311 10.9733 20.1685 11.4361 19.5977 11.4361Z" fill="#C7C7C7" />
            <path d="M15 0C6.717 0 0 6.717 0 15C0 23.283 6.717 30 15 30C23.283 30 30 23.283 30 15C30 6.717 23.283 0 15 0ZM23.5613 18.5511C23.5197 19.468 23.3739 20.094 23.161 20.6419C22.7135 21.7989 21.7989 22.7135 20.6419 23.161C20.0942 23.3739 19.468 23.5194 18.5513 23.5613C17.6328 23.6032 17.3394 23.6133 15.0002 23.6133C12.6608 23.6133 12.3676 23.6032 11.4489 23.5613C10.5322 23.5194 9.90601 23.3739 9.35829 23.161C8.78334 22.9447 8.26286 22.6057 7.83257 22.1674C7.39449 21.7374 7.05551 21.2167 6.83922 20.6419C6.62636 20.0942 6.48056 19.468 6.4389 18.5513C6.39656 17.6326 6.38672 17.3392 6.38672 15C6.38672 12.6608 6.39656 12.3674 6.43867 11.4489C6.48033 10.532 6.6259 9.90601 6.83876 9.35806C7.05505 8.78334 7.39426 8.26263 7.83257 7.83257C8.26263 7.39426 8.78334 7.05528 9.35806 6.83899C9.90601 6.62613 10.532 6.48056 11.4489 6.43867C12.3674 6.39679 12.6608 6.38672 15 6.38672C17.3392 6.38672 17.6326 6.39679 18.5511 6.4389C19.468 6.48056 20.094 6.62613 20.6419 6.83876C21.2167 7.05505 21.7374 7.39426 22.1677 7.83257C22.6057 8.26286 22.9449 8.78334 23.161 9.35806C23.3741 9.90601 23.5197 10.532 23.5616 11.4489C23.6034 12.3674 23.6133 12.6608 23.6133 15C23.6133 17.3392 23.6034 17.6326 23.5613 18.5511V18.5511Z" fill="#C7C7C7" />
          </svg>
        </a>
        <a href>
          <svg className="social-media-c" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={15} cy={15} r={15} fill="#C7C7C7" />
            <g clipPath="url(#clip0)">
              <path d="M17.9027 22.4467C17.916 22.4427 17.9287 22.4373 17.942 22.4327C26.0853 19.1973 23.8327 7 15 7C10.5673 7 7 10.6133 7 15C7 20.5513 12.6227 24.5127 17.9027 22.4467ZM10.5207 20.3727C11.0887 19.418 12.9267 16.7247 16.064 15.7953C16.72 17.468 17.18 19.4193 17.2253 21.632C14.848 22.4313 12.3407 21.8933 10.5207 20.3727V20.3727ZM18.2087 21.2147C18.1213 19.0887 17.6873 17.2033 17.0687 15.57C18.4567 15.3533 20.0633 15.498 21.8853 16.228C21.498 18.402 20.108 20.2293 18.2087 21.2147V21.2147ZM21.99 15.194C19.9833 14.44 18.2147 14.346 16.684 14.638C16.4473 14.1047 16.1987 13.592 15.9353 13.12C18.284 12.182 19.672 11.0387 20.2933 10.4333C21.39 11.7027 22.0413 13.346 21.99 15.194V15.194ZM19.5833 9.72133C19.018 10.2593 17.6867 11.346 15.41 12.2347C14.294 10.4693 13.1007 9.224 12.3447 8.52667C14.7633 7.53067 17.5527 7.956 19.5833 9.72133V9.72133ZM11.3887 9.01533C11.9593 9.51733 13.212 10.7227 14.4207 12.5867C12.7607 13.1213 10.6793 13.514 8.148 13.5693C8.55067 11.64 9.75333 10.0053 11.3887 9.01533V9.01533ZM8.02133 14.5733C10.8547 14.5273 13.148 14.08 14.9607 13.4747C15.2113 13.914 15.4493 14.3927 15.678 14.89C12.5213 15.8953 10.5487 18.4907 9.79333 19.6627C8.57467 18.3027 7.90267 16.528 8.02133 14.5733V14.5733Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width={16} height={16} fill="white" transform="translate(7 7)" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <nav className="mx-auto d-flex flex-wrap align-items-center justify-content-center gap-4">
        <a href className="footer-link" style={{textDecoration: 'none'}}>Terms of Service</a>
        <span>|</span>
        <a href className="footer-link" style={{textDecoration: 'none'}}>Privacy Policy</a>
        <span>|</span>
        <a href className="footer-link" style={{textDecoration: 'none'}}>Licenses</a>
      </nav>
      <nav className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
        <p style={{margin: 0}}>Copyright © 2021 Analystic Max</p>
      </nav>
    </div>
  </div>
</div>

        </div>
    )
}

export default HomePage;