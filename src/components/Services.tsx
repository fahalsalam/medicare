import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation();
  const [travelRef, isTravelVisible] = useScrollAnimation();
  const [tourismRef, isTourismVisible] = useScrollAnimation();
  const [supportRef, isSupportVisible] = useScrollAnimation();
  const [optionalRef, isOptionalVisible] = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`mb-12 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Medical Services</h2>
          <ol className="list-decimal ml-6 space-y-6 text-gray-800">
            <li>
              <p className="font-semibold">Medical Consultation & Diagnosis</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Pre-treatment consultations (online or in-person)</li>
                <li>Review of medical history and reports</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Medical Treatment & Surgery</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Elective surgeries (e.g., cosmetic, orthopedic, bariatric)</li>
                <li>Specialized treatments (e.g., cardiac surgery, fertility treatments, oncology)</li>
                <li>Dental procedures</li>
                <li>Alternative treatments (e.g., Ayurveda, acupuncture)</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Hospitalization</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>In-patient care</li>
                <li>ICU and post-operative care</li>
                <li>Room charges and meals</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Post-Treatment Follow-Up</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Recovery monitoring</li>
                <li>Medication provision</li>
                <li>Telehealth or virtual follow-ups</li>
              </ul>
            </li>
          </ol>
        </div>

        <div 
          ref={travelRef}
          className={`mt-12 transition-all duration-1000 ${
            isTravelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Travel & Logistical Services</h2>
          <ol className="list-decimal ml-6 space-y-6 text-gray-800">
            <li>
              <p className="font-semibold">Medical Visa Assistance</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Help with documentation and visa applications</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Flight Booking & Travel Arrangements</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Assistance with international and domestic flights</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Airport Pick-Up and Drop-Off</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Transportation services from airport to hospital/hotel</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Accommodation</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Hotel bookings</li>
                <li>Guest houses or recovery suites near the hospital</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Local Transportation</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Daily transport to and from medical facilities</li>
              </ul>
            </li>
          </ol>
        </div>

        <div 
          ref={tourismRef}
          className={`mt-12 transition-all duration-1000 ${
            isTourismVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tourism & Leisure Services</h2>
          <ol className="list-decimal ml-6 space-y-6 text-gray-800">
            <li>
              <p className="font-semibold">Sightseeing Packages</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Guided tours and excursions</li>
                <li>Wellness retreats or spa visits</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Cultural Experiences</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Local cuisine, festivals, heritage site visits</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Companion/Family Support Services</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Arrangements for travel and stay of accompanying persons</li>
              </ul>
            </li>
          </ol>
        </div>

        <div 
          ref={supportRef}
          className={`mt-12 transition-all duration-1000 ${
            isSupportVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Support & Coordination</h2>
          <ol className="list-decimal ml-6 space-y-6 text-gray-800">
            <li>
              <p className="font-semibold">Personal Case Manager</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Point of contact throughout the process</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Language Interpretation Services</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Translation for medical and non-medical communication</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">24/7 Customer Support</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Emergency assistance and coordination</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Insurance Assistance</p>
              <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
                <li>Coordination with international insurance providers</li>
                <li>Help with claims and reimbursement</li>
              </ul>
            </li>
          </ol>
        </div>

        <div 
          ref={optionalRef}
          className={`mt-12 transition-all duration-1000 ${
            isOptionalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Optional Premium Services</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Private nurses or caregivers</li>
            <li>Mobile SIM cards/local connectivity</li>
            <li>Health and wellness programs</li>
            <li>Legal and notary services (for medical documentation)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;