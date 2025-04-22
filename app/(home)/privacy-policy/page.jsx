import React from "react";

const PrivacyPage = () => {
  return (
    <section className="w-[80%] mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-2">
        <span className="text-brand-900">Privacy</span>{" "}
        <span>And Policy</span>
      </h2>
      <div className="w-10 h-1 bg-brand-900 mx-auto mb-10 rounded" />

      <div className="space-y-10  leading-5">
        <div>
          <h3 className="text-2xl font-semibold pb-3">Introduction</h3>
          <p className="text-[16px] mt-3 tracking-wider leading-6">
            Viganium ("we", "our", "us") values your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website robustagroup.com.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold pb-3">Information We Collect</h3>
          <p className="text-[16px] mt-3 tracking-wider leading-7">
          Personal Data: Information that can identify you, such as your name, email address, phone number, and other contact details.
          </p>
          <p className="text-[16px] mt-3 tracking-wider leading-7">
          Usage Data: Information about your interaction with our website, such as IP address, browser type, access times, and pages viewed.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold pb-3">How We Use Your Information We use the collected information to:</h3>
          <p className="text-[16px] mt-3 tracking-wider leading-7">
          Provide, operate, and maintain our website.
          </p>
          <p className="text-[16px] mt-3 tracking-wider leading-7">
          Improve, personalize, and expand our website.
          </p>
          <p className="text-[16px] mt-3 tracking-wider leading-7">
          Communicate with you, including customer service and support.
          </p>
          <p className="text-[16px] mt-3 tracking-wider leading-7">
          Send you updates and marketing communications (with your consent).
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold pb-3">How We Use Your Information We use the collected information to:</h3>
          <p className="text-[16px] mt-3 tracking-wider leading-7">
          Personal Data: Information that can identify you, such as your name, email address, phone number, and other contact details.
          </p>
          <p className="text-[16px] mt-3 tracking-wider leading-7">
          Usage Data: Information about your interaction with our website, such as IP address, browser type, access times, and pages viewed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
