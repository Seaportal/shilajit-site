import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, CheckCircle, XCircle, Filter, SortAsc } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import AdminRating from './AdminRating';

const SticksPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const breadcrumbItems = [
    { label: 'Shilajit Formats', href: '/#rankings' },
    { label: 'Sticks' }
  ];

  const pros = [
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Ultimate Convenience',
      description: 'Single-serve packets are perfect for travel and on-the-go use with no measuring required.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Precise Dosing',
      description: 'Each stick contains a pre-measured amount of Shilajit, ensuring consistent dosage every time.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Extended Shelf Life',
      description: 'Individual packaging protects each dose from air and moisture, maintaining potency longer.'
    }
  ];

  const cons = [
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Higher Cost Per Dose',
      description: 'The convenience of individual packaging typically comes with a premium price compared to bulk formats.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Additional Processing',
      description: 'Often requires more processing to create the stick format, potentially affecting purity.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Environmental Impact',
      description: 'Individual packaging creates more waste compared to bulk containers of resin, capsules, or tablets.'
    }
  ];

  const useCases = [
    {
      title: 'For Frequent Travelers',
      description: 'Ideal for those who travel often and need a convenient, mess-free way to take Shilajit on the go.'
    },
    {
      title: 'Busy Professionals',
      description: 'Perfect for those with hectic schedules who value convenience and quick administration.'
    },
    {
      title: 'New Users',
      description: 'Great for beginners who want to try Shilajit without committing to a larger quantity.'
    }
  ];

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'PureHimalayan Shilajit Sticks',
      rating: 3.9,
      price: '$34.99',
      priceCategory: 'high',
      description: 'Box of 30 individual sticks, each containing 250mg of purified Shilajit extract. These sticks dissolve quickly in water and have a mild taste compared to pure resin.',
      metrics: {
        purity: 'Good',
        potency: 'Moderate',
        taste: 'Mild',
        convenience: 'Excellent',
        packaging: 'Premium Box'
      },
      labResults: {
        fulvicAcid: '6.8%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Himalayan source'
      },
      pros: ['Extremely convenient', 'Mild taste', 'Travel-friendly'],
      cons: ['Higher cost per dose', 'Moderate potency', 'Some processing required'],
      url: 'https://example.com/purehimalayan-sticks',
      image: '/src/assets/sticks.jpg'
    },
    {
      id: 2,
      name: 'Mountain Extract Shilajit Packets',
      rating: 4.0,
      price: '$29.99',
      priceCategory: 'optimal',
      description: 'Box of 20 premium sticks with 300mg of Shilajit extract per packet. These dissolve well in both hot and cold liquids and have minimal additives compared to other stick formats.',
      metrics: {
        purity: 'High',
        potency: 'Good',
        taste: 'Moderate',
        convenience: 'Excellent',
        packaging: 'Eco-Friendly Box'
      },
      labResults: {
        fulvicAcid: '7.5%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified source'
      },
      pros: ['Higher potency', 'Eco-friendly packaging', 'Good dissolution'],
      cons: ['Stronger taste', 'Limited availability', 'Premium price'],
      url: 'https://example.com/mountain-extract-packets',
      image: '/src/assets/sticks.jpg'
    },
    {
      id: 3,
      name: 'Organic Shilajit Travel Sticks',
      rating: 3.8,
      price: '$26.99',
      priceCategory: 'optimal',
      description: 'Box of 25 organic certified sticks with 200mg of Shilajit extract each. These sticks use minimal processing and organic ingredients but have a stronger taste profile.',
      metrics: {
        purity: 'Excellent',
        potency: 'Moderate',
        taste: 'Strong',
        convenience: 'Very Good',
        packaging: 'Recyclable'
      },
      labResults: {
        fulvicAcid: '6.2%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Organic certified'
      },
      pros: ['Organic certification', 'Minimal processing', 'Recyclable packaging'],
      cons: ['Strong taste', 'Lower dose per stick', 'Higher price per mg'],
      url: 'https://example.com/organic-travel-sticks',
      image: '/src/assets/sticks.jpg'
    },
    {
      id: 4,
      name: 'Value Shilajit Sticks',
      rating: 3.5,
      price: '$19.99',
      priceCategory: 'low',
      description: 'Box of 15 budget-friendly sticks with 200mg of Shilajit extract each. These sticks contain more additives than premium options but offer good value for those trying stick format.',
      metrics: {
        purity: 'Acceptable',
        potency: 'Moderate',
        taste: 'Mild',
        convenience: 'Good',
        packaging: 'Standard'
      },
      labResults: {
        fulvicAcid: '5.1%',
        heavyMetals: 'Within safe limits',
        microbial: 'Clean',
        authenticity: 'Verified source'
      },
      pros: ['Budget-friendly', 'Mild taste', 'Good for beginners'],
      cons: ['More additives', 'Lower fulvic acid', 'Basic packaging'],
      url: 'https://example.com/value-sticks',
      image: '/src/assets/sticks.jpg'
    },
    {
      id: 5,
      name: 'Premium Altai Shilajit Sticks',
      rating: 4.1,
      price: '$39.99',
      priceCategory: 'high',
      description: 'Box of 30 premium sticks sourced from the Altai mountains, each containing 350mg of Shilajit extract. These sticks have a unique mineral profile and dissolve quickly.',
      metrics: {
        purity: 'High',
        potency: 'High',
        taste: 'Moderate',
        convenience: 'Excellent',
        packaging: 'Premium'
      },
      labResults: {
        fulvicAcid: '8.3%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Altai source'
      },
      pros: ['Highest potency in stick format', 'Unique mineral profile', 'Fast dissolution'],
      cons: ['Premium price', 'Limited availability', 'Moderate taste intensity'],
      url: 'https://example.com/premium-altai-sticks',
      image: '/src/assets/sticks.jpg'
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
        return product.rating >= 4.0;
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
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            #5 Ranked
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Sticks: Ultimate Convenience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive analysis of Shilajit sticks, the most convenient on-the-go format. See how the leading brands compare in our detailed review.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img
            src="/src/assets/sticks.jpg"
            alt="Shilajit Sticks"
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
                <h3 className="text-2xl font-bold text-gray-900">Pros of Shilajit Sticks</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">Cons of Shilajit Sticks</h3>
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
            Ideal Use Cases for Shilajit Sticks
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
              Top Shilajit Stick Products Reviewed
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
                  <option value="premium">Premium (4.0+ stars)</option>
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
                          totalRatings={198}
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
                      className="ml-6 inline-flex items-center px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors duration-200"
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
                          value === 'Good' || value === 'Very Good' ? 'text-blue-600' :
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

export default SticksPage;

