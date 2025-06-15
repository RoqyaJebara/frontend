import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./styles.css";
const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              <span className="text-primary">Learn</span> on your schedule ⏰
            </h1>
            <p className="lead mt-3">Anywhere, anytime. Start learning today!</p>
            <form className="d-flex mt-4">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary">Get Started</button>
            </form>
            <div className="mt-3 small text-muted">
              <img src="https://i.pravatar.cc/30?img=1" alt="user1" className="rounded-circle me-1" />
              <img src="https://i.pravatar.cc/30?img=2" alt="user2" className="rounded-circle me-1" />
              <img src="https://i.pravatar.cc/30?img=3" alt="user3" className="rounded-circle me-1" />
              +5k Active Students
            </div>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img src="https://randomuser.me/api/portraits/women/76.jpg" className="hero-img mx-2" />
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="hero-img mx-2" />
            <img src="https://randomuser.me/api/portraits/women/65.jpg" className="hero-img mx-2" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Inter?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded bg-white h-100">
                <h5 className="fw-bold mb-2">Flexible Learning</h5>
                <p>Study when it suits you with self-paced content.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded bg-white h-100">
                <h5 className="fw-bold mb-2">Expert Instructors</h5>
                <p>Learn from industry professionals and certified teachers.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded bg-white h-100">
                <h5 className="fw-bold mb-2">Certificate of Completion</h5>
                <p>Earn recognition and showcase your new skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
