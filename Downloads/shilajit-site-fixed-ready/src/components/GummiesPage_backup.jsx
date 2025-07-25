import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, CheckCircle, XCircle, Filter, SortAsc, ExternalLink } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import AdminRating from './AdminRating';

const ResinPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const breadcrumbItems = [
    { label: 'Shilajit Formats', href: '/#rankings' },
    { label: 'Resin' }
  ];

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Shilaheal Shilajit Resin',
      rating: 4.9,
      price: '$59.99',
      priceCategory: 'optimal',
      description: 'Premium Shilajit resin sourced directly from Ladakh, India. Personally controlled collection and packaging process ensures maximum purity and potency. Each 60g jar provides exceptional value at just $1.00 per gram, significantly outperforming competitors while maintaining premium quality standards.',
      metrics: {
        purity: 'Exceptional',
        potency: 'Maximum',
        taste: 'Authentic',
        labTest: 'Verified Clean',
        packaging: 'Premium Glass'
      },
      labResults: {
        fulvicAcid: '15.2%',
        heavyMetals: 'Below detection limits',
        microbial: 'Sterile',
        authenticity: 'Verified Ladakh source'
      },
      pros: ['Direct Ladakh sourcing', 'Personal quality control', 'Premium packaging', 'Best price per gram', 'Transparent origin'],
      cons: ['Limited availability', 'Strong traditional taste'],
      url: 'https://shilaheal.com/shilajit-resin',
      image: '/src/assets/shilajit_resin_unique.jpg'
    },
    {
      id: 2,
      name: 'The Himalayan Healing Shilajit',
      rating: 4.6,
      price: '$64.99',
      priceCategory: 'optimal',
      description: 'Traditional Shilajit resin with Indian heritage. 50g jar offers good value at $1.30 per gram. While quality is decent, the branding feels outdated and documentation is sometimes lacking compared to more transparent competitors.',
      metrics: {
        purity: 'Good',
        potency: 'High',
        taste: 'Traditional',
        labTest: 'Good',
        packaging: 'Standard'
      },
      labResults: {
        fulvicAcid: '12.8%',
        heavyMetals: 'Within safe limits',
        microbial: 'Clean',
        authenticity: 'Himalayan source'
      },
      pros: ['Traditional approach', 'Good potency', 'Reasonable price per gram'],
      cons: ['Outdated branding', 'Inconsistent documentation', 'Less transparent sourcing'],
      url: 'https://example.com/himalayan-healing',
      image: '/src/assets/shilajit_resin_unique.jpg'
    },
    {
      id: 3,
      name: 'Upakarma Pure Shilajit Resin',
      rating: 4.4,
      price: '$49.99',
      priceCategory: 'optimal',
      description: 'Popular Ayurvedic brand from India offering 30g of Shilajit resin at $1.67 per gram. While quality is acceptable, the mass-market approach lacks the personal touch and premium packaging of boutique brands.',
      metrics: {
        purity: 'Good',
        potency: 'Good',
        taste: 'Standard',
        labTest: 'Good',
        packaging: 'Basic'
      },
      labResults: {
        fulvicAcid: '11.5%',
        heavyMetals: 'Within safe limits',
        microbial: 'Clean',
        authenticity: 'Indian source'
      },
      pros: ['Established brand', 'Ayurvedic tradition', 'Widely available'],
      cons: ['Mass-market approach', 'Basic packaging', 'No founder control over supply'],
      url: 'https://example.com/upakarma',
      image: '/src/assets/shilajit_resin_unique.jpg'
    },
    {
      id: 4,
      name: 'Norwegian Biolabs Shilajit',
      rating: 4.2,
      price: '$69.95',
      priceCategory: 'high',
      description: 'Ultra-premium positioned resin in minimalist black jar with silver spoon. At $2.33 per gram for 30g, the price is steep. Origin is not clearly specified, and lack of transparency about production process raises questions about authenticity.',
      metrics: {
        purity: 'Good',
        potency: 'Good',
        taste: 'Processed',
        labTest: 'Good',
        packaging: 'Premium'
      },
      labResults: {
        fulvicAcid: '10.8%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Unclear origin'
      },
      pros: ['Premium packaging', 'Minimalist design', 'Includes silver spoon'],
      cons: ['Unclear origin', 'Extremely high price', 'Lack of production transparency'],
      url: 'https://example.com/norwegian-biolabs',
      image: '/src/assets/shilajit_resin_unique.jpg'
    },
    {
      id: 5,
      name: 'Xara Shilajit Resin',
      rating: 4.0,
      price: '$74.99',
      priceCategory: 'high',
      description: 'Ayurvedic-positioned premium resin from Nepal at $2.50 per gram for 30g. While marketing promises are abundant, concrete details about sourcing and processing are scarce. The high price is not justified by the quality delivered.',
      metrics: {
        purity: 'Acceptable',
        potency: 'Good',
        taste: 'Variable',
        labTest: 'Acceptable',
        packaging: 'Decorative'
      },
      labResults: {
        fulvicAcid: '9.8%',
        heavyMetals: 'Within safe limits',
        microbial: 'Clean',
        authenticity: 'Nepal source (region unclear)'
      },
      pros: ['Ayurvedic positioning', 'Decorative packaging', 'Nepal sourcing'],
      cons: ['Vague sourcing details', 'High price for quality', 'More marketing than substance'],
      url: 'https://example.com/xara-shilajit',
      image: '/src/assets/shilajit_resin_unique.jpg'
    },
    {
      id: 6,
      name: 'Cymbiotika Shilajit Resin',
      rating: 3.8,
      price: '$48.00',
      priceCategory: 'high',
      description: 'Futuristic American luxury brand offering only 15g at an extreme $3.20 per gram. Made in USA with unclear raw material sourcing. The technological luxury approach may not appeal to traditional Shilajit users seeking authentic, natural products.',
      metrics: {
        purity: 'Good',
        potency: 'Moderate',
        taste: 'Processed',
        labTest: 'Good',
        packaging: 'Futuristic'
      },
      labResults: {
        fulvicAcid: '8.5%',
        heavyMetals: 'Below detection limits',
        microbial: 'Sterile',
        authenticity: 'USA processed (unclear raw source)'
      },
      pros: ['Futuristic design', 'American quality standards', 'Sterile processing'],
      cons: ['Extremely high price', 'Tiny quantity (15g)', 'Unclear raw material source', 'Over-processed'],
      url: 'https://example.com/cymbiotika',
      image: '/src/assets/shilajit_resin_unique.jpg'
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

  // Function to get price category styling
  const getPriceCategoryStyle = (category) => {
    switch (category) {
      case 'high':
        return 'text-red-600 font-bold';
      case 'optimal':
        return 'text-green-600 font-bold';
      case 'low':
        return 'text-red-600 font-bold';
      default:
        return 'text-gray-600 font-bold';
    }
  };

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
            src="/src/assets/shilajit_resin_unique.jpg"
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
                        <AdminRating 
                          rating={product.rating}
                          totalRatings={10}
                          size="lg"
                          editable={true}
                          onRatingChange={(newRating) => handleRatingUpdate(product.id, newRating)}
                        />
                        <span className={`text-2xl ${getPriceCategoryStyle(product.priceCategory)}`}>
                          {product.price}
                          <span className="text-sm ml-1">
                            ({product.priceCategory === 'optimal' ? 'Best Value' : 
                              product.priceCategory === 'high' ? 'Premium' : 'Budget'})
                          </span>
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

        {/* Price Legend */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Price Category Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
              <span className="text-green-600 font-bold">Optimal Price</span>
              <span className="text-gray-600">- Best value for quality</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="text-red-600 font-bold">Premium Price</span>
              <span className="text-gray-600">- High-end products</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="text-red-600 font-bold">Budget Price</span>
              <span className="text-gray-600">- Entry-level options</span>
            </div>
          </div>
        </div>

        {/* Price Disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Price Category Disclaimer</h3>
          <p className="text-gray-700">
            Price categories (Budget, Optimal, Premium) are determined not only by the actual cost but also by the overall quality, 
            purity, and value of the product. A higher price doesn't always indicate better quality, and conversely, a lower price 
            doesn't necessarily mean poor quality. Our "Optimal" category represents what we believe offers the best balance of 
            quality and value based on our extensive testing and analysis.
          </p>
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

export default ResinPage;

