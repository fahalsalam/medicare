import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much can I save with medical tourism?',
      answer: 'Savings typically range from 40-80% compared to US prices, depending on the procedure and destination. For example, a cardiac bypass surgery that costs $100,000 in the US might cost $15,000-25,000 abroad, including travel and accommodation expenses.'
    },
    {
      question: 'Are international hospitals safe and accredited?',
      answer: 'All our partner hospitals are internationally accredited by organizations like JCI (Joint Commission International), which maintains the same standards as top US hospitals. Many doctors are trained in the US or Europe and speak fluent English.'
    },
    {
      question: 'What is included in medical tourism packages?',
      answer: 'Our comprehensive packages typically include medical procedure, hospital stay, pre and post-operative care, airport transfers, accommodation for patient and companion, local transportation, and 24/7 support from our care coordinators.'
    },
    {
      question: 'How do I choose the right destination and doctor?',
      answer: 'We match you with destinations and doctors based on your specific medical needs, budget, and preferences. We provide detailed profiles of doctors, hospitals, and success rates to help you make an informed decision.'
    },
    {
      question: 'What about follow-up care after returning home?',
      answer: 'We coordinate with your local physician for seamless follow-up care. We also provide telemedicine consultations with your treating doctor abroad and maintain detailed medical records that we share with your home healthcare team.'
    },
    {
      question: 'Do you help with travel arrangements and visas?',
      answer: 'Yes, our travel specialists assist with visa applications, flight bookings, accommodation arrangements, and local transportation. We also provide cultural orientation and language assistance to ensure a comfortable experience.'
    },
    {
      question: 'What if complications arise during treatment?',
      answer: 'All procedures are covered by comprehensive medical insurance. Our partner hospitals have excellent emergency protocols, and we provide 24/7 support. We also have partnerships with air ambulance services if emergency medical evacuation is needed.'
    },
    {
      question: 'How long do I need to stay abroad for treatment?',
      answer: 'The duration varies by procedure. Minor surgeries may require 3-7 days, while major procedures like cardiac surgery might need 2-3 weeks. We provide detailed timelines during consultation and can adjust based on your recovery progress.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about medical tourism. 
            Our team is here to address any concerns and guide you through the process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our medical tourism specialists are available 24/7 to answer any questions 
              and help you plan your healthcare journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-medium">
                Call +1 (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;