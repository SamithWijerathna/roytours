"use client"

import TiltedCard from "../components/tiltedcard"
import { useState } from "react"
import { Target, Car, Hotel, Gem, MapPin, Calendar, Users, CheckCircle, X } from "lucide-react"

export default function TourPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const packages = [
    {
      id: 0,
      name: "Customizable Day Tour",
      duration: "1 Day",
      price: "$50",
      pricePerPerson: "(Max 5 pax)",
      image: "prices/kandy.jpg",
      isCustomizable: true,
      availableAttractions: [
        "White Buddha Statue",
        "View Point",
        "Herbal Village Tour",
        "Pinnawala Elephant Orphanage",
        "Gem Museum",
        "Royal Botanical Garden",
        "Temple of the Tooth",
        "3 Ancient Temples (Gadaladeniya, Lankatilaka, Embekke)"
      ],
      highlights: [
        "Choose any 5 attractions",
        "Flexible itinerary",
        "Expert local guide",
        "Perfect for day trips",
        "Personalized experience"
      ],
      included: [
        "AC vehicle transportation",
        "English-speaking guide",
        "Meals on request",
        "Entrance fees not included"
      ],
      itinerary: "Colombo → Your 5 chosen attractions → Colombo"
    },
    {
      id: 1,
      name: "Cultural Triangle Explorer",
      duration: "5 Days / 4 Nights",
      price: "$850",
      pricePerPerson: "(Max 5 pax)",
      image: "prices/kandy.jpg",
      highlights: [
        "Sigiriya Rock Fortress",
        "Dambulla Cave Temple",
        "Temple of the Tooth - Kandy",
        "Polonnaruwa Ancient City",
        "Traditional Cultural Dance Show"
      ],
      included: [
        "Accommodation on request",
        "All transportation in AC vehicle",
        "English-speaking guide",
        "Meals on request"
      ],
      itinerary: "Colombo → Sigiriya → Polonnaruwa → Kandy → Colombo"
    },
    {
      id: 2,
      name: "Hill Country & Tea Trails",
      duration: "6 Days / 5 Nights",
      price: "$1,050",
      pricePerPerson: "(Max 5 pax)",
      image: "prices/nuwara-eliya.jpg",
      highlights: [
        "Scenic train ride to Ella",
        "Tea plantation & factory visit",
        "Nine Arch Bridge",
        "Little Adam's Peak hike",
        "Ravana Falls",
        "Horton Plains National Park"
      ],
      included: [
        "Accommodation on request",
        "All transportation",
        "Guided tours",
        "Meals on request"
      ],
      itinerary: "Colombo → Nuwara Eliya → Ella → Yala → Galle → Colombo"
    },
    {
      id: 3,
      name: "Southern Beaches & Wildlife",
      duration: "7 Days / 6 Nights",
      price: "$1,200",
      pricePerPerson: "(Max 5 pax)",
      image: "prices/galle.jpg",
      highlights: [
        "Galle Fort UNESCO Site",
        "Yala National Park Safari",
        "Mirissa whale watching",
        "Unawatuna beach relaxation",
        "Turtle hatchery visit",
        "River safari on Madu River"
      ],
      included: [
        "Accommodation on request",
        "All transfers",
         "Guided tours",
        "Meals on request"
      ],
      itinerary: "Colombo → Galle → Mirissa → Yala → Bentota → Colombo"
    },
    {
      id: 4,
      name: "Grand Sri Lanka Tour",
      duration: "10 Days / 9 Nights",
      price: "$1,850",
      pricePerPerson: "(Max 5 pax)",
      image: "prices/ella.jpg",
      highlights: [
        "Complete cultural triangle",
        "Hill country tea estates",
        "Wildlife safaris (2 parks)",
        "Southern coastal gems",
        "Ancient temples & forts",
        "Scenic train journey"
      ],
      included: [
        "Accommodation on request",
        "Private AC vehicle",
        "Professional guide",
        "Meals on request"
      ],
      itinerary: "Complete island experience: Colombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Galle → Bentota → Colombo"
    },
    {
      id: 5,
      name: "Adventure Seeker Special",
      duration: "8 Days / 7 Nights",
      price: "$1,400",
      pricePerPerson: "(Max 5 pax)",
      image: "prices/on the way.jpg",
      highlights: [
        "White water rafting in Kitulgala",
        "Hiking Ella Rock & Little Adam's Peak",
        "Surfing in Arugam Bay",
        "Zip-lining in Ella",
        "Wildlife safari",
        "Rock climbing Sigiriya"
      ],
      included: [
        "Accommodation on request",
        "Expert guides for activities",
        "Transportation",
        "Meals on request"
      ],
      itinerary: "Colombo → Kitulgala → Kandy → Ella → Arugam Bay → Yala → Colombo"
    },
    {
      id: 6,
      name: "Family Fun Package",
      duration: "7 Days / 6 Nights",
      price: "$1,100",
      pricePerPerson: "(Max 5 pax)",
      image: "prices/kandy.jpg",
      highlights: [
        "Pinnawala Elephant Orphanage",
        "Beach activities & water sports",
        "Easy nature walks",
        "Turtle watching",
        "Cultural dance show",
        "Herbal village tour"
      ],
      included: [
        "Accommodation on request",
        "Kid-friendly restaurants",
        "All transportation",
        "Family-oriented guides",
        "Meals on request"
      ],
      itinerary: "Colombo → Pinnawala → Kandy → Nuwara Eliya → Bentota → Colombo"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      
      {/* Hero Section */}
      <div className="py-12 px-4 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            Discover Sri Lanka's Magic
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Curated tour packages designed for unforgettable experiences. 
            From ancient cities to pristine beaches, we've got you covered.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-2 sm:mb-3">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">Expert Guides</h3>
            <p className="text-xs sm:text-sm text-gray-600">Local knowledge & insights</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-2 sm:mb-3">
              <Car className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">Comfortable Travel</h3>
            <p className="text-xs sm:text-sm text-gray-600">AC vehicles & drivers</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-2 sm:mb-3">
              <Hotel className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">Quality Stays</h3>
            <p className="text-xs sm:text-sm text-gray-600">Handpicked hotels</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-2 sm:mb-3">
              <Gem className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">Best Value</h3>
            <p className="text-xs sm:text-sm text-gray-600">All-inclusive pricing</p>
          </div>
        </div>
      </div>

      {/* Featured Customizable Tour - Full Width */}
      <div className="max-w-7xl mx-auto px-4 mb-12 sm:mb-16">
        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-6 sm:p-8 lg:p-12 text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ Most Popular
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Customizable Day Tour
              </h2>
              <p className="text-lg sm:text-xl mb-6 text-green-50">
                Choose any 5 attractions and create your perfect Sri Lankan day trip
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <div className="text-4xl sm:text-5xl font-bold mb-2">$50</div>
                <div className="text-green-100">(Max 5 pax) • 1 Day Tour</div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Choose Any 5 Attractions:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {packages[0].availableAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setSelectedPackage(packages[0])}
                  className="flex-1 bg-white text-green-700 py-4 px-6 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 shadow-lg text-base sm:text-lg"
                >
                  Plan Your Day Tour
                </button>
                <button className="flex-1 border-2 border-white text-white py-4 px-6 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-base sm:text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="grid grid-cols-2 gap-2 p-4 lg:p-6 bg-white/5">
              <div className="rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64">
                <img src="prices/kandy.jpg" alt="Temple" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64">
                <img src="prices/ella.jpg" alt="Nature" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64">
                <img src="prices/nuwara-eliya.jpg" alt="Tea Country" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64">
                <img src="prices/galle.jpg" alt="Coast" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Our Tour Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.slice(1).map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Package Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  {pkg.duration}
                </div>
              </div>

              {/* Package Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 leading-tight">
                  {pkg.name}
                </h3>
                
                <div className="mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    {pkg.price}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {pkg.pricePerPerson}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4 sm:mb-6 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3 text-gray-900">Highlights:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {pkg.highlights.slice(0, 4).map((highlight, index) => (
                      <li key={index} className="text-xs sm:text-sm text-gray-700 flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.highlights.length > 4 && (
                    <p className="text-xs sm:text-sm text-green-600 mt-2 font-medium">
                      +{pkg.highlights.length - 4} more experiences
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPackage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 sm:p-6 rounded-t-2xl z-10">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    {selectedPackage.name}
                  </h2>
                  <p className="text-sm sm:text-base text-green-100">{selectedPackage.duration}</p>
                </div>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              {/* Price */}
              <div className="bg-green-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl font-bold text-green-700 mb-1">
                  {selectedPackage.price}
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  {selectedPackage.pricePerPerson}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Tour Route</h3>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    {selectedPackage.itinerary}
                  </p>
                </div>
              </div>

              {/* Available Attractions for Customizable Package */}
              {selectedPackage.isCustomizable && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-green-600" />
                    Choose Any 5 Attractions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedPackage.availableAttractions.map((attraction, index) => (
                      <div key={index} className="flex items-start bg-green-50 rounded-lg p-3 border border-green-200">
                        <MapPin className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Tour Highlights</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {selectedPackage.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">What's Included</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {selectedPackage.included.map((item, index) => (
                    <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg text-sm sm:text-base">
                  Book This Package
                </button>
                <button className="flex-1 border-2 border-green-600 text-green-700 py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 text-sm sm:text-base">
                  Customize Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Info Section */}
      <div className="bg-green-700 text-white py-12 sm:py-16 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            We specialize in custom tours tailored to your interests, budget, and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-green-700 py-3 px-6 sm:px-8 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Contact Us
            </button>
            <button className="border-2 border-white text-white py-3 px-6 sm:px-8 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-sm sm:text-base">
              Request Custom Tour
            </button>
          </div>
        </div>
      </div>

      {/* Destination Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Featured Destinations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Sigiriya */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Sigiriya Rock Fortress</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Marvel at this UNESCO World Heritage Site, an ancient rock fortress rising 200m above the jungle. 
                Climb to the top for breathtaking 360° views and explore the fascinating frescoes and mirror wall.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• UNESCO World Heritage Site</li>
                <li>• Ancient frescoes and gardens</li>
                <li>• Spectacular panoramic views</li>
              </ul>
            </div>
          </div>

          {/* Yala National Park */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Yala National Park</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Experience one of the best wildlife sanctuaries in the world. Home to the highest concentration 
                of leopards globally, plus elephants, sloth bears, and over 200 bird species.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Highest leopard density worldwide</li>
                <li>• Elephant herds & sloth bears</li>
                <li>• Expert guided jeep safaris</li>
              </ul>
            </div>
          </div>

          {/* Train Journey */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Scenic Train to Ella</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Journey through Sri Lanka's stunning hill country on one of the world's most beautiful train rides. 
                Pass tea plantations, waterfalls, and misty mountains on this unforgettable experience.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• World's most scenic train route</li>
                <li>• Rolling tea plantations</li>
                <li>• Instagram-worthy landscapes</li>
              </ul>
            </div>
          </div>

          {/* Beaches */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Southern Beaches</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Relax on pristine golden sands along Sri Lanka's southern coast. From Unawatuna's calm bays 
                to Mirissa's whale watching, find your perfect beach paradise.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Whale & dolphin watching</li>
                <li>• World-class surf spots</li>
                <li>• Crystal-clear turquoise waters</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}