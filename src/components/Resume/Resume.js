import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Resume = () => {
  useEffect(() => {
    window.open(
      "https://storage.cloud.google.com/www.anthonygawbill.com/anthony-gawbill-resume.pdf"
    );
  });
  return <Redirect to="/" />;
};

export default Resume;
