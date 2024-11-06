const FAQs = () => {
    const faqItems = [
        { question: "What is the return policy for gadgets?", answer: "You can return any gadget within 30 days of purchase, provided it’s in original condition with the receipt." },
        { question: "Do you offer a warranty on gadgets?", answer: "Yes, all gadgets come with a 1-year manufacturer's warranty covering hardware issues." },
        { question: "Can I extend my warranty?", answer: "Yes, we offer extended warranty plans for an additional fee. Please ask our team for details." },
        { question: "Do you offer free shipping?", answer: "We offer free standard shipping on orders above $50. Expedited shipping options are available at an additional cost." },
        { question: "How do I track my order?", answer: "After placing an order, you’ll receive a tracking link via email to monitor your package's journey." },
        { question: "Are all gadgets brand new?", answer: "Yes, we only sell brand new gadgets, sourced directly from authorized suppliers." },
        { question: "Can I cancel my order after placing it?", answer: "You can cancel your order within 24 hours of placement. Contact our support for assistance." },
        { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and bank transfers. Cash on delivery is available in select locations." },
        { question: "Do you offer gift wrapping?", answer: "Yes, gift wrapping is available during checkout for an additional fee." },
        { question: "How can I contact customer support?", answer: "Our customer support team is available 24/7 via email, phone, and live chat on our website." },
    ];

    return (
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-0">
            <div className="relative bg-purple-600 text-white rounded-lg text-center p-6 sm:p-10 w-full sm:w-4/5 md:w-3/5 lg:w-4/5">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Important FAQs</h1>
                <p className="pt-2 text-sm sm:text-base">Explore the details of our gadgets, including specifications, warranty, and ordering policies.</p>
            </div>

            <div className="w-full sm:w-4/5 md:w-3/5 lg:w-4/5 mt-6 space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="collapse border border-gray-300 rounded-lg">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title font-semibold text-left text-base sm:text-lg peer-checked:bg-gray-200">
                            {item.question}
                        </div>
                        <div className="collapse-content py-2 peer-checked:bg-gray-100">
                            <p className="text-sm sm:text-base">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
