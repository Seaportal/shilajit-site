import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, CheckCircle, XCircle, Filter, SortAsc } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import AdminRating from './AdminRating';

const CapsulesPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const breadcrumbItems = [
    { label: 'Shilajit Formats', href: '/#rankings' },
    { label: 'Capsules' }
  ];

  const pros = [
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Precise Dosing',
      description: 'Pre-measured capsules ensure consistent dosage every time, eliminating guesswork.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Taste-Free Option',
      description: 'Ideal for those who find the natural taste of Shilajit unpleasant or too strong.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Convenient Travel Format',
      description: 'Easy to pack, store, and take on-the-go without risk of spills or mess.'
    }
  ];

  const cons = [
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Processing Required',
      description: 'The encapsulation process may involve additional processing steps compared to pure resin.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Potential Fillers',
      description: 'Some manufacturers add fillers or flow agents to capsules, potentially diluting potency.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Slower Absorption',
      description: 'The capsule shell must dissolve before the Shilajit can be absorbed, potentially delaying effects.'
    }
  ];

  const useCases = [
    {
      title: 'For Busy Professionals',
      description: 'Perfect for those with hectic schedules who need a quick, mess-free supplement option.'
    },
    {
      title: 'Taste-Sensitive Users',
      description: 'Ideal for those who want the benefits of Shilajit without experiencing its strong earthy flavor.'
    },
    {
      title: 'Travel & Convenience',
      description: 'Best for frequent travelers or those who need to take supplements away from home.'
    }
  ];

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Shilaheal Shilajit Capsules',
      rating: 4.9,
      price: '$49.99',
      priceCategory: "optimal",
      description: 'Vegan capsules with 500mg purified resin extract standardized to 81% fulvic acid. Lab-tested by Eurofins with full traceability to Ladakh, India. No fillers, premium matte-black bottle with protective tube. The only brand offering resin extract (not powder) with certified purity.',
      metrics: {
        purity: 'Excellent (81% Fulvic Acid)',
        potency: 'Maximum',
        additives: 'None',
        labTest: 'Eurofins Certified',
        packaging: 'Matte-Black Premium Bottle'
      },
      labResults: {
        fulvicAcid: '81%',
        heavyMetals: 'Below detection limits',
        microbial: 'Sterile',
        authenticity: 'Verified Ladakh resin source'
      },
      pros: ['81% fulvic acid certified', 'Resin extract (not powder)', 'Eurofins lab certification', 'Full Ladakh traceability', 'No fillers or additives'],
      cons: ['Premium price point', 'Limited availability'],
      url: 'https://www.amazon.com/stores/SHILAHEAL/page/2C02B9F0-1957-4E71-907F-44D31B25BAAC?lp_asin=B0FD41L37M&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto',
      image: '/src/assets/products/capsules-1.jpg'
    },
    {
      id: 2,
      name: 'iMeMyself Pure Shilajit Capsules',
      rating: 4.6,
      price: '$25.00',
      priceCategory: "budget",
      description: 'Claims 81% fulvic acid content but uses powdered extract with unspecified source. While the fulvic acid percentage matches premium brands, the lack of Certificate of Analysis and unclear origin raises questions about quality verification.',
      metrics: {
        purity: 'High (81% FA claimed)',
        potency: 'Good',
        additives: 'Powdered extract',
        labTest: 'Not fully transparent',
        packaging: 'Standard Bottle'
      },
      labResults: {
        fulvicAcid: '81% (claimed)',
        heavyMetals: 'Not disclosed',
        microbial: 'Not verified',
        authenticity: 'Source not specified'
      },
      pros: ['Claims high fulvic acid', 'Reasonable price', 'Good customer reviews'],
      cons: ['Powdered extract vs resin', 'No COA provided', 'Unclear sourcing'],
      url: 'https://example.com/imemyself-capsules',
      image: '/src/assets/products/capsules-2.jpg'
    },
    {
      id: 3,
      name: 'Youtheory Shilajit Capsules',
      rating: 4.5,
      price: '$23.19',
      priceCategory: "budget",
      description: '500mg PrimaVie® extract, vegetarian, USA-made. Clean reviews and gentle on stomach, but no fulvic acid percentage disclosed on label. Uses branded extract which may involve additional processing steps.',
      metrics: {
        purity: 'Good (no % disclosed)',
        potency: 'Good',
        additives: 'Branded extract',
        labTest: 'Third-party (not fully transparent)',
        packaging: 'Standard Bottle'
      },
      labResults: {
        fulvicAcid: 'Not disclosed',
        heavyMetals: 'Third-party tested',
        microbial: 'Clean',
        authenticity: 'PrimaVie branded source'
      },
      pros: ['PrimaVie branded extract', 'USA-made', 'Gentle on stomach', 'Good price'],
      cons: ['No fulvic acid % disclosed', 'Branded extract processing', 'Origin not declared'],
      url: 'https://example.com/youtheory-capsules',
      image: '/src/assets/products/capsules-3.jpg'
    },
    {
      id: 4,
      name: 'Thinbi Pure Himalayan Shilajit Capsules',
      rating: 4.4,
      price: '$22.99',
      priceCategory: "budget",
      description: 'Claimed ultra-strength with 10,000mg potency and fulvic acid & trace minerals. Organic and lab-tested according to claims, but fulvic acid percentage not declared. Large quantity (90 capsules) offers good value.',
      metrics: {
        purity: 'Not % declared',
        potency: 'High (10,000mg claimed)',
        additives: 'Minimal (trace minerals)',
        labTest: 'Stated third-party',
        packaging: 'Standard Bottle'
      },
      labResults: {
        fulvicAcid: 'Not disclosed',
        heavyMetals: 'Third-party tested',
        microbial: 'Clean',
        authenticity: 'Himalayan source (region unclear)'
      },
      pros: ['High potency claimed', 'Organic certification', 'Good value (90 caps)', 'Third-party tested'],
      cons: ['No fulvic acid % disclosed', 'Vague sourcing details', 'Potency claims unverified'],
      url: 'https://example.com/thinbi-capsules',
      image: '/src/assets/products/capsules-4.jpg'
    },
    {
      id: 5,
      name: 'Carlyle Shilajit Capsules',
      rating: 4.3,
      price: '$30.00',
      priceCategory: "high",
      description: '2000mg per serving, non-GMO, marketed for stress and energy support. No fulvic acid percentage or origin disclosed. While serving size appears high, lack of quality data makes it difficult to assess true value.',
      metrics: {
        purity: 'Good (serving size high)',
        potency: 'Moderate',
        additives: 'Not clear',
        labTest: 'Not disclosed',
        packaging: 'Standard Bottle'
      },
      labResults: {
        fulvicAcid: 'Not disclosed',
        heavyMetals: 'Not disclosed',
        microbial: 'Not disclosed',
        authenticity: 'Origin not declared'
      },
      pros: ['High serving size (2000mg)', 'Non-GMO', 'Good for stress/energy', '90 capsules'],
      cons: ['No lab test disclosure', 'No fulvic acid data', 'Origin unknown', 'Quality transparency lacking'],
      url: 'https://example.com/carlyle-capsules',
      image: '/src/assets/products/capsules-5.jpg'
    }
  ]);

  // Function to handle rating updates
  const handleRatingUpdate = (productId, newRating) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, rating: newRating }
          : product
      )
    );
  };

  // Function to get price category styling
  const getPriceCategoryStyle = (category) => {
    switch (category) {
      case 'high':
        return { color: '#dc2626', label: 'Overpriced' }; // red-600
      case 'optimal':
        return { color: '#16a34a', label: 'Best Value' }; // green-600  
      case 'budget':
        return { color: '#dc2626', label: 'Budget' }; // red-600
      default:
        return { color: '#4b5563', label: 'Unknown' }; // gray-600
    }
  };

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
        return product.rating >= 4.3;
      case 'budget':
        return parseFloat(product.price.replace('$', '')) < 25;
      case 'beginner':
        return product.metrics.additives === 'Minimal';
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
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            #2 Ranked
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Capsules: Convenience Meets Potency
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive analysis of Shilajit capsules, the perfect balance of convenience and effectiveness. See how the top brands compare in our detailed review.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img
            src="/src/assets/capsules.jpg"
            alt="Shilajit Capsules"
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
            <div className="pros-card pros-cons-card">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Pros of Shilajit Capsules</h3>
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

            <div className="cons-card pros-cons-card">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cons of Shilajit Capsules</h3>
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
                  <option value="beginner">Minimal Additives</option>
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
                        <AdminRating 
                          rating={product.rating}
                          totalRatings={product.id === 1 ? 592 : product.id === 2 ? 178 : product.id === 3 ? 134 : product.id === 4 ? 98 : 76}
                          size="lg"
                          editable={true}
                          onRatingChange={(newRating) => handleRatingUpdate(product.id, newRating)}
                        />
                        <span className="text-2xl font-bold text-gray-900">
                          <span style={{ color: getPriceCategoryStyle(product.priceCategory).color }}>({getPriceCategoryStyle(product.priceCategory).label})</span>
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mt-4">{product.description}</p>
                    </div>
                    <div className="ml-6 flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg" />
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

        {/* Price Disclaimer */}
      <div className="price-disclaimer mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Price Category Disclaimer</h3>
        <p className="text-gray-700">
          Price categories (Budget, Best Value, Overpriced) help you understand the general pricing tier without showing specific prices. Since prices vary across different retailers and change frequently, we focus on whether a product offers good value for its quality level. Our "Best Value" category represents products that offer the best balance of quality and affordability based on our extensive testing and analysis.
        </p>
      </div>        {/* Price Legend */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Price Category Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
              <span className="text-green-600 font-bold">Best Value</span>
              <span className="text-gray-600">- Best value for quality</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="text-red-600 font-bold">Overpriced</span>
              <span className="text-gray-600">- High-end products</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="text-red-600 font-bold">Budget Price</span>
              <span className="text-gray-600">- Entry-level options</span>
            </div>
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

export default CapsulesPage;

