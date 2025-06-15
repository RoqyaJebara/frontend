import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-4 mt-5">
      <div>&copy; {new Date().getFullYear()} Inter. All rights reserved.</div>
      <div className="mt-2">
        <a href="#" className="text-muted me-3">Privacy</a>
        <a href="#" className="text-muted me-3">Terms</a>
        <a href="#" className="text-muted">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
