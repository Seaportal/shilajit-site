import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Beaker, Users, Shield } from 'lucide-react';
import RatingStars from './RatingStars';

const HomePage = () => {
  const formats = [
    {
      id: 'resin',
      rank: 1,
      name: 'Resin',
      rating: 4.8,
      description: 'Considered the most traditional and potent form, often showcasing the highest fulvic acid content. Requires careful handling.',
      color: 'border-green-500 bg-green-50',
      badge: 'bg-green-100 text-green-800',
      image: '/src/assets/shilajit_resin_unique.jpg'
    },
    {
      id: 'capsules',
      rank: 2,
      name: 'Capsules',
      rating: 4.5,
      description: 'Convenient and precise dosing, ideal for those seeking ease of use. Purity depends heavily on source and processing.',
      color: 'border-blue-500 bg-blue-50',
      badge: 'bg-blue-100 text-blue-800',
      image: '/src/assets/shilajit_capsules_unique.jpg'
    },
    {
      id: 'gummies',
      rank: 3,
      name: 'Gummies',
      rating: 3.8,
      description: 'A palatable option for taste-sensitive individuals. Often contains added sugars and lower shilajit concentration.',
      color: 'border-orange-500 bg-orange-50',
      badge: 'bg-orange-100 text-orange-800',
      image: '/src/assets/shilajit_gummies_unique.jpg'
    },
    {
      id: 'tablets',
      rank: 4,
      name: 'Tablets',
      rating: 4.2,
      description: 'Similar to capsules in convenience, but may contain more binders and fillers affecting purity.',
      color: 'border-purple-500 bg-purple-50',
      badge: 'bg-purple-100 text-purple-800',
      image: '/src/assets/shilajit_tablets_unique.jpg'
    },
    {
      id: 'sticks',
      rank: 5,
      name: 'Sticks',
      rating: 3.9,
      description: 'Pre-portioned single-use doses, offering convenience but often at a premium price point.',
      color: 'border-teal-500 bg-teal-50',
      badge: 'bg-teal-100 text-teal-800',
      image: '/src/assets/shilajit_sticks_unique.jpg'
    },
    {
      id: 'powder',
      rank: 6,
      name: 'Powder',
      rating: 3.5,
      description: 'Versatile mixing option but often heavily processed. Lower concentration and potential for contamination.',
      color: 'border-red-500 bg-red-50',
      badge: 'bg-red-100 text-red-800',
      image: '/src/assets/shilajit_powder_unique.jpg'
    }
  ];

  const testingSteps = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Sample Acquisition',
      description: 'To ensure absolute impartiality, we anonymously purchase all Shilajit products from regular retail channels, just like any consumer. No free samples, no direct contact with brands.'
    },
    {
      icon: <Beaker className="w-8 h-8 text-blue-600" />,
      title: 'Lab Testing',
      description: 'Each sample undergoes rigorous analysis at independent, certified laboratories. We test for purity, heavy metal contamination (lead, mercury, arsenic, cadmium), microbial load, and crucially, guaranteed fulvic acid content.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Real-World Use',
      description: 'Beyond the lab, our expert panel evaluates practical aspects: ease of use, texture (for resins), taste profile, dissolve rate, packaging integrity, and perceived immediate effects over a controlled period.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="hero-title text-4xl lg:text-6xl text-gray-900 mb-6">
                Independent team. No sponsorships. 
                <span className="text-blue-600"> Just real research.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed fade-in-delay-1">
                We analyze Shilajit products with no bias — only facts. Empowering your health choices with transparent, scientifically-backed insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-2">
                <a
                  href="#rankings"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore the Rankings
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <div className="flex items-center space-x-4">
                  <span className="trust-badge">Lab Tested</span>
                  <span className="trust-badge">Independent</span>
                </div>
              </div>
            </div>
            <div className="relative fade-in-delay-1">
              <img
                src="/src/assets/hero-hand-shilajit.jpg"
                alt="Shilajit resin being measured"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Zero Bias Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 section-divider pt-8">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a dedicated team of health researchers, scientists, and wellness advocates passionate about natural supplements. Our diverse backgrounds in biochemistry, nutrition, and consumer advocacy converge to bring you the most accurate and unbiased information on Shilajit. We operate with full autonomy, free from corporate influence.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 section-divider pt-8">
                Why Trust Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to impartiality is paramount. Unlike many review sites, we accept no sponsorships, affiliate commissions from brands, or paid placements. Every product reviewed is anonymously purchased and rigorously tested in independent laboratories. Our findings are based purely on scientific analysis and real-world evaluation, ensuring you receive genuinely unbiased insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section id="rankings" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 section-divider pt-8">
              Shilajit Formats Ranked
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We compared all available forms — here's how they stack up based on our rigorous testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <Link
                key={format.id}
                to={format.id === 'tablets' || format.id === 'sticks' || format.id === 'powder' ? '#' : `/${format.id}`}
                className={`card-hover block p-6 rounded-xl border-2 ${format.color} transition-all duration-300 ${
                  format.id === 'tablets' || format.id === 'sticks' || format.id === 'powder' 
                    ? 'opacity-60 cursor-not-allowed' 
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => {
                  if (format.id === 'tablets' || format.id === 'sticks' || format.id === 'powder') {
                    e.preventDefault();
                  }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${format.badge}`}>
                    #{format.rank}
                  </div>
                  <RatingStars rating={format.rating} size="md" />
                </div>
                
                <div className="mb-4">
                  <img 
                    src={format.image} 
                    alt={`${format.name} Shilajit`} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {format.name}
                  {(format.id === 'tablets' || format.id === 'sticks' || format.id === 'powder') && (
                    <span className="text-sm text-red-600 ml-2">(Not tested)</span>
                  )}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {format.description}
                </p>
                
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  {format.id === 'tablets' || format.id === 'sticks' || format.id === 'powder' ? (
                    <span className="text-gray-500">Temporarily unavailable</span>
                  ) : (
                    <>
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
          
          {/* Explanation for unavailable formats */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Why we temporarily don't test sticks, tablets, and powder?
                </h3>
                <p className="text-yellow-700 leading-relaxed mb-3">
                  Currently, our team is focused on testing the most popular and high-quality forms of Shilajit - resin, capsules, and gummies. This decision was made for several reasons:
                </p>
                <ul className="text-yellow-700 space-y-2 ml-4">
                  <li>• <strong>High workload:</strong> Our resources are limited, and we prefer to deeply research fewer formats</li>
                  <li>• <strong>Low demand:</strong> Statistics show that consumers less frequently choose these forms</li>
                  <li>• <strong>Quality issues:</strong> Sticks, tablets, and powder more often contain counterfeits and products of unclear origin</li>
                  <li>• <strong>Verification complexity:</strong> These forms are harder to verify with home authenticity tests</li>
                </ul>
                <p className="text-yellow-700 mt-3">
                  We plan to expand our research in the future when we can ensure the same level of quality analysis for all formats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Quality Check Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 section-divider pt-8">
              Home Quality Check: Test Your Shilajit Resin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to verify the authenticity and quality of your Shilajit resin at home using these simple, reliable methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Water Solubility Test */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/src/assets/quality_check_water.jpg" 
                  alt="Water solubility test for Shilajit" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Water Solubility Test
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dissolve a small amount (rice grain size) of Shilajit resin in warm water. Authentic Shilajit should dissolve completely within 1-2 minutes, turning the water golden-brown with no visible sediment or particles remaining.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                ✓ Pass: Complete dissolution, clear brown liquid
                <br />
                ✗ Fail: Residue, particles, or incomplete dissolution
              </div>
            </div>

            {/* Smell Test */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/src/assets/quality_check_smell.jpg" 
                  alt="Smell test for Shilajit authenticity" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Aroma Assessment
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Authentic Shilajit has a distinctive earthy, slightly bitter smell reminiscent of rich soil or asphalt. The aroma should be strong but not unpleasant or chemical-like. Fresh, high-quality resin will have a more pronounced natural scent.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                ✓ Pass: Earthy, natural, slightly bitter aroma
                <br />
                ✗ Fail: Chemical smell, overly sweet, or no odor
              </div>
            </div>

            {/* Texture Test */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/src/assets/quality_check_texture.jpg" 
                  alt="Texture test for Shilajit quality" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Texture & Consistency
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At room temperature, quality Shilajit resin should be semi-solid and slightly sticky. When warmed between your fingers, it should become more pliable and malleable. It should not be completely hard like rock or overly soft like honey.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                ✓ Pass: Semi-solid, becomes pliable when warmed
                <br />
                ✗ Fail: Too hard, too soft, or grainy texture
              </div>
            </div>

            {/* Flame Test */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/src/assets/quality_check_flame.jpg" 
                  alt="Flame test for Shilajit purity" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                4. Flame Test (Advanced)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Caution: Adult supervision required.</strong> Hold a small piece with tweezers near a flame. Pure Shilajit will not catch fire easily and will bubble or foam slightly. Fake products may burn quickly or produce unusual smoke.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                ✓ Pass: Bubbles/foams, doesn't ignite easily
                <br />
                ✗ Fail: Burns quickly, unusual smoke, melts like plastic
              </div>
            </div>

            {/* Taste Test */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/src/assets/quality_check_taste.jpg" 
                  alt="Taste test for Shilajit authenticity" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5. Taste Profile
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Authentic Shilajit has a distinctive bitter, earthy taste with mineral undertones. The flavor should be strong but not overwhelmingly unpleasant. Avoid products that taste overly sweet, metallic, or have no taste at all.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                ✓ Pass: Bitter, earthy, mineral taste
                <br />
                ✗ Fail: Sweet, metallic, or tasteless
              </div>
            </div>

            {/* Heat Test */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/src/assets/quality_check_temperature.jpg" 
                  alt="Temperature stability test for Shilajit purity" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                6. Temperature Stability Test
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Store a small sample in the refrigerator for 24 hours, then bring to room temperature. Pure Shilajit should maintain its consistency and properties. When gently warmed (body temperature), it should become softer and more workable without losing its structural integrity.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                ✓ Pass: Maintains consistency, becomes workable when warmed
                <br />
                ✗ Fail: Cracks when cold, doesn't soften when warmed, changes color
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Important Safety Notes</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Always purchase Shilajit from reputable sources with third-party lab testing</li>
              <li>• These home tests are supplementary to, not replacements for, professional lab analysis</li>
              <li>• If your Shilajit fails multiple tests, discontinue use and contact the supplier</li>
              <li>• When in doubt, request certificates of analysis from the manufacturer</li>
              <li>• Store Shilajit in a cool, dry place away from direct sunlight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testing Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 section-divider pt-8">
              How We Test
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 3-step process ensures every review is thorough, unbiased, and scientifically sound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testingSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

