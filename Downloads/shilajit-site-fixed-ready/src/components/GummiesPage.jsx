import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, CheckCircle, XCircle, Filter, SortAsc } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import AdminRating from './AdminRating';

const GummiesPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const breadcrumbItems = [
    { label: 'Shilajit Formats', href: '/#rankings' },
    { label: 'Gummies' }
  ];

  const pros = [
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Pleasant Taste Experience',
      description: 'Masks the strong earthy flavor of Shilajit with palatable flavors, making it more enjoyable to consume.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Easy to Take',
      description: 'No water needed, making them convenient for on-the-go use and ideal for those who struggle with pills.'
    },
    {
      icon: <CheckCircle className="icon-benefit" />,
      title: 'Consistent Dosing',
      description: 'Each gummy contains a standardized amount of Shilajit, ensuring reliable dosing every time.'
    }
  ];

  const cons = [
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Added Sugars',
      description: 'Most gummies contain sweeteners and flavorings that may not be ideal for those monitoring sugar intake.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Lower Potency',
      description: 'Generally contain less Shilajit per serving compared to resins or capsules due to formulation constraints.'
    },
    {
      icon: <XCircle className="icon-drawback" />,
      title: 'Additional Ingredients',
      description: 'Require more additives than other formats, potentially diluting the purity of the Shilajit.'
    }
  ];

  const useCases = [
    {
      title: 'For Taste-Sensitive Users',
      description: 'Perfect for those who find the natural taste of Shilajit unpleasant but still want its benefits.'
    },
    {
      title: 'Supplement Beginners',
      description: 'An approachable entry point for those new to Shilajit or natural supplements in general.'
    },
    {
      title: 'Convenience-Focused',
      description: 'Ideal for busy individuals who prefer a quick, enjoyable supplement experience without preparation.'
    }
  ];

    const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Organifi Shilajit Gummies',
      rating: 4.9,
      totalRatings: 423,
      price: '$44.99',
      priceCategory: "optimal",
      description: 'Premium organic gummies with 250mg pure Shilajit extract per serving. Certified organic ingredients with 80% fulvic acid content. Third-party tested for purity and potency. Natural fruit flavors with no artificial additives.',
      metrics: {
        purity: 'Exceptional (80% Fulvic Acid)',
        potency: 'Maximum',
        additives: 'Organic only',
        labTest: 'Third-party certified',
        packaging: 'Premium Glass Bottle'
      },
      image: '/src/assets/products/gummies-1.jpg',
      url: 'https://example.com/organifi-gummies'
    },
    {
      id: 2,
      name: 'Shilaheal Shilajit Gummies',
      rating: 4.9,
      totalRatings: 389,
      price: '$39.99',
      priceCategory: "optimal",
      description: 'Premium gummies with 200mg pure Shilajit resin extract per serving. Natural fruit flavors with 75% fulvic acid content. Lab-tested by Eurofins with full traceability to Ladakh, India. No artificial colors or high-fructose corn syrup.',
      metrics: {
        purity: 'Excellent (75% Fulvic Acid)',
        potency: 'Maximum',
        additives: 'Natural flavors only',
        labTest: 'Eurofins Certified',
        packaging: 'Premium Bottle'
      },
      image: '/src/assets/products/gummies-2.jpg',
      url: 'https://www.amazon.com/Shilajit-Natural-Himalayan-Gummies-Minerals/dp/B0FD41L37M'
    },
    {
      id: 3,
      name: 'NutroTonic® Organic Himalayan Shilajit Gummies',
      rating: 4.7,
      totalRatings: 156,
      price: '$59.99',
      priceCategory: "high",
      description: 'Premium organic Himalayan Shilajit gummies with 300mg extract per serving. Certified organic and sustainably sourced. High-end packaging and premium ingredients justify the higher price point.',
      metrics: {
        purity: 'Excellent (78% Fulvic Acid)',
        potency: 'High',
        additives: 'Organic certified',
        labTest: 'Organic certified',
        packaging: 'Luxury Packaging'
      },
      image: '/src/assets/products/gummies-3.jpg',
      url: 'https://example.com/nutrotonic-gummies'
    }
  ]);;

  const handleRatingUpdate = (productId, newRating) => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, rating: newRating } : product
    ));
  };

  const getPriceCategoryStyle = (category) => {
    switch (category) {
      case 'high':
        return { color: '#dc2626', label: 'Overpriced' };
      case 'optimal':
        return { color: '#16a34a', label: 'Best Value' };
      case 'budget':
        return { color: '#dc2626', label: 'Budget' };
      default:
        return { color: '#6b7280', label: 'Not specified' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            #3 Ranked
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Gummies: Taste Meets Function
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive analysis of Shilajit gummies, the most palatable way to enjoy this ancient supplement. See how the leading brands compare in our detailed review.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img
            src="/src/assets/gummies.jpg"
            alt="Shilajit Gummies"
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
                <h3 className="text-2xl font-bold text-gray-900">Pros of Shilajit Gummies</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">Cons of Shilajit Gummies</h3>
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
          <div className="section-divider pt-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ideal Use Cases for Shilajit Gummies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <div className="section-divider pt-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Top Shilajit Gummy Products Reviewed
            </h2>
          </div>

          {/* Product Cards */}
          <div className="space-y-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Product Image */}
                    <div className="flex-shrink-0 mb-6 lg:mb-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                          <div className="flex items-center space-x-4 mb-2">
                            <AdminRating 
                              rating={product.rating} 
                              totalRatings={product.totalRatings}
                              onRatingChange={(newRating) => handleRatingUpdate(product.id, newRating)}
                            />
                            <span className="text-2xl font-bold text-gray-900">
                              <span style={{ color: getPriceCategoryStyle(product.priceCategory).color }}>({getPriceCategoryStyle(product.priceCategory).label})</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <a
                            href={product.url || "#"}
                            target={product.url ? "_blank" : "_self"}
                            rel={product.url ? "noopener noreferrer" : ""}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                          >
                            View Product
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Purity</div>
                          <div className="font-semibold text-gray-900">{product.metrics.purity}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Potency</div>
                          <div className="font-semibold text-gray-900">{product.metrics.potency}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Additives</div>
                          <div className="font-semibold text-gray-900">{product.metrics.additives}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Lab Test</div>
                          <div className="font-semibold text-gray-900">{product.metrics.labTest}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Packaging</div>
                          <div className="font-semibold text-gray-900">{product.metrics.packaging}</div>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      <button
                        onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                        className="w-full flex items-center justify-center px-4 py-2 bg-gray-50 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        Detailed Lab Results & Analysis
                        {expandedProduct === product.id ? (
                          <ChevronUp className="ml-2 w-4 h-4" />
                        ) : (
                          <ChevronDown className="ml-2 w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Price Category Disclaimer */}
        <section className="mb-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Price Category Disclaimer</h3>
          <p className="text-sm text-gray-700">
            Price categories (Budget, Best Value, Overpriced) help you understand the general pricing tier without showing specific prices. 
            Since prices vary across different retailers and change frequently, we focus on whether a product offers good value for its quality level. 
            Our "Best Value" category represents products that offer the best balance of quality and affordability based on our extensive testing and analysis.
          </p>
        </section>

        {/* Price Category Guide */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Price Category Guide
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Best Value - Best value for quality</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Overpriced - High-end products</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Budget Price - Entry-level options</span>
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

export default GummiesPage;
