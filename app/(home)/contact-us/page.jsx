"use client";

import { useTranslations } from "next-intl";
import { useContactForm } from "@/hooks/useContactForm"; 

export default function ContactSection() {
  const t = useTranslations("contact");
  const { formData, formStatus, handleInputChange, handleSubmit, resetForm } = useContactForm();

  return (
    <section className="w-full bg-gradient-to-b from-[#f7f8fa] to-[#e8eaed] py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#1f2937] mb-10 leading-tight">
          {t("title", { brand: "Viganium" })}
        </h2>

        {/* Flip Container */}
        <div className="relative mb-12 flex justify-center items-center perspective-[1000px]">
          <div
            className="relative w-full max-w-4xl transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: formStatus.isSuccess
                ? "rotateY(180deg)"
                : "rotateY(0deg)",
            }}
          >
            {/* FRONT: Contact Form */}
            <div
              className="bg-white border-[10px] border-gray-200 shadow-xl rounded-2xl p-6 md:p-8"
              style={{ backfaceVisibility: "hidden" }}
            >
              <h3 className="text-lg font-semibold mb-6">{t("subtitle")}</h3>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("form.name")}
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                  {formStatus.isError && !formData.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {t("errors.name")}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t("form.phone")}
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                  {formStatus.isError && !formData.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {t("errors.phone")}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("form.email")}
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  />
                  {formStatus.isError && !formData.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {t("errors.email")}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t("form.company")}
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("form.message")}
                    rows={4}
                    className="border border-gray-300 rounded-md p-3 w-full resize-none"
                    required
                  />
                  {formStatus.isError && !formData.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {t("errors.message")}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-gray-700 text-white py-3 px-6 w-full rounded-md hover:bg-gray-800 transition"
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {t("form.submitting")}
                      </span>
                    ) : (
                      t("form.submit")
                    )}
                  </button>
                </div>
                {formStatus.isError && (
                  <div className="md:col-span-2 mt-2 text-center">
                    <p className="text-red-500">{formStatus.message}</p>
                  </div>
                )}
              </form>
            </div>

            {/* BACK: Success Message */}
            <div
              className="absolute inset-0 bg-white border-[10px] border-green-500 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {t("success.title")}
              </h3>
              <p className="text-gray-700 mb-6">{t("success.message")}</p>
              <button
                onClick={() => {
                  // Reset form status
                  formStatus.isSuccess = false;
                  // Force re-render
                  window.location.reload();
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                {t("success.button")}
              </button>
            </div>
          </div>
        </div>

        {/* Map & Contact Info */}
        <div className="w-full mb-12">
          <div className="w-full h-[300px] rounded-lg overflow-hidden border-[8px] border-gray-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.9144367147974!2d31.34475!3d29.981888899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU4JzU0LjgiTiAzMcKwMjAnNDEuMSJF!5e0!3m2!1sen!2seg!4v1745400309765!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between text-sm sm:text-base text-black">
          {/* Phone (Click-to-Call) */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-brand-900">
              {t("contactInfo.call")}
            </h4>
            <a
              href={`tel:${t("contactInfo.phoneValue").replace(/\D/g, "")}`}
              className="pt-2 hover:text-brand-900 transition-colors"
              style={{ unicodeBidi: "plaintext" }}
            >
              {t("contactInfo.phoneValue")}
            </a>
          </div>

          {/* Email (Click-to-Mail) */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-brand-900">
              {t("contactInfo.email")}
            </h4>
            <a
              href={`mailto:${t("contactInfo.emailValue")}`}
              className="pt-2 hover:text-brand-900 transition-colors"
            >
              {t("contactInfo.emailValue")}
            </a>
          </div>

          {/* Address (Click-to-Open Maps) */}
          <div>
            <h4 className="font-bold text-brand-900">
              {t("contactInfo.address")}
            </h4>
            <a
              href="https://maps.app.goo.gl/YLVfwLBiDq95hbpd7"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 hover:text-brand-900 transition-colors"
            >
              {t("contactInfo.addressValue")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
