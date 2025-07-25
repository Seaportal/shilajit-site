import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, CheckCircle, XCircle, Star } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import SEOHead from './SEOHead';

const ComparisonPage = () => {
  const [selectedFormat, setSelectedFormat] = useState('all');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Product Comparison' }
  ];

  const topProducts = [
    {
      id: 1,
      name: 'Shilaheal Shilajit Resin',
      format: 'resin',
      rating: 4.9,
      category: 'Best Value',
      fulvicAcid: '81%',
      source: 'Ladakh, India',
      labTested: true,
      thirdParty: 'Eurofins',
      packaging: 'Premium Glass',
      pros: ['Direct sourcing', 'Highest purity', 'Best price/gram', 'Full traceability'],
      cons: ['Strong taste', 'Messy application'],
      bestFor: 'Experienced users seeking maximum potency'
    },
    {
      id: 2,
      name: 'Shilaheal Shilajit Capsules',
      format: 'capsules',
      rating: 4.9,
      category: 'Best Value',
      fulvicAcid: '81%',
      source: 'Ladakh, India',
      labTested: true,
      thirdParty: 'Eurofins',
      packaging: 'Premium Bottle',
      pros: ['Convenient dosing', 'No taste', 'Resin extract', 'Travel-friendly'],
      cons: ['Slower absorption', 'Higher cost per mg'],
      bestFor: 'Busy professionals and beginners'
    },
    {
      id: 3,
      name: 'Shilaheal Shilajit Gummies',
      format: 'gummies',
      rating: 4.9,
      category: 'Best Value',
      fulvicAcid: '75%',
      source: 'Ladakh, India',
      labTested: true,
      thirdParty: 'Eurofins',
      packaging: 'Premium Bottle',
      pros: ['Pleasant taste', 'Easy to take', 'Natural flavors', 'No water needed'],
      cons: ['Lower concentration', 'Added ingredients', 'Higher cost'],
      bestFor: 'Taste-sensitive users and supplement beginners'
    },
    {
      id: 4,
      name: 'The Himalayan Healing Shilajit',
      format: 'resin',
      rating: 4.6,
      category: 'Budget',
      fulvicAcid: '12.8%',
      source: 'Himalayas',
      labTested: true,
      thirdParty: 'Basic',
      packaging: 'Standard',
      pros: ['Traditional approach', 'Good potency', 'Reasonable price'],
      cons: ['Outdated branding', 'Less transparency', 'Lower purity'],
      bestFor: 'Budget-conscious traditional users'
    },
    {
      id: 5,
      name: 'Youtheory Shilajit Capsules',
      format: 'capsules',
      rating: 4.5,
      category: 'Budget',
      fulvicAcid: 'Not disclosed',
      source: 'Not specified',
      labTested: true,
      thirdParty: 'PrimaVie',
      packaging: 'Standard',
      pros: ['Branded extract', 'USA made', 'Gentle on stomach'],
      cons: ['No purity data', 'Unclear source', 'Processed extract'],
      bestFor: 'Users preferring branded ingredients'
    }
  ];

  const formatComparison = [
    {
      aspect: 'Purity & Potency',
      resin: { score: 5, note: 'Highest concentration, minimal processing' },
      capsules: { score: 4, note: 'Good concentration, some processing required' },
      gummies: { score: 3, note: 'Lower concentration due to formulation constraints' }
    },
    {
      aspect: 'Convenience',
      resin: { score: 2, note: 'Messy, requires careful measurement' },
      capsules: { score: 5, note: 'Pre-measured, easy to take anywhere' },
      gummies: { score: 5, note: 'No water needed, pleasant experience' }
    },
    {
      aspect: 'Taste',
      resin: { score: 1, note: 'Strong, earthy, bitter taste' },
      capsules: { score: 5, note: 'No taste, bypasses flavor completely' },
      gummies: { score: 5, note: 'Pleasant fruit flavors mask earthiness' }
    },
    {
      aspect: 'Absorption Speed',
      resin: { score: 5, note: 'Fastest absorption, direct contact' },
      capsules: { score: 3, note: 'Delayed by capsule dissolution time' },
      gummies: { score: 3, note: 'Slower due to digestion process' }
    },
    {
      aspect: 'Value for Money',
      resin: { score: 5, note: 'Best cost per mg of active compounds' },
      capsules: { score: 4, note: 'Good value with convenience premium' },
      gummies: { score: 3, note: 'Higher cost due to additional ingredients' }
    }
  ];

  const filteredProducts = selectedFormat === 'all' 
    ? topProducts 
    : topProducts.filter(product => product.format === selectedFormat);

  const getScoreColor = (score) => {
    if (score >= 4) return 'text-green-600';
    if (score >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreStars = (score) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < score ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shilajit Product Comparison",
    "description": "Compare the best Shilajit products across different formats. Independent analysis of resin, capsules, and gummies.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": topProducts.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "bestRating": 5
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Shilajit Product Comparison - Best Brands Compared"
        description="Compare the top Shilajit products side by side. Independent analysis of resin, capsules, and gummies from leading brands. Find the best Shilajit for your needs."
        keywords="shilajit comparison, best shilajit brands, shilajit resin vs capsules, shilajit product review, compare shilajit, top rated shilajit"
        canonicalUrl="/comparison"
        structuredData={structuredData}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
            <Scale className="w-4 h-4 mr-2" />
            Side-by-Side Analysis
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Product Comparison
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare the top Shilajit products across different formats. Independent analysis to help you choose the best option for your needs.
          </p>
        </div>

        {/* Format Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedFormat('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedFormat === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedFormat('resin')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedFormat === 'resin'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Resin Only
            </button>
            <button
              onClick={() => setSelectedFormat('capsules')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedFormat === 'capsules'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Capsules Only
            </button>
            <button
              onClick={() => setSelectedFormat('gummies')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedFormat === 'gummies'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Gummies Only
            </button>
          </div>
        </div>

        {/* Product Comparison Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Rating</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Fulvic Acid</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Source</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Lab Testing</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500 capitalize">{product.format}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.category === 'Best Value' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">
                      {product.fulvicAcid}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {product.source}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        {product.labTested ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        <span className="ml-1 text-xs text-gray-500">{product.thirdParty}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {product.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Format Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Format Comparison: Resin vs Capsules vs Gummies
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Aspect</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Resin</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Capsules</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Gummies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {formatComparison.map((comparison, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {comparison.aspect}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="flex mb-1">
                            {getScoreStars(comparison.resin.score)}
                          </div>
                          <div className="text-xs text-gray-500 text-center">
                            {comparison.resin.note}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="flex mb-1">
                            {getScoreStars(comparison.capsules.score)}
                          </div>
                          <div className="text-xs text-gray-500 text-center">
                            {comparison.capsules.note}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="flex mb-1">
                            {getScoreStars(comparison.gummies.score)}
                          </div>
                          <div className="text-xs text-gray-500 text-center">
                            {comparison.gummies.note}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Choose Your Shilajit?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore detailed reviews of each product format to make an informed decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resin"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View Resin Reviews
            </Link>
            <Link
              to="/capsules"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              View Capsule Reviews
            </Link>
            <Link
              to="/gummies"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              View Gummy Reviews
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
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

export default ComparisonPage;

