import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, CheckCircle, XCircle, Filter, SortAsc } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import AdminRating from './AdminRating';

const TabletsPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const breadcrumbItems = [
    { label: 'Shilajit Formats', href: '/#rankings' },
    { label: 'Tablets' }
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
      title: 'Precise Dosing',
      description: 'Each tablet contains an exact amount of Shilajit, ensuring consistent dosage with every use.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Extended Shelf Life',
      description: 'The compressed tablet format typically offers better stability and longer shelf life than other forms.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Convenient Travel Option',
      description: 'Tablets are easy to transport, require no refrigeration, and are less messy than resin formats.'
    }
  ];

  const cons = [
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Binding Agents Required',
      description: 'Tablets require binding agents and fillers to maintain their shape, potentially diluting purity.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Slower Dissolution',
      description: 'May take longer to break down in the digestive system compared to capsules or resin.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Taste Considerations',
      description: 'Some tablets have a noticeable earthy taste when dissolving, which may be unpleasant for some users.'
    }
  ];

  const useCases = [
    {
      title: 'For Regular Daily Users',
      description: 'Ideal for those who take Shilajit daily and appreciate the consistency and convenience of tablets.'
    },
    {
      title: 'Travel & On-The-Go',
      description: 'Perfect for frequent travelers who need a stable, non-messy format that requires no special storage.'
    },
    {
      title: 'Long-Term Storage',
      description: 'Best for those who stock up on supplements and need a format with extended shelf stability.'
    }
  ];

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Himalayan Gold Shilajit Tablets',
      rating: 4.2,
      price: '$26.99',
      priceCategory: 'optimal',
      description: 'These compressed tablets contain 500mg of purified Shilajit extract with good fulvic acid content. The tablets dissolve well and have minimal binding agents compared to competitors.',
      metrics: {
        purity: 'Good',
        potency: 'High',
        dissolution: 'Good',
        additives: 'Minimal',
        packaging: 'Amber Bottle'
      },
      labResults: {
        fulvicAcid: '8.5%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Himalayan source'
      },
      pros: ['High Shilajit content', 'Minimal fillers', 'Good dissolution rate'],
      cons: ['Slight earthy aftertaste', 'Premium pricing', 'Large tablet size'],
      url: 'https://example.com/himalayan-gold-tablets',
      image: '/src/assets/tablets.jpg'
    },
    {
      id: 2,
      name: 'PureHealth Shilajit Tablets',
      rating: 4.0,
      price: '$22.99',
      priceCategory: 'optimal',
      description: 'These tablets offer 400mg of Shilajit extract per serving with a good balance of quality and value. The tablets are coated to minimize the earthy taste and dissolve at a moderate rate.',
      metrics: {
        purity: 'Good',
        potency: 'Good',
        dissolution: 'Moderate',
        additives: 'Some',
        packaging: 'Plastic Bottle'
      },
      labResults: {
        fulvicAcid: '7.2%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified source'
      },
      pros: ['Coated for better taste', 'Good value', 'Consistent quality'],
      cons: ['Some binding agents', 'Moderate dissolution time', 'Plastic packaging'],
      url: 'https://example.com/purehealth-tablets',
      image: '/src/assets/tablets.jpg'
    },
    {
      id: 3,
      name: 'Organic Mountain Shilajit Tablets',
      rating: 4.3,
      price: '$29.99',
      priceCategory: 'optimal',
      description: 'These organic tablets contain 450mg of Shilajit extract with minimal organic binding agents. The tablets are uncoated for faster dissolution but do have a noticeable earthy taste.',
      metrics: {
        purity: 'Excellent',
        potency: 'High',
        dissolution: 'Fast',
        additives: 'Minimal Organic',
        packaging: 'Glass Bottle'
      },
      labResults: {
        fulvicAcid: '9.1%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Organic certified'
      },
      pros: ['Organic certification', 'Fast dissolution', 'High fulvic acid content'],
      cons: ['Strong earthy taste', 'Higher price point', 'Limited availability'],
      url: 'https://example.com/organic-mountain-tablets',
      image: '/src/assets/tablets.jpg'
    },
    {
      id: 4,
      name: 'Value Shilajit Tablets',
      rating: 3.7,
      price: '$17.99',
      priceCategory: 'low',
      description: 'An affordable option with 300mg of Shilajit extract per tablet. These tablets contain more binding agents than premium options but offer good value for those on a budget.',
      metrics: {
        purity: 'Acceptable',
        potency: 'Moderate',
        dissolution: 'Slow',
        additives: 'Several',
        packaging: 'Plastic Bottle'
      },
      labResults: {
        fulvicAcid: '5.8%',
        heavyMetals: 'Within safe limits',
        microbial: 'Clean',
        authenticity: 'Verified source'
      },
      pros: ['Budget-friendly', 'Small tablet size', 'Widely available'],
      cons: ['More fillers', 'Lower potency', 'Slower dissolution'],
      url: 'https://example.com/value-tablets',
      image: '/src/assets/tablets.jpg'
    },
    {
      id: 5,
      name: 'Premium Altai Shilajit Tablets',
      rating: 4.1,
      price: '$31.99',
      priceCategory: 'high',
      description: 'Sourced from the Altai mountains, these tablets contain 500mg of Shilajit extract with a unique mineral profile. The tablets are scored for easy splitting if a lower dose is desired.',
      metrics: {
        purity: 'High',
        potency: 'High',
        dissolution: 'Moderate',
        additives: 'Some',
        packaging: 'Premium Bottle'
      },
      labResults: {
        fulvicAcid: '8.7%',
        heavyMetals: 'Below detection limits',
        microbial: 'Clean',
        authenticity: 'Verified Altai source'
      },
      pros: ['Unique mineral profile', 'Scored tablets for flexible dosing', 'High potency'],
      cons: ['Premium price', 'Some binding agents', 'Limited availability'],
      url: 'https://example.com/premium-altai-tablets',
      image: '/src/assets/tablets.jpg'
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
        return product.rating >= 4.2;
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
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
            #4 Ranked
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Tablets: Stability & Precision
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive analysis of Shilajit tablets, offering consistent dosing and extended shelf life. See how the top brands compare in our detailed review.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img
            src="/src/assets/tablets.jpg"
            alt="Shilajit Tablets"
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
                <h3 className="text-2xl font-bold text-gray-900">Pros of Shilajit Tablets</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">Cons of Shilajit Tablets</h3>
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
            Ideal Use Cases for Shilajit Tablets
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
              Top Shilajit Tablet Products Reviewed
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
                  <option value="premium">Premium (4.2+ stars)</option>
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
                          totalRatings={312}
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
                      className="ml-6 inline-flex items-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
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
                          value === 'Excellent' || value === 'High' || value === 'Fast' ? 'text-green-600' :
                          value === 'Good' || value === 'Minimal' || value === 'Minimal Organic' ? 'text-blue-600' :
                          value === 'Moderate' || value === 'Acceptable' || value === 'Slow' ? 'text-yellow-600' :
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

export default TabletsPage;

