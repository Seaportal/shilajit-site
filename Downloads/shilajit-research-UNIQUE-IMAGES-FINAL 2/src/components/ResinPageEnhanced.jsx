import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, ExternalLink, ChevronDown, ChevronUp, Filter, SortAsc } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import RatingStars from './RatingStars';

const ResinPageEnhanced = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const breadcrumbItems = [
    { label: 'Shilajit Formats', href: '/#rankings' },
    { label: 'Resin' }
  ];

  const pros = [
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Highest Purity Potential',
      description: 'When sourced correctly, resin offers the purest form with minimal processing and no fillers.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Rich in Fulvic Acid',
      description: 'Often boasts the highest concentrations of naturally occurring fulvic and humic acids.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Authentic Experience',
      description: 'Provides the traditional way of consuming Shilajit, appreciated by purists.'
    }
  ];

  const cons = [
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Messy & Difficult Dosing',
      description: 'Can be sticky and challenging to measure accurately, especially for beginners.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Strong Taste',
      description: 'Its natural, earthy, and sometimes bitter taste can be off-putting for some users.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Storage Sensitivity',
      description: 'Requires careful storage to maintain consistency, especially in varying temperatures.'
    }
  ];

  const useCases = [
    {
      title: 'For the Connoisseur',
      description: 'Ideal for those who prioritize traditional forms and seek the most direct and potent experience.'
    },
    {
      title: 'Maximized Bioavailability',
      description: 'Preferred by users who believe minimal processing leads to better absorption.'
    },
    {
      title: 'Flexible Dosing',
      description: 'Allows for subtle adjustments in dosage if you\'re comfortable with manual measurement.'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Sayan Pure Himalayan Shilajit Resin',
      rating: 4.8,
      price: '$29.99',
      description: 'This resin consistently delivers on purity and potency. Our lab tests confirmed high fulvic acid content and zero contaminants. Its texture is ideal, making dosing manageable despite being a resin.',
      metrics: {
        purity: 'Excellent',
        potency: 'High',
        taste: 'Earthy (expected)',
        labTest: 'Verified Clean',
        packaging: 'Secure Glass Jar'
      },
      labResults: {
        fulvicAcid: '15.2%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Himalayan source'
      },
      pros: ['Highest fulvic acid content tested', 'Zero contaminants', 'Ideal texture'],
      cons: ['Premium pricing', 'Strong earthy taste'],
      url: 'https://example.com/sayan-resin'
    },
    {
      id: 2,
      name: 'Golden Mountains Altai Shilajit',
      rating: 4.6,
      price: '$24.99',
      description: 'A premium Altai source with excellent consistency. Lab analysis shows good fulvic acid levels and minimal processing. The glass jar packaging ensures product integrity.',
      metrics: {
        purity: 'High',
        potency: 'High',
        taste: 'Mild Earthy',
        labTest: 'Clean Results',
        packaging: 'Premium Glass'
      },
      labResults: {
        fulvicAcid: '12.8%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Altai source'
      },
      pros: ['Excellent consistency', 'Premium packaging', 'Good value'],
      cons: ['Slightly lower fulvic acid', 'Limited availability'],
      url: 'https://example.com/golden-mountains'
    },
    {
      id: 3,
      name: 'Authentic Shilajit Gold Grade',
      rating: 4.4,
      price: '$19.99',
      description: 'Solid performance across all metrics. Good purity levels with acceptable taste profile. Packaging could be improved but product quality remains consistent.',
      metrics: {
        purity: 'Good',
        potency: 'Good',
        taste: 'Strong Earthy',
        labTest: 'Acceptable',
        packaging: 'Standard Jar'
      },
      labResults: {
        fulvicAcid: '10.5%',
        heavyMetals: 'Within safe limits',
        microbial: 'Clean',
        authenticity: 'Verified source'
      },
      pros: ['Good value for money', 'Consistent quality', 'Widely available'],
      cons: ['Basic packaging', 'Strong taste'],
      url: 'https://example.com/authentic-gold'
    },
    {
      id: 4,
      name: 'Pure Himalayan Organic Resin',
      rating: 4.2,
      price: '$22.99',
      description: 'Decent quality resin with organic certification. Lab tests show moderate fulvic acid content. Good for beginners but experienced users might prefer higher potency options.',
      metrics: {
        purity: 'Good',
        potency: 'Moderate',
        taste: 'Mild',
        labTest: 'Good',
        packaging: 'Adequate'
      },
      labResults: {
        fulvicAcid: '9.2%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Organic certified'
      },
      pros: ['Organic certification', 'Mild taste', 'Beginner-friendly'],
      cons: ['Lower potency', 'Higher price for quality'],
      url: 'https://example.com/pure-himalayan'
    },
    {
      id: 5,
      name: 'Traditional Himalayan Shilajit',
      rating: 3.9,
      price: '$16.99',
      description: 'Basic resin option with acceptable quality. Some inconsistency in texture noted across batches. Suitable for those new to shilajit but not our top recommendation.',
      metrics: {
        purity: 'Acceptable',
        potency: 'Moderate',
        taste: 'Variable',
        labTest: 'Acceptable',
        packaging: 'Basic'
      },
      labResults: {
        fulvicAcid: '7.8%',
        heavyMetals: 'Within safe limits',
        microbial: 'Clean',
        authenticity: 'Verified source'
      },
      pros: ['Budget-friendly', 'Good for beginners', 'Widely available'],
      cons: ['Inconsistent texture', 'Lower fulvic acid', 'Basic packaging'],
      url: 'https://example.com/traditional'
    }
  ];

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

  const filteredProducts = sortedProducts.filter(product => {
    switch (filterBy) {
      case 'premium':
        return product.rating >= 4.5;
      case 'budget':
        return parseFloat(product.price.replace('$', '')) < 25;
      case 'beginner':
        return product.metrics.taste === 'Mild' || product.metrics.taste === 'Mild Earthy';
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            #1 Ranked
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Resin: The Traditional Powerhouse
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our in-depth analysis of Shilajit resin, often considered the most authentic and potent form. Understand its unique characteristics and see how various brands compare.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img
            src="/src/assets/shilajit-jar.jpg"
            alt="Premium Shilajit Resin"
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
            <div className="pros-cons-card border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pros of Shilajit Resin</h3>
              </div>
              <div className="space-y-6">
                {pros.map((pro, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {pro.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{pro.title}</h4>
                      <p className="text-gray-600">{pro.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pros-cons-card border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cons of Shilajit Resin</h3>
              </div>
              <div className="space-y-6">
                {cons.map((con, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {con.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{con.title}</h4>
                      <p className="text-gray-600">{con.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center section-divider pt-8">
            Ideal Use Cases for Shilajit Resin
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
              Top Shilajit Resin Products Reviewed
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
                  <option value="premium">Premium (4.5+ stars)</option>
                  <option value="budget">Budget (&lt;$25)</option>
                  <option value="beginner">Beginner-Friendly</option>
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
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>
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

export default ResinPageEnhanced;

