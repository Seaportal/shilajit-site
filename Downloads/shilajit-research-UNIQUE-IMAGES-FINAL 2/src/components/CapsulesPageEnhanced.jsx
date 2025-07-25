import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, CheckCircle, XCircle, Filter, SortAsc } from 'lucide-react';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import RatingStars from './RatingStars';
import InteractiveRating from './InteractiveRating';

const CapsulesPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shilajit Formats', href: '/#rankings' },
    { label: 'Capsules', href: '/capsules' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Himalayan Shilajit Capsules',
      rating: 4.5,
      price: '$34.99',
      description: 'Excellent convenience with standardized dosing. Lab tests show good purity levels and consistent fulvic acid content across batches. Each capsule contains 500mg of purified Shilajit extract.',
      url: '#',
      metrics: {
        purity: 'High',
        potency: 'Good',
        taste: 'Neutral',
        labTest: 'Verified Clean',
        packaging: 'Secure Bottle'
      },
      labResults: {
        fulvicAcid: '18.2%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Himalayan source'
      },
      pros: [
        'Consistent fulvic acid content across batches',
        'Zero heavy metal contamination',
        'Excellent bioavailability',
        'Convenient daily dosing'
      ],
      cons: [
        'Premium pricing',
        'Contains minor excipients'
      ]
    },
    {
      id: 2,
      name: 'Organic Shilajit Extract Capsules',
      rating: 4.3,
      price: '$28.99',
      description: 'Solid organic option with good bioavailability. Some variation in potency noted, but overall consistent quality and easy to consume. USDA Organic certified with third-party testing.',
      url: '#',
      metrics: {
        purity: 'Good',
        potency: 'Good',
        taste: 'Minimal',
        labTest: 'Clean Results',
        packaging: 'Standard Bottle'
      },
      labResults: {
        fulvicAcid: '16.8%',
        heavyMetals: 'Below limits',
        microbial: 'Clean',
        authenticity: 'Organic certified'
      },
      pros: [
        'USDA Organic certification',
        'Good value for money',
        'Minimal taste',
        'Reliable quality'
      ],
      cons: [
        'Slight potency variation',
        'Lower fulvic acid than premium options'
      ]
    },
    {
      id: 3,
      name: 'Pure Altai Shilajit Capsules',
      rating: 4.1,
      price: '$24.99',
      description: 'Decent quality with Altai sourcing. Moderate fulvic acid levels but good for those seeking convenience over maximum potency. Well-tolerated by most users.',
      url: '#',
      metrics: {
        purity: 'Good',
        potency: 'Moderate',
        taste: 'None',
        labTest: 'Acceptable',
        packaging: 'Adequate'
      },
      labResults: {
        fulvicAcid: '14.5%',
        heavyMetals: 'Within limits',
        microbial: 'Clean',
        authenticity: 'Altai region verified'
      },
      pros: [
        'Altai mountain sourcing',
        'Good digestibility',
        'Affordable pricing',
        'No taste issues'
      ],
      cons: [
        'Moderate potency',
        'Basic packaging',
        'Lower fulvic acid content'
      ]
    },
    {
      id: 4,
      name: 'Standardized Shilajit Capsules',
      rating: 3.9,
      price: '$19.99',
      description: 'Basic capsule option with acceptable quality. Contains some fillers but maintains reasonable shilajit concentration. Good entry-level choice.',
      url: '#',
      metrics: {
        purity: 'Moderate',
        potency: 'Moderate',
        taste: 'None',
        labTest: 'Acceptable',
        packaging: 'Basic'
      },
      labResults: {
        fulvicAcid: '12.3%',
        heavyMetals: 'Within limits',
        microbial: 'Acceptable',
        authenticity: 'Mixed sources'
      },
      pros: [
        'Budget-friendly',
        'Standardized dosing',
        'Widely available',
        'Good for beginners'
      ],
      cons: [
        'Contains fillers',
        'Lower concentration',
        'Basic quality control'
      ]
    },
    {
      id: 5,
      name: 'Budget Shilajit Capsules',
      rating: 3.4,
      price: '$14.99',
      description: 'Entry-level option with lower concentration. Suitable for beginners but experienced users may find potency insufficient. Basic quality control.',
      url: '#',
      metrics: {
        purity: 'Acceptable',
        potency: 'Low',
        taste: 'None',
        labTest: 'Basic',
        packaging: 'Basic'
      },
      labResults: {
        fulvicAcid: '8.7%',
        heavyMetals: 'Within limits',
        microbial: 'Acceptable',
        authenticity: 'Not verified'
      },
      pros: [
        'Very affordable',
        'Easy to swallow',
        'No side effects reported',
        'Good for testing tolerance'
      ],
      cons: [
        'Low potency',
        'Significant filler content',
        'Unverified sourcing',
        'Minimal quality testing'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Busy Professionals',
      description: 'Perfect for those who need consistent daily supplementation without the hassle of measuring doses or dealing with strong tastes.'
    },
    {
      title: 'Travel Convenience',
      description: 'Ideal for frequent travelers who want to maintain their Shilajit routine without carrying messy resin or worrying about customs issues.'
    },
    {
      title: 'Taste-Sensitive Users',
      description: 'Excellent choice for individuals who find the natural earthy taste of Shilajit resin too strong or unpalatable.'
    }
  ];

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Filtering logic
  const filteredProducts = sortedProducts.filter(product => {
    switch (filterBy) {
      case 'premium':
        return product.rating >= 4.3;
      case 'budget':
        return parseFloat(product.price.replace('$', '')) < 25;
      case 'organic':
        return product.name.toLowerCase().includes('organic');
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            #2 Ranked
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Capsules: Convenience Meets Quality
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive analysis of Shilajit capsules, the perfect balance of convenience and potency for modern lifestyles.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img
            src="/src/assets/capsules.jpg"
            alt="Premium Shilajit Capsules"
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-4">
              <span className="trust-badge bg-white/20 text-white border-white/30">Lab Tested</span>
              <span className="trust-badge bg-white/20 text-white border-white/30">Independent Review</span>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <section className="mb-16">
          <div className="pros-cons-grid">
            <div className="pros-cons-card pros-card">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pros of Shilajit Capsules</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Precise Dosing</h4>
                    <p className="text-gray-600">Each capsule contains a standardized amount, eliminating guesswork and ensuring consistent intake.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Convenience & Portability</h4>
                    <p className="text-gray-600">Easy to carry and consume anywhere, perfect for busy lifestyles and travel.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Taste Neutral</h4>
                    <p className="text-gray-600">Encapsulation masks the strong earthy taste that some find unpalatable in resin form.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Extended Shelf Life</h4>
                    <p className="text-gray-600">Proper encapsulation protects from moisture and oxidation, maintaining potency longer.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pros-cons-card cons-card">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cons of Shilajit Capsules</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Processing Concerns</h4>
                    <p className="text-gray-600">Additional processing steps may reduce bioavailability compared to pure resin forms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Potential Fillers</h4>
                    <p className="text-gray-600">May contain binding agents, fillers, or flow agents that dilute the active content.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Higher Cost Per Dose</h4>
                    <p className="text-gray-600">Generally more expensive than equivalent amounts of resin due to processing and packaging.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Variability</h4>
                    <p className="text-gray-600">Harder to assess quality visually; relies heavily on manufacturer testing and transparency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center section-divider pt-8">
            Ideal Use Cases for Shilajit Capsules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Reviews */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 section-divider pt-8">
              Top Shilajit Capsule Products Reviewed
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                  <option value="all">All Products</option>
                  <option value="premium">Premium (4.3+ stars)</option>
                  <option value="budget">Budget (&lt;$25)</option>
                  <option value="organic">Organic Certified</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <SortAsc className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <RatingStars rating={product.rating} size="lg" />
                        <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      </div>
                      <InteractiveRating 
                        productId={`capsules_${product.id}`}
                        initialRating={product.rating}
                      />
                      <p className="text-gray-600 leading-relaxed mt-4">{product.description}</p>
                    </div>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Product
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    {Object.entries(product.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm text-gray-500 capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className={`font-semibold ${
                          value === 'Excellent' || value === 'High' ? 'text-green-600' :
                          value === 'Good' || value === 'Verified Clean' ? 'text-blue-600' :
                          value === 'Moderate' || value === 'Acceptable' ? 'text-yellow-600' :
                          'text-gray-600'
                        }`}>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Lab Results */}
                  <button
                    onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                    className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">Detailed Lab Results & Analysis</span>
                    {expandedProduct === product.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {expandedProduct === product.id && (
                    <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Lab Test Results</h4>
                          <div className="space-y-3">
                            {Object.entries(product.labResults).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                                </span>
                                <span className="font-medium text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Key Advantages</h4>
                            <ul className="space-y-2">
                              {product.pros.map((pro, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600">{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Considerations</h4>
                            <ul className="space-y-2">
                              {product.cons.map((con, index) => (
                                <li key={index} className="flex items-start">
                                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600">{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

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

export default CapsulesPage;

