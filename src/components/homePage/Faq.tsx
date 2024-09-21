import { useState } from "react";

const FAQ = () => {
  // FAQ data
  const faqData = [
    {
      question: "What products do you offer?",
      answer:
        "We offer a wide range of electronics, including laptops, desktops, mobile phones, and accessories from top brands.",
    },
    {
      question: "What is the estimated shipping time?",
      answer:
        "The estimated shipping time is 3-5 business days for domestic orders. For international shipping, it may take 7-14 days.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive an email with a tracking number that you can use to track the status of your order.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on most items. The product must be in its original packaging and in the same condition as when it was received.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we do offer international shipping to select countries.",
    },
  ];

  // State to track active FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for FAQ items
  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-12">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#004e92]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-[#000428]">
                {faq.question}
              </h3>
              <span className="text-[#004e92] text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
