import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Award, Microscope, History, Leaf, Heart, Shield } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

const ArticlesPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Articles' }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Science Behind Shilajit: Understanding Its Bioactive Compounds',
      excerpt: 'Explore the complex biochemistry of Shilajit and how its unique composition of fulvic acid, minerals, and other compounds contribute to its reported health benefits.',
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      category: 'Science',
      readTime: '8 min read',
      image: '/src/assets/articles/science-research.jpg',
      content: `
        <h2>The Biochemical Composition of Shilajit</h2>
        <p>Shilajit is a complex substance that contains over 84 minerals in ionic form, as well as fulvic acid, humic acid, and various other bioactive compounds. The primary active component is fulvic acid, which makes up approximately 15-20% of high-quality Shilajit.</p>
        
        <h3>Key Components:</h3>
        <ul>
          <li><strong>Fulvic Acid:</strong> A natural compound that helps transport minerals into cells and enhances nutrient absorption.</li>
          <li><strong>Dibenzo-α-pyrones:</strong> Powerful antioxidants that protect cells from oxidative damage.</li>
          <li><strong>Minerals:</strong> Including iron, zinc, magnesium, copper, nickel, potassium, manganese, silicon, and silver in their ionic forms.</li>
          <li><strong>Humic Acid:</strong> Supports detoxification and immune function.</li>
          <li><strong>Amino Acids:</strong> Contains various amino acids that serve as building blocks for proteins.</li>
        </ul>
        
        <h2>How Fulvic Acid Works</h2>
        <p>Fulvic acid is the star component of Shilajit, responsible for many of its reported benefits. This complex organic compound has several mechanisms of action:</p>
        
        <ol>
          <li>It acts as a carrier molecule, helping transport nutrients into cells more efficiently.</li>
          <li>It enhances the bioavailability of other nutrients and compounds.</li>
          <li>It has antioxidant properties that help neutralize free radicals.</li>
          <li>It supports cellular energy production by influencing mitochondrial function.</li>
        </ol>
        
        <h2>Research on Bioactive Properties</h2>
        <p>Scientific research has identified several bioactive properties of Shilajit:</p>
        
        <ul>
          <li><strong>Antioxidant Activity:</strong> Studies have shown that Shilajit can help reduce oxidative stress in the body.</li>
          <li><strong>Anti-inflammatory Effects:</strong> Research suggests that certain compounds in Shilajit may help reduce inflammation.</li>
          <li><strong>Nootropic Properties:</strong> Some studies indicate potential cognitive benefits, possibly due to its effect on energy metabolism in the brain.</li>
          <li><strong>Adaptogenic Effects:</strong> Shilajit may help the body adapt to stress and maintain homeostasis.</li>
        </ul>
        
        <p>While research is ongoing, these preliminary findings help explain why Shilajit has been valued in traditional medicine systems for centuries.</p>
      `
    },
    {
      id: 2,
      title: 'Historical Uses of Shilajit in Traditional Medicine Systems',
      excerpt: 'Discover how Shilajit has been used across different cultures and medical traditions, from Ayurveda to Traditional Chinese Medicine and beyond.',
      icon: <History className="w-8 h-8 text-amber-600" />,
      category: 'History',
      readTime: '6 min read',
      image: '/src/assets/articles/traditional-medicine.jpg',
      content: `
        <h2>Shilajit in Ayurvedic Medicine</h2>
        <p>In Ayurveda, India's ancient system of medicine dating back over 5,000 years, Shilajit is known as "the destroyer of weakness" and "conqueror of mountains." It is classified as a rasayana, or rejuvenative substance, that promotes longevity and overall vitality.</p>
        
        <p>Ayurvedic texts describe Shilajit as having the ability to:</p>
        <ul>
          <li>Balance all three doshas (vata, pitta, and kapha)</li>
          <li>Enhance strength and stamina</li>
          <li>Support healthy aging</li>
          <li>Improve digestion and metabolism</li>
          <li>Enhance mental clarity and cognitive function</li>
        </ul>
        
        <h2>Use in Traditional Chinese Medicine</h2>
        <p>In Traditional Chinese Medicine (TCM), Shilajit is known as "wu ling zhi" and has been used for centuries. TCM practitioners value it for:</p>
        <ul>
          <li>Strengthening the kidneys and supporting reproductive health</li>
          <li>Nourishing the blood</li>
          <li>Supporting yang energy</li>
          <li>Promoting longevity</li>
        </ul>
        
        <h2>Tibetan Medicine and Shilajit</h2>
        <p>In Tibetan medicine, Shilajit (known as "brag zhun") is considered one of the most important substances for maintaining health and treating various conditions. Tibetan medical texts describe it as having "the power of all minerals" and recommend it for:</p>
        <ul>
          <li>Supporting digestive fire</li>
          <li>Cleansing the body of toxins</li>
          <li>Maintaining youthfulness</li>
          <li>Supporting the immune system</li>
        </ul>
        
        <h2>Folk Medicine Across Central Asia</h2>
        <p>Throughout the mountainous regions of Central Asia, including Afghanistan, Pakistan, and parts of Russia, Shilajit has been used in folk medicine for generations. Common traditional uses include:</p>
        <ul>
          <li>Treating bone fractures and injuries</li>
          <li>Supporting recovery from illness</li>
          <li>Enhancing physical performance</li>
          <li>Supporting respiratory health</li>
        </ul>
        
        <p>These diverse traditional uses across multiple medical systems highlight Shilajit's historical importance and provide valuable context for modern research into its potential benefits.</p>
      `
    },
    {
      id: 3,
      title: 'Sourcing and Authenticity: How to Identify Quality Shilajit',
      excerpt: 'Learn about the geographical origins of Shilajit, sustainable harvesting practices, and how to distinguish authentic, high-quality Shilajit from imitations.',
      icon: <Award className="w-8 h-8 text-green-600" />,
      category: 'Quality',
      readTime: '7 min read',
      image: '/src/assets/articles/quality-testing.jpg',
      content: `
        <h2>Geographical Origins of Authentic Shilajit</h2>
        <p>Genuine Shilajit is primarily found in mountainous regions at elevations between 1,000 and 5,000 meters. The most renowned sources include:</p>
        
        <ul>
          <li><strong>Himalayan Range:</strong> Spanning India, Nepal, Bhutan, and Tibet - considered the most traditional source</li>
          <li><strong>Altai Mountains:</strong> Extending across Russia, Mongolia, China, and Kazakhstan</li>
          <li><strong>Caucasus Mountains:</strong> Between the Black Sea and Caspian Sea</li>
          <li><strong>Andes Mountains:</strong> Less common but found in certain regions</li>
        </ul>
        
        <p>Each geographical source produces Shilajit with slightly different mineral compositions, reflecting the unique geology of each region.</p>
        
        <h2>The Formation Process</h2>
        <p>Authentic Shilajit forms through a centuries-long process:</p>
        <ol>
          <li>Plant matter becomes trapped between layers of rock in mountainous regions</li>
          <li>Over centuries, the organic material undergoes transformation due to microbial action and pressure</li>
          <li>The resulting substance is compressed and enriched with minerals from the surrounding rocks</li>
          <li>During warm months, the substance seeps from cracks in the rocks as a resin-like material</li>
        </ol>
        
        <h2>Identifying Authentic Shilajit</h2>
        <p>Here are key characteristics of genuine Shilajit:</p>
        
        <h3>Physical Properties:</h3>
        <ul>
          <li><strong>Color:</strong> Ranges from dark brown to blackish, sometimes with a reddish or golden hue</li>
          <li><strong>Texture:</strong> Soft and pliable when warm, hard and brittle when cold</li>
          <li><strong>Solubility:</strong> Dissolves completely in warm water, turning the water a rich brown color without leaving significant residue</li>
          <li><strong>Taste:</strong> Distinctly bitter and earthy with a characteristic smell</li>
          <li><strong>Shine:</strong> Authentic resin has a slight shine when freshly broken</li>
        </ul>
        
        <h3>Red Flags for Fake Products:</h3>
        <ul>
          <li>Perfectly uniform color and texture</li>
          <li>Sweet or pleasant taste (often masked with additives)</li>
          <li>Failure to dissolve completely in warm water</li>
          <li>Unusually low price (quality Shilajit is labor-intensive to harvest and process)</li>
          <li>No information about source or testing</li>
        </ul>
        
        <h2>Laboratory Testing for Quality</h2>
        <p>Reputable Shilajit products should undergo rigorous testing:</p>
        <ul>
          <li><strong>Heavy Metal Testing:</strong> To ensure safety and purity</li>
          <li><strong>Fulvic Acid Content:</strong> Higher percentages (typically 15-20%) indicate better quality</li>
          <li><strong>Microbial Testing:</strong> To confirm absence of harmful bacteria or fungi</li>
          <li><strong>Mineral Profile Analysis:</strong> To verify mineral content and authenticity</li>
        </ul>
        
        <p>Always look for products that provide certificates of analysis from independent laboratories.</p>
      `
    },
    {
      id: 4,
      title: 'Modern Research on Shilajit: Evidence-Based Benefits',
      excerpt: 'Review the current scientific research on Shilajit, including clinical studies, potential health benefits, and areas where more research is needed.',
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      category: 'Research',
      readTime: '9 min read',
      image: '/src/assets/articles/modern-research.jpg',
      content: `
        <h2>Current State of Scientific Research</h2>
        <p>While Shilajit has been used in traditional medicine for centuries, modern scientific research is still catching up. Here's an overview of the current state of evidence:</p>
        
        <h3>Energy and Fatigue</h3>
        <p>Several studies have investigated Shilajit's effects on energy production:</p>
        <ul>
          <li>A 2012 study published in the Journal of Ethnopharmacology found that Shilajit supplementation helped preserve mitochondrial function, potentially supporting cellular energy production.</li>
          <li>Research suggests that dibenzo-α-pyrones in Shilajit may help transport electrons in the mitochondrial electron transport chain, potentially enhancing ATP production.</li>
        </ul>
        
        <h3>Cognitive Function</h3>
        <p>Emerging research suggests potential cognitive benefits:</p>
        <ul>
          <li>Animal studies have shown that fulvic acid may help reduce the accumulation of tau protein, which is associated with Alzheimer's disease.</li>
          <li>A 2012 study found that Shilajit may help prevent cognitive decline due to its antioxidant properties.</li>
          <li>Research published in the International Journal of Alzheimer's Disease suggests potential neuroprotective effects.</li>
        </ul>
        
        <h3>Testosterone and Male Fertility</h3>
        <p>Some of the strongest clinical evidence relates to men's health:</p>
        <ul>
          <li>A randomized, double-blind placebo-controlled study published in 2016 found that men taking purified Shilajit for 90 days experienced significantly increased total testosterone levels compared to placebo.</li>
          <li>Another clinical study showed improvements in sperm count and sperm motility in men taking Shilajit supplement.</li>
        </ul>
        
        <h3>Anti-inflammatory and Antioxidant Effects</h3>
        <p>Laboratory studies have demonstrated:</p>
        <ul>
          <li>Significant antioxidant activity, helping neutralize free radicals and reduce oxidative stress.</li>
          <li>Anti-inflammatory properties that may help reduce inflammatory markers.</li>
          <li>Potential protective effects against cellular damage.</li>
        </ul>
        
        <h2>Limitations and Future Research</h2>
        <p>Despite promising findings, several limitations exist in the current research:</p>
        <ul>
          <li>Many studies have small sample sizes</li>
          <li>More human clinical trials are needed to confirm effects observed in laboratory and animal studies</li>
          <li>Standardization of Shilajit preparations varies between studies, making direct comparisons difficult</li>
          <li>Long-term safety studies are limited</li>
        </ul>
        
        <p>Future research should focus on larger clinical trials, standardized preparations, and investigation of specific mechanisms of action.</p>
      `
    },
    {
      id: 5,
      title: 'Integrating Shilajit into Your Wellness Routine',
      excerpt: 'Practical guidance on how to incorporate Shilajit into your daily health regimen, including dosage recommendations, timing, and complementary practices.',
      icon: <Heart className="w-8 h-8 text-red-600" />,
      category: 'Wellness',
      readTime: '5 min read',
      image: '/src/assets/articles/wellness-lifestyle.jpg',
      content: `
        <h2>Finding Your Optimal Dosage</h2>
        <p>Shilajit dosage depends on several factors including the form you're using, your body weight, and your specific health goals. Here are general guidelines:</p>
        
        <h3>Resin Form:</h3>
        <ul>
          <li><strong>Starting dose:</strong> Rice grain sized portion (approximately 100-150mg)</li>
          <li><strong>Standard dose:</strong> Pea-sized portion (approximately 300-500mg)</li>
          <li><strong>Frequency:</strong> Typically taken 1-2 times daily</li>
        </ul>
        
        <h3>Capsule/Tablet Form:</h3>
        <ul>
          <li>Follow manufacturer's recommendations, typically 300-500mg per serving</li>
          <li>Usually taken once or twice daily</li>
        </ul>
        
        <h3>Powder Form:</h3>
        <ul>
          <li>Typically 250-500mg per serving</li>
          <li>Use a precise scale for accurate measurement</li>
        </ul>
        
        <p><em>Note: Always start with a lower dose and gradually increase as needed. Individual responses vary.</em></p>
        
        <h2>Optimal Timing and Administration</h2>
        
        <h3>When to Take:</h3>
        <ul>
          <li><strong>Morning:</strong> Many users prefer morning administration for energy benefits</li>
          <li><strong>With meals:</strong> Taking with food can improve absorption and minimize any digestive discomfort</li>
          <li><strong>Consistency:</strong> Regular daily use is typically recommended for best results</li>
        </ul>
        
        <h3>How to Take:</h3>
        <ul>
          <li><strong>Resin:</strong> Dissolve in warm water, tea, or milk. Traditional Ayurvedic practice suggests mixing with milk and honey</li>
          <li><strong>Capsules/Tablets:</strong> Take with a full glass of water</li>
          <li><strong>Powder:</strong> Mix into warm beverages, smoothies, or yogurt</li>
        </ul>
        
        <h2>Potential Synergies</h2>
        <p>Shilajit may work particularly well when combined with:</p>
        
        <ul>
          <li><strong>CoQ10:</strong> Research suggests Shilajit may enhance CoQ10's effects on mitochondrial energy production</li>
          <li><strong>Vitamin D:</strong> May complement Shilajit's effects on testosterone and overall vitality</li>
          <li><strong>Ashwagandha:</strong> Traditional Ayurvedic combination for stress management and energy</li>
          <li><strong>B Vitamins:</strong> May support Shilajit's energy-enhancing properties</li>
        </ul>
        
        <h2>Lifestyle Integration</h2>
        <p>For optimal results, consider integrating Shilajit with:</p>
        
        <ul>
          <li><strong>Adequate hydration:</strong> Drink plenty of water throughout the day</li>
          <li><strong>Regular exercise:</strong> May enhance Shilajit's effects on energy and vitality</li>
          <li><strong>Stress management:</strong> Practices like meditation may complement Shilajit's adaptogenic properties</li>
          <li><strong>Healthy diet:</strong> A nutrient-dense diet provides the building blocks for Shilajit to work with</li>
        </ul>
        
        <p>Remember that Shilajit is a supplement to, not a replacement for, a healthy lifestyle.</p>
      `
    },
    {
      id: 6,
      title: 'Safety Considerations and Potential Side Effects',
      excerpt: 'Important safety information about Shilajit use, including potential side effects, drug interactions, and who should avoid or consult a healthcare provider before use.',
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      category: 'Safety',
      readTime: '6 min read',
      image: '/src/assets/articles/safety-consultation.jpg',
      content: `
        <h2>General Safety Profile</h2>
        <p>When sourced properly and used as directed, authentic Shilajit has a good safety profile for most healthy adults. However, there are important considerations to be aware of:</p>
        
        <h3>Quality Concerns:</h3>
        <ul>
          <li>Raw, unprocessed Shilajit may contain contaminants including heavy metals, fungi, or other impurities</li>
          <li>Always use purified Shilajit from reputable sources that conduct third-party testing</li>
          <li>Look for products that specifically test for heavy metals like lead, arsenic, mercury, and cadmium</li>
        </ul>
        
        <h2>Who Should Exercise Caution</h2>
        
        <h3>Contraindications:</h3>
        <p>Shilajit may not be appropriate for:</p>
        <ul>
          <li><strong>Pregnant or breastfeeding women:</strong> Due to insufficient safety data</li>
          <li><strong>Children:</strong> Not traditionally used in pediatric populations</li>
          <li><strong>People with certain health conditions:</strong> Including hemochromatosis (iron overload disorder), as Shilajit contains iron</li>
          <li><strong>Those with gout or high uric acid levels:</strong> Some research suggests Shilajit may increase uric acid levels</li>
          <li><strong>Individuals with hypotension:</strong> Shilajit may lower blood pressure</li>
        </ul>
        
        <h2>Potential Medication Interactions</h2>
        <p>Consult with a healthcare provider before using Shilajit if you take:</p>
        
        <ul>
          <li><strong>Blood thinners (anticoagulants):</strong> Theoretical interaction based on traditional uses</li>
          <li><strong>Diabetes medications:</strong> May potentially enhance blood sugar-lowering effects</li>
          <li><strong>Blood pressure medications:</strong> Possible additive effects on lowering blood pressure</li>
          <li><strong>Iron supplements:</strong> May increase iron absorption</li>
          <li><strong>Medications metabolized by the liver:</strong> Theoretical potential for interactions</li>
        </ul>
        
        <h2>Potential Side Effects</h2>
        <p>While generally well-tolerated, some users report:</p>
        
        <ul>
          <li><strong>Digestive discomfort:</strong> Including upset stomach or diarrhea, especially at higher doses</li>
          <li><strong>Increased heart rate:</strong> In some sensitive individuals</li>
          <li><strong>Dizziness:</strong> Particularly if blood pressure is affected</li>
          <li><strong>Allergic reactions:</strong> Rare but possible</li>
        </ul>
        
        <h2>Recommendations for Safe Use</h2>
        
        <ul>
          <li>Start with a low dose and gradually increase</li>
          <li>Take with food to minimize digestive discomfort</li>
          <li>Discontinue use if you experience adverse effects</li>
          <li>Take breaks periodically (e.g., 5 days on, 2 days off, or 3 weeks on, 1 week off)</li>
          <li>Store properly according to manufacturer instructions to prevent contamination</li>
          <li>Always consult with a healthcare provider before beginning any supplement regimen, especially if you have existing health conditions or take medications</li>
        </ul>
        
        <p>Remember that individual responses to supplements vary, and what works well for one person may not be appropriate for another.</p>
      `
    }
  ];

  const [expandedArticle, setExpandedArticle] = React.useState(null);

  const toggleArticle = (id) => {
    if (expandedArticle === id) {
      setExpandedArticle(null);
    } else {
      setExpandedArticle(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shilajit Research Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of evidence-based articles about Shilajit's history, science, benefits, and proper usage.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                    {article.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-gray-500">{article.category}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.title}</h2>
                    <p className="text-gray-600">{article.excerpt}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleArticle(article.id)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {expandedArticle === article.id ? 'Hide Article' : 'Read Article'}
                </button>
                
                {expandedArticle === article.id && (
                  <div className="mt-8 prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
                )}
              </div>
            </div>
          ))}
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

export default ArticlesPage;

