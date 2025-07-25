import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Independent Shilajit Research</h3>
            <p className="text-gray-300 text-sm">
              Providing unbiased, science-based analysis of Shilajit products to help consumers make informed decisions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/resin" className="text-gray-300 hover:text-white transition-colors">Resin Reviews</a></li>
              <li><a href="/capsules" className="text-gray-300 hover:text-white transition-colors">Capsule Reviews</a></li>
              <li><a href="/gummies" className="text-gray-300 hover:text-white transition-colors">Gummy Reviews</a></li>
              <li><a href="/articles" className="text-gray-300 hover:text-white transition-colors">Articles</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Research Standards</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Independent lab testing</li>
              <li>✓ Unbiased product analysis</li>
              <li>✓ Transparent methodology</li>
              <li>✓ Consumer-focused reviews</li>
            </ul>
          </div>
        </div>
        
        {/* Dietary Supplement Disclaimer */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">⚠️ Dietary Supplement Disclaimer</h4>
            <div className="text-sm text-gray-300 space-y-3">
              <p>
                <strong>FDA Statement:</strong> These statements have not been evaluated by the Food and Drug Administration. 
                The products reviewed on this website are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
              <p>
                <strong>Medical Advice:</strong> The information provided on this website is for educational and research purposes only. 
                It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice 
                of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
              <p>
                <strong>Individual Results:</strong> Results may vary from person to person. No individual results should be seen 
                as typical. Factors such as age, health condition, lifestyle, and individual body chemistry can affect outcomes.
              </p>
              <p>
                <strong>Product Safety:</strong> Before using any dietary supplement, especially if you are pregnant, nursing, 
                have a medical condition, or are taking medications, consult with your healthcare provider.
              </p>
              <p>
                <strong>Research Independence:</strong> This website maintains editorial independence. Product reviews and rankings 
                are based on scientific analysis, lab testing, and objective criteria, not commercial relationships.
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Independent Shilajit Research. All rights reserved.</p>
          <p className="mt-2">
            Committed to providing unbiased, science-based analysis for informed consumer decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

