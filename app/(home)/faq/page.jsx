'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How I Reserve A Service ?',
    answer: [
      'Access, Correct, Update, Or Request Deletion Of Your Personal Data.',
      'Object To Or Restrict The Processing Of Your Personal Data.',
      'Withdraw Consent At Any Time (If We Process Your Personal Data Based On Consent).',
      'We Implement Reasonable Security Measures To Protect Your Personal Data From Unauthorized Access, Use, Or Disclosure.',
      'We May Update This Privacy Policy From Time To Time. We Will Notify You Of Any Changes By Posting The New Privacy Policy On This Page.',
    ],
  },
  {
    question: 'How I Reserve A Service ?',
    answer: [
      'Access, Correct, Update, Or Request Deletion Of Your Personal Data.',
      'Object To Or Restrict The Processing Of Your Personal Data.',
      'Withdraw Consent At Any Time (If We Process Your Personal Data Based On Consent).',
      'We Implement Reasonable Security Measures To Protect Your Personal Data From Unauthorized Access, Use, Or Disclosure.',
      'We May Update This Privacy Policy From Time To Time. We Will Notify You Of Any Changes By Posting The New Privacy Policy On This Page.',
    ],
  },
  {
    question: 'How I Reserve A Service ?',
    answer: [
      'Access, Correct, Update, Or Request Deletion Of Your Personal Data.',
      'Object To Or Restrict The Processing Of Your Personal Data.',
      'Withdraw Consent At Any Time (If We Process Your Personal Data Based On Consent).',
      'We Implement Reasonable Security Measures To Protect Your Personal Data From Unauthorized Access, Use, Or Disclosure.',
      'We May Update This Privacy Policy From Time To Time. We Will Notify You Of Any Changes By Posting The New Privacy Policy On This Page.',
    ],
  },
  {
    question: 'How I Reserve A Service ?',
    answer: [
      'Access, Correct, Update, Or Request Deletion Of Your Personal Data.',
      'Object To Or Restrict The Processing Of Your Personal Data.',
      'Withdraw Consent At Any Time (If We Process Your Personal Data Based On Consent).',
      'We Implement Reasonable Security Measures To Protect Your Personal Data From Unauthorized Access, Use, Or Disclosure.',
      'We May Update This Privacy Policy From Time To Time. We Will Notify You Of Any Changes By Posting The New Privacy Policy On This Page.',
    ],
  },
  {
    question: 'How I Reserve A Service ?',
    answer: [
      'Access, Correct, Update, Or Request Deletion Of Your Personal Data.',
      'Object To Or Restrict The Processing Of Your Personal Data.',
      'Withdraw Consent At Any Time (If We Process Your Personal Data Based On Consent).',
      'We Implement Reasonable Security Measures To Protect Your Personal Data From Unauthorized Access, Use, Or Disclosure.',
      'We May Update This Privacy Policy From Time To Time. We Will Notify You Of Any Changes By Posting The New Privacy Policy On This Page.',
    ],
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-[83%] mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center text-brand-900 mb-2">FAQ</h2>
      <div className="w-10 h-1 bg-brand-900 mx-auto mb-8 rounded" />

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-[#9DB4CB] rounded mb-4 shadow-sm"
        >
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
          >
            {faq.question}
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600 text-sm space-y-2">
              {faq.answer.map((line, i) => (
                <p key={i}>
                  {i + 1}. {line}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
