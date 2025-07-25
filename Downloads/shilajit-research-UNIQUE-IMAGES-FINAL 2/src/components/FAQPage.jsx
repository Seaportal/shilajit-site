import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import SEOHead from './SEOHead';

const FAQPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'FAQ' }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is Shilajit and where does it come from?",
      answer: "Shilajit is a natural substance formed over centuries from the decomposition of plant matter in mountainous regions. It's primarily found in the Himalayas, Altai Mountains, Caucasus, and other high-altitude ranges. Authentic Shilajit contains fulvic acid, minerals, and other bioactive compounds that have been used in traditional medicine systems like Ayurveda for thousands of years."
    },
    {
      id: 2,
      question: "How do I know if Shilajit is authentic and pure?",
      answer: "Authentic Shilajit should dissolve completely in warm water, have a distinctive earthy smell, and come with third-party lab testing certificates. Look for products that specify fulvic acid content (typically 15-20% for quality resin), heavy metal testing results, and clear sourcing information. Avoid products that are too cheap, have no testing documentation, or come from unclear sources."
    },
    {
      id: 3,
      question: "What's the difference between Shilajit resin, capsules, and gummies?",
      answer: "Shilajit resin is the most traditional and potent form, offering minimal processing but requiring careful dosing. Capsules provide convenience and precise dosing but may have slightly lower bioavailability due to the encapsulation process. Gummies are the most palatable option but typically contain lower concentrations of Shilajit and additional ingredients like sweeteners."
    },
    {
      id: 4,
      question: "How much Shilajit should I take daily?",
      answer: "Dosage varies by form: For resin, start with a rice grain-sized portion (100-150mg) and gradually increase to pea-sized (300-500mg). For capsules, follow manufacturer recommendations, typically 300-500mg daily. For gummies, dosage depends on concentration per gummy. Always start with lower doses and consult healthcare providers, especially if you have health conditions or take medications."
    },
    {
      id: 5,
      question: "Are there any side effects or safety concerns with Shilajit?",
      answer: "When sourced properly and used as directed, Shilajit has a good safety profile for most healthy adults. However, some may experience digestive discomfort, increased heart rate, or dizziness. It's not recommended for pregnant/breastfeeding women, children, or those with certain conditions like hemochromatosis. Always choose purified, lab-tested products to avoid contamination with heavy metals or other impurities."
    },
    {
      id: 6,
      question: "How long does it take to see benefits from Shilajit?",
      answer: "Individual responses vary significantly. Some users report increased energy within days to weeks, while other potential benefits may take longer to manifest. Consistent daily use is typically recommended for optimal results. Remember that Shilajit is a supplement to, not a replacement for, a healthy lifestyle including proper diet, exercise, and sleep."
    },
    {
      id: 7,
      question: "Can I take Shilajit with other supplements or medications?",
      answer: "Shilajit may interact with certain medications, particularly blood thinners, diabetes medications, and blood pressure medications. It may also enhance the absorption of other nutrients and supplements. Always consult with a healthcare provider before combining Shilajit with other supplements or medications, especially if you have existing health conditions."
    },
    {
      id: 8,
      question: "What should I look for when buying Shilajit online?",
      answer: "Look for products with third-party lab testing certificates, clear sourcing information (preferably from Himalayan or Altai regions), specified fulvic acid content, heavy metal testing results, and good manufacturing practices certification. Avoid products with unrealistic health claims, extremely low prices, or no testing documentation. Read reviews and choose reputable brands with transparent practices."
    },
    {
      id: 9,
      question: "Is Himalayan Shilajit better than other sources?",
      answer: "Himalayan Shilajit is traditionally considered the gold standard due to the region's unique geological conditions and long history of use in Ayurvedic medicine. However, quality Shilajit can also be found from other mountainous regions like the Altai Mountains. The key factors are proper sourcing, processing, and testing rather than just geographical origin."
    },
    {
      id: 10,
      question: "How should I store Shilajit to maintain its quality?",
      answer: "Store Shilajit in a cool, dry place away from direct sunlight and moisture. Resin should be kept in its original container with a tight seal. Capsules and gummies should be stored according to manufacturer instructions, typically in a cool, dry place. Avoid storing in bathrooms or other humid environments. Properly stored Shilajit can maintain its quality for extended periods."
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Frequently Asked Questions About Shilajit"
        description="Get answers to the most common questions about Shilajit, including dosage, safety, authenticity, and benefits. Expert answers from independent research."
        keywords="shilajit FAQ, shilajit questions, how to use shilajit, shilajit dosage, shilajit safety, authentic shilajit, shilajit benefits"
        canonicalUrl="/faq"
        structuredData={structuredData}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Expert Answers
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert answers to the most common questions about Shilajit, from dosage and safety to authenticity and benefits.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {expandedFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our comprehensive product reviews and research articles for more detailed information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View Product Rankings
            </Link>
            <Link
              to="/articles"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Read Research Articles
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

