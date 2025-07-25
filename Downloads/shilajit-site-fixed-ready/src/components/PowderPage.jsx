import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, CheckCircle, XCircle, Filter, SortAsc } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import AdminRating from './AdminRating';

const PowderPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const breadcrumbItems = [
    { label: 'Shilajit Formats', href: '/#rankings' },
    { label: 'Powder' }
  ];

  const getPriceCategoryStyle = (category) => {
    switch (category) {
      case 'optimal':
        return 'text-green-600 font-bold';
      case 'high':
        return 'text-red-600 font-bold';
      case 'budget':
        return 'text-red-600 font-bold';
      default:
        return 'text-gray-600 font-bold';
    }
  };

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
      title: 'Flexible Dosing',
      description: 'Powder format allows for precise measurement and customization of dosage based on individual needs.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Easy Mixing',
      description: 'Can be easily mixed into beverages, smoothies, or foods for those who prefer not to take supplements directly.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Cost-Effective',
      description: 'Generally offers more servings per dollar compared to capsules, tablets, or sticks.'
    }
  ];

  const cons = [
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Messy Handling',
      description: 'Powder can be messy to measure and use, especially when traveling or on-the-go.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Strong Taste',
      description: 'The earthy flavor is more noticeable in powder form and may be difficult to mask completely.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Requires Measuring',
      description: 'Needs a scale or measuring spoon for accurate dosing, adding an extra step to the process.'
    }
  ];

  const useCases = [
    {
      title: 'For Smoothie Enthusiasts',
      description: 'Perfect for those who regularly make smoothies or protein shakes and want to incorporate Shilajit easily.'
    },
    {
      title: 'Budget-Conscious Users',
      description: 'Ideal for those looking for the most cost-effective way to incorporate Shilajit into their routine.'
    },
    {
      title: 'Customized Dosing',
      description: 'Best for those who prefer to adjust their dosage precisely based on their specific needs.'
    }
  ];

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'PureHimalayan Shilajit Powder',
      rating: 3.5,
      price: '$24.99',
      priceCategory: 'optimal',
      description: '50g jar of fine Shilajit powder with good fulvic acid content. This powder dissolves well in warm liquids and has a relatively mild taste compared to other powders.',
      metrics: {
        purity: 'Good',
        potency: 'Moderate',
        taste: 'Mild for powder',
        dissolution: 'Good',
        packaging: 'Glass Jar'
      },
      labResults: {
        fulvicAcid: '6.5%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Himalayan source'
      },
      pros: ['Cost-effective', 'Includes measuring spoon', 'Good dissolution'],
      cons: ['Moderate potency', 'Some clumping if exposed to moisture', 'Earthy taste'],
      url: 'https://example.com/purehimalayan-powder',
      image: '/src/assets/powder.jpg'
    },
    {
      id: 2,
      name: 'Organic Mountain Shilajit Powder',
      rating: 3.7,
      price: '$29.99',
      priceCategory: 'optimal',
      description: '40g jar of organic certified Shilajit powder with higher fulvic acid content. This powder is finely milled for better dissolution and comes in an airtight container.',
      metrics: {
        purity: 'Excellent',
        potency: 'Good',
        taste: 'Strong',
        dissolution: 'Excellent',
        packaging: 'Airtight Jar'
      },
      labResults: {
        fulvicAcid: '7.8%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Organic certified'
      },
      pros: ['Organic certification', 'Higher fulvic acid', 'Fine texture'],
      cons: ['Strong taste', 'Higher price point', 'Smaller quantity'],
      url: 'https://example.com/organic-mountain-powder',
      image: '/src/assets/powder.jpg'
    },
    {
      id: 3,
      name: 'Premium Altai Shilajit Powder',
      rating: 3.6,
      price: '$32.99',
      priceCategory: 'high',
      description: '60g jar of Shilajit powder sourced from the Altai mountains with a unique mineral profile. This powder is processed at low temperatures to preserve bioactive compounds.',
      metrics: {
        purity: 'High',
        potency: 'High',
        taste: 'Moderate',
        dissolution: 'Good',
        packaging: 'Premium Jar'
      },
      labResults: {
        fulvicAcid: '8.1%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Altai source'
      },
      pros: ['Unique mineral profile', 'Low-temperature processing', 'Larger quantity'],
      cons: ['Premium price', 'Limited availability', 'Moderate dissolution time'],
      url: 'https://example.com/premium-altai-powder',
      image: '/src/assets/powder.jpg'
    },
    {
      id: 4,
      name: 'Value Shilajit Powder',
      rating: 3.2,
      price: '$19.99',
      priceCategory: 'low',
      description: '75g pouch of budget-friendly Shilajit powder. This powder has lower fulvic acid content but offers good value for those looking to try Shilajit powder without a large investment.',
      metrics: {
        purity: 'Acceptable',
        potency: 'Low',
        taste: 'Strong',
        dissolution: 'Moderate',
        packaging: 'Resealable Pouch'
      },
      labResults: {
        fulvicAcid: '4.8%',
        heavyMetals: 'Within safe limits',
        microbial: 'Clean',
        authenticity: 'Verified source'
      },
      pros: ['Budget-friendly', 'Large quantity', 'Resealable packaging'],
      cons: ['Lower potency', 'Coarser texture', 'Strong taste'],
      url: 'https://example.com/value-powder',
      image: '/src/assets/powder.jpg'
    },
    {
      id: 5,
      name: 'Ultra-Fine Shilajit Powder',
      rating: 3.8,
      price: '$27.99',
      priceCategory: 'optimal',
      description: '45g jar of ultra-fine Shilajit powder specially processed for instant dissolution. This powder has good fulvic acid content and dissolves almost instantly in any liquid.',
      metrics: {
        purity: 'Good',
        potency: 'Good',
        taste: 'Moderate',
        dissolution: 'Excellent',
        packaging: 'Airtight Container'
      },
      labResults: {
        fulvicAcid: '7.2%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified source'
      },
      pros: ['Instant dissolution', 'No clumping', 'Precise measuring scoop included'],
      cons: ['Moderate quantity', 'Can be dusty when measuring', 'Moderate taste intensity'],
      url: 'https://example.com/ultra-fine-powder',
      image: '/src/assets/powder.jpg'
    }
  ]);

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
        return product.rating >= 3.7;
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4">
            #6 Ranked
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Powder: Flexibility & Value
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive analysis of Shilajit powder, offering customizable dosing and excellent value. See how the top brands compare in our detailed review.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img
            src="/src/assets/powder.jpg"
            alt="Shilajit Powder"
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
                <h3 className="text-2xl font-bold text-gray-900">Pros of Shilajit Powder</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">Cons of Shilajit Powder</h3>
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
            Ideal Use Cases for Shilajit Powder
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
              Top Shilajit Powder Products Reviewed
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
                  <option value="premium">Premium (3.7+ stars)</option>
                    <option value="budget">Budget (&lt;$25)</option>
                  <option value="organic">Organic Options</option>
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
                          totalRatings={234}
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
                      className="ml-6 inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
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
                          value === 'Good' || value === 'Mild for powder' ? 'text-blue-600' :
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
          </div>        {/* Price Legend */}
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

export default PowderPage;

