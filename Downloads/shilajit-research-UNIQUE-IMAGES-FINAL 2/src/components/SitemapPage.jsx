import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Package, HelpCircle, Scale, Home } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import SEOHead from './SEOHead';

const SitemapPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Sitemap' }
  ];

  const siteStructure = [
    {
      title: 'Main Pages',
      icon: <Home className="w-5 h-5" />,
      pages: [
        { name: 'Home', path: '/', description: 'Independent Shilajit research and product rankings' },
        { name: 'Product Comparison', path: '/comparison', description: 'Side-by-side comparison of top Shilajit products' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions about Shilajit' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation and structure' }
      ]
    },
    {
      title: 'Product Reviews',
      icon: <Package className="w-5 h-5" />,
      pages: [
        { name: 'Shilajit Resin Reviews', path: '/resin', description: 'Comprehensive reviews of the best Shilajit resin products' },
        { name: 'Shilajit Capsule Reviews', path: '/capsules', description: 'In-depth analysis of top Shilajit capsule brands' },
        { name: 'Shilajit Gummy Reviews', path: '/gummies', description: 'Reviews of the most popular Shilajit gummy products' }
      ]
    },
    {
      title: 'Research & Articles',
      icon: <FileText className="w-5 h-5" />,
      pages: [
        { name: 'Research Articles', path: '/articles', description: 'Evidence-based articles about Shilajit science and benefits' }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap - Independent Shilajit Research",
    "description": "Complete site navigation for Independent Shilajit Research. Find all product reviews, research articles, and resources.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.href ? `https://shilajit-research.com${item.href}` : undefined
      }))
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Sitemap - Complete Site Navigation"
        description="Complete site navigation for Independent Shilajit Research. Find all product reviews, research articles, FAQ, and comparison tools."
        keywords="sitemap, site navigation, shilajit reviews, shilajit research, product comparison"
        canonicalUrl="/sitemap"
        structuredData={structuredData}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Site Navigation
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete navigation of all pages and resources on Independent Shilajit Research.
          </p>
        </div>

        {/* Site Structure */}
        <div className="space-y-8">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex-1">
                        <Link
                          to={page.path}
                          className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          {page.name}
                        </Link>
                        <p className="text-gray-600 mt-1">{page.description}</p>
                        <div className="text-sm text-gray-400 mt-2">
                          Path: <code className="bg-gray-100 px-2 py-1 rounded">{page.path}</code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Site Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {siteStructure.reduce((total, section) => total + section.pages.length, 0)}
              </div>
              <div className="text-gray-600">Total Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">Product Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Independent Reviews</div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Check our comprehensive FAQ section for answers to common questions.
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View FAQ
              </Link>
            </div>
            <div className="text-center">
              <Scale className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compare Products</h3>
              <p className="text-gray-600 mb-4">
                Use our comparison tool to find the best Shilajit for your needs.
              </p>
              <Link
                to="/comparison"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Compare Now
              </Link>
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

export default SitemapPage;

