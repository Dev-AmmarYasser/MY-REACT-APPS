import React from "react";

import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./who.scss";

const Who = () => {
  return (
    <section className="who">
      <div className="container mx-auto flex items-center py-[40px]">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">Who are we ?</h3>
          <p className="text-lg font-semibold">
            A good biology teacher is like a gardener, nurturing the curiosity
            and wonder of their students. They are passionate about the subject
            and excited to share their knowledge with others. They use creative
            and engaging methods to teach, making biology fun and accessible to
            everyone. They are patient and understanding, always willing to help
            students learn. They create a positive and supportive learning
            environment where students feel comfortable asking questions and
            taking risks
          </p>
        </div>
      </div>
    </section>
  );
};

export default Who;
