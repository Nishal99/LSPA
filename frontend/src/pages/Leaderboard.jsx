import React, { useState } from 'react';
import { FiAward, FiStar, FiTarget, FiBriefcase, FiBook, FiUserCheck, FiUsers, FiMail } from 'react-icons/fi';
import assets from '../assets/images/images';

const Leaderboard = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leadershipData = {
    id: 1,
    name: "Mr. Prasanna Munasinghe",
    position: "Chief Executive Officer/ Chairman",
    role: "Providing strategic leadership and vision for Lanka Spa Association. Responsible for overall organizational direction, stakeholder relationships, and ensuring the highest standards of service excellence across all operations.",
    powers: [
      "Final decision-making authority on all organizational matters",
      "Strategic planning and business development oversight",
      "Board of Directors leadership and representation",
      "Budget approval and financial oversight",
      "Executive team management and development"
    ],
    image: assets.ayura_owner,
    branch: "Head Office",
    type: "executive"
  };

  const directors = [
  
  {
    id: 2,
    name: "Nishantha I. Punchihewa",
    position: "Director / Deputy Chairman",
    role: "Overseeing daily operations and service delivery excellence across all spa centers. Ensuring operational efficiency and maintaining quality standards.",
    powers: [
      "Operational strategy and process optimization",
      "Multi-center staff supervision and development",
      "Quality control and service standards enforcement",
      "Resource allocation and operational budgeting",
      "Performance monitoring and KPI management"
    ],
    branch: "Operations",
    type: "director",
    image: assets.D_nishanthaP,
  },
  {
    id: 3,
    name: "K.T. Niroshana De Silva",
    position: "Director (Finance & Operations)",
    role: "Managing the financial and operational aspects of the association to ensure sustainability and transparency in all activities.",
    powers: [
      "Financial planning and budget oversight",
      "Operational policy implementation",
      "Audit and compliance coordination",
      "Resource management and cost efficiency",
      "Reporting and financial documentation"
    ],
    image: assets.niroshanaDe,
    branch: "Finance & Operations",
    type: "director"
  },
  {
    id: 4,
    name: "S.P. Wickramasinghe",
    position: "Director - Human Resource",
    role: "Overseeing human resource policies and fostering a professional, ethical, and high-performing workforce.",
    powers: [
      "Recruitment and staff development",
      "Performance management",
      "HR compliance and policies",
      "Employee relations and engagement",
      "Organizational culture enhancement"
    ],
    image: assets.spWickrama,
    branch: "Human Resources",
    type: "director"
  },
  {
    id: 5,
    name: "A.M.A.D. Nalin Kumara",
    position: "Director / National Organizer",
    role: "Coordinating national events, membership drives, and organizational activities to strengthen national-level spa governance.",
    powers: [
      "National-level coordination and organization",
      "Member engagement and registration drives",
      "Event management and promotion",
      "Public awareness and outreach",
      "Collaboration with regional directors"
    ],
    image: assets.D_nalin,
    branch: "National Operations",
    type: "director"
  },
  {
    id: 6,
    name: "S.D.R.T. Lakmal",
    position: "Media Director",
    role: "Managing communication, media relations, and digital presence of the Lanka Spa Association.",
    powers: [
      "Media campaign and public communication",
      "Social media and digital strategy",
      "Press releases and event coverage",
      "Brand reputation management",
      "Content creation and publication oversight"
    ],
    image: assets.lakmal,
    branch: "Media & Communication",
    type: "director"
  },
  {
    id: 7,
    name: "K. Samanthi",
    position: "Province Director - Rathnapura",
    role: "Supervising provincial operations and ensuring spa centers within Rathnapura maintain regulatory and service standards.",
    powers: [
      "Provincial spa monitoring and compliance",
      "Local spa registration and evaluation",
      "Coordination with head office for policy execution",
      "Training and quality assurance support",
      "Operational reporting and performance tracking"
    ],
    image: assets.samanthi,
    branch: "Rathnapura",
    type: "director"
  },
  {
    id: 8,
    name: "S.M. Radika Udayangani",
    position: "Province Director - Galle",
    role: "Managing spa operations in Galle district, ensuring alignment with national wellness standards and regulations.",
    powers: [
      "Spa supervision and inspection",
      "Provincial reporting and performance tracking",
      "Community and client relations",
      "Coordination with association committees",
      "Staff development and local engagement"
    ],
    image: assets.randika,
    branch: "Galle",
    type: "director"
  },
  {
    id: 9,
    name: "R.M.I.P. Rathnayaka",
    position: "Province Director - Puttalam",
    role: "Ensuring high-quality spa operations in the Puttalam province under association guidelines.",
    powers: [
      "Operational supervision within province",
      "Regulatory compliance and audits",
      "Service improvement programs",
      "Local wellness promotion initiatives",
      "Coordination with national management"
    ],
    image: assets.rathnayaka,
    branch: "Puttalam",
    type: "director"
  },
  {
    id: 10,
    name: "U.A. Samanthilaka",
    position: "Province Director - Kurunegala",
    role: "Managing spa center operations, staff development, and compliance within Kurunegala province.",
    powers: [
      "Operational leadership within Kurunegala",
      "Performance tracking and reporting",
      "Provincial event organization",
      "Client relations and satisfaction",
      "Adherence to association standards"
    ],
    image: assets.samanthilaka,
    branch: "Kurunegala",
    type: "director"
  },
  {
    id: 11,
    name: "N. Amali Jayasekara",
    position: "Province Director - Anuradhapura",
    role: "Leading spa center management and provincial coordination for the Anuradhapura region.",
    powers: [
      "Spa compliance monitoring",
      "Provincial coordination and training",
      "Quality and standard checks",
      "Reporting and improvement actions",
      "Stakeholder communication"
    ],
    image: assets.amali,
    branch: "Anuradhapura",
    type: "director"
  },
  {
    id: 12,
  name: "A.A.P. Malinda Adikari",
  position: "Director / Deputy Organizer",
  role: "Supporting national and provincial organizational development by coordinating activities, assisting in event organization, and strengthening member engagement across all spa centers.",
  powers: [
    "Assisting in planning and execution of national and provincial programs",
    "Coordinating organizational events, workshops, and training sessions",
    "Supporting membership development and engagement initiatives",
    "Facilitating communication between directors and provincial offices",
    "Contributing to strategic decision-making and operational efficiency"
  ],
  image: assets.malinda,
  branch: "Organizational Affairs",
  type: "director"
  }
];


  const instructors = [
    {
  id: 7,
  name: "Mr. Susantha Gunawardana (LLB - University of Colombo, MA - University of Kelaniya)",
  position: "Legal Instructor / Chief Legal Advisor / Attorney at Law",
  role: "Providing comprehensive legal education and advisory support to ensure all spa operations comply with national laws, ethical standards, and institutional regulations. Bringing extensive experience as a legal practitioner and advisor to the Ayurvedic Medical Council and Human Rights Organization.",
  powers: [
    "Conducting legal and regulatory compliance training programs",
    "Advising on company law, spa licensing, and professional conduct",
    "Ensuring adherence to ethical and statutory frameworks",
    "Guiding documentation, contracts, and organizational policies",
    "Serving as legal advisor and consultant for dispute resolution and governance",
  ],
  image: assets.susantha2,
  branch: "Legal Division",
  type: "instructor"
},

    {
  id: 8,
  name: "Mr. W.L.R. Dabarera",
  position: "Law Instructor / Assistant Officer (Legal)",
  role: "Specializing in legal documentation, compliance, and practical application of laws relevant to the wellness and spa industry. Supporting the training division with expertise in professional ethics and legal procedures.",
  powers: [
    "Conducting legal compliance and documentation workshops",
    "Assisting in the preparation and review of legal materials",
    "Educating members on labor laws, licensing, and operational regulations",
    "Ensuring adherence to ethical standards and legal frameworks",
    "Collaborating with the Chief Legal Advisor on policy interpretation and updates"
  ],
  image: assets.dabarera,
  branch: "Legal Division",
  type: "instructor"
}
  ];

  const supportStaff = [
  {
    id: 9,
    name: "H.D. Nishanka Sanjeewa",
    position: "Organizer",
    role: "Coordinating events, workshops, and operational activities across association divisions to ensure smooth organizational flow and member engagement.",
    powers: [
      "Organizing and managing association events and programs",
      "Coordinating between directors and administrative divisions",
      "Assisting in membership registration and logistics",
      "Supporting training and outreach initiatives",
      "Maintaining communication across regional branches"
    ],
    image: assets.nishshankaSan,
    type: "support"
  },
  {
    id: 10,
    name: "Roshan Sumeda Perera",
    position: "Chief Secretary",
    role: "Overseeing administrative operations, maintaining records, and supporting executive communications within the association.",
    powers: [
      "Administrative coordination and documentation management",
      "Supervising secretarial and communication functions",
      "Facilitating executive meetings and policy documentation",
      "Ensuring timely correspondence and compliance reports",
      "Assisting in strategic planning and operational execution"
    ],
    image: assets.roshan,
    type: "support"
  },
  {
    id: 11,
    name: "R.V. Nayomi Manjula",
    position: "Deputy Secretary",
    role: "Assisting the Chief Secretary in administrative coordination, member communication, and internal policy documentation for the association.",
    powers: [
      "Supporting secretarial and administrative activities",
      "Coordinating correspondence and internal communications",
      "Assisting in document preparation and record-keeping",
      "Managing scheduling and logistical tasks for events",
      "Maintaining member and staff communication flow"
    ],
    image: assets.nayomi_sanjula,
    type: "support"
  }
];


  const divisionalOrganizers = [
    { id: 12, name: "P.M.A.W. Nawarathna", position: "Rathnapura Division", image: assets.dummy, type: "organizer", branch: "Rathnapura" },
    { id: 13, name: "A.G.C.L Kumara Adikari", position: "Kandy Division", image: assets.dummy, type: "organizer", branch: "Kandy" },];

  // Combine all people for easier legend and processing
  const allPeople = [leadershipData, ...directors, ...instructors, ...supportStaff, ...divisionalOrganizers];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ProfileCard = ({ person }) => {
    const getBorderColor = (type) => {
      const colors = {
        executive: 'border-yellow-400',
        director: 'border-emerald-400',
        instructor: 'border-blue-400',
        support: 'border-purple-400',
        organizer: 'border-indigo-400'
      };
      return colors[type] || 'border-gray-400';
    };

    return (
      <div 
        className="flex flex-col items-center cursor-pointer group relative p-4 bg-gray-800 rounded-xl shadow-md transition-all duration-300 hover:bg-gray-700 hover:scale-105"
        onClick={() => setSelectedNode(person)}
      >
        <div className={`w-32 h-32 rounded-full overflow-hidden border-4 ${getBorderColor(person.type)} group-hover:border-yellow-400 transition-colors duration-300 shadow-lg`}>
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-white font-semibold text-sm mt-3 text-center transition-colors duration-300 group-hover:text-yellow-400">
          {person.name}
        </h3>
        <p className="text-gray-300 text-xs font-medium text-center transition-colors duration-300 group-hover:text-yellow-300">
          {person.position}
        </p>
        {person.branch && (
          <p className="text-gray-500 text-xs text-center mt-1">
            {person.branch}
          </p>
        )}
      </div>
    );
  };

  const RoleDetails = ({ person }) => {
    if (!person) return null;

    const getIcon = (type) => {
      const icons = {
        executive: <FiAward className="w-4 h-4 text-yellow-400" />,
        director: <FiBriefcase className="w-4 h-4 text-emerald-400" />,
        instructor: <FiBook className="w-4 h-4 text-blue-400" />,
        support: <FiUserCheck className="w-4 h-4 text-purple-400" />,
        organizer: <FiUsers className="w-4 h-4 text-indigo-400" />
      };
      return icons[type] || <FiUsers className="w-4 h-4 text-gray-400" />;
    };

    return (
      <div className="space-y-4">
        {/* Profile Header */}
        <div className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg">
          <div className="w-16 h-16 rounded-full border border-white/30 overflow-hidden flex-shrink-0">
            <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-1">
              {getIcon(person.type)}
              <h3 className="text-base font-semibold text-white ml-2 truncate">{person.name}</h3>
            </div>
            <p className="text-gray-300 font-medium text-xs truncate">{person.position}</p>
            {person.branch && <p className="text-gray-400 text-xs">{person.branch}</p>}
          </div>
        </div>

        {/* Contact */}
        {person.email && (
          <div className="p-3 bg-gray-700 rounded-lg">
            <p className="text-xs text-gray-300 flex items-center">
              <FiMail className="w-3 h-3 mr-2 text-yellow-400" />
              {person.email}
            </p>
          </div>
        )}

        {/* Role */}
        {person.role && (
          <div className="space-y-2">
            <h4 className="text-yellow-400 font-semibold text-xs uppercase tracking-wide flex items-center">
              <FiTarget className="mr-1 w-3 h-3" />
              Role
            </h4>
            <div className="p-3 bg-gray-700 rounded-lg max-h-42 overflow-y-auto">
              <p className="text-gray-200 text-xs leading-relaxed">{person.role}</p>
            </div>
          </div>
        )}

        {/* Powers */}
        {person.powers && person.powers.length > 0 && (
          <div className="space-y-2 flex-1">
            <h4 className="text-yellow-400 font-semibold text-xs uppercase tracking-wide flex items-center">
              <FiStar className="mr-1 w-3 h-3" />
              Powers
            </h4>
            <div className="p-3 bg-gray-700 rounded-lg max-h-88 overflow-y-auto space-y-1">
              {person.powers.map((power, index) => (
                <li key={index} className="flex items-start text-gray-200 text-xs">
                  <span className="text-yellow-400 mr-1 mt-0.5 font-semibold">•</span>
                  <span className="leading-relaxed">{power}</span>
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-gray-900 text-white">
      {/* Mobile Top Bar with Hamburger */}
      <div className="lg:hidden bg-gray-800 text-white p-4 flex items-center justify-between shadow-md z-50">
        <h2 className="text-lg font-bold text-yellow-400">Leadership Team</h2>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Fixed Left Panel - Hidden on mobile, full-width overlay when open */}
      <div
        className={`${
          isMenuOpen ? 'fixed inset-0 z-40 lg:static lg:translate-x-0' : 'hidden lg:block'
        } w-full lg:w-80 bg-gray-800 text-white flex-shrink-0 lg:flex lg:flex-col transition-transform duration-300 ease-in-out transform lg:translate-x-0 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 lg:p-6 sticky top-0 bg-gray-800 border-b border-gray-700 z-10">
          <h2 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2 flex items-center">
            <FiStar className="mr-2" />
            Profile Details
          </h2>
          <p className="text-gray-300 text-xs lg:text-sm">Click a leader to view details</p>
        </div>
        
        <div className="p-4 flex-1 space-y-4">
          {selectedNode ? (
            <RoleDetails person={selectedNode} />
          ) : (
            <div className="flex flex-col items-center justify-center text-center space-y-3 h-full text-gray-300">
              <FiUsers className="w-12 h-12 text-gray-500" />
              <div>
                <h3 className="text-sm font-light mb-1">Select a Leader</h3>
                <p className="text-gray-500 text-xs">Click a profile to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Scrollable Main Content */}
      <div className="flex-1 overflow-y-auto lg:ml-0">
        {/* Hero Section - Responsive height */}
        <div className="relative h-64 sm:h-80 lg:h-96 w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 lg:mb-4">
                👥 Leadership Hierarchy
              </h1>
              <p className="text-lg sm:text-xl text-yellow-400 font-light">
                Lanka Spa Association
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive padding */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gray-900">
          <div className="space-y-12">
            {/* CEO */}
            <section className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 rounded-full mb-6">
                <FiAward className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Executive Leadership</span>
              </div>
              <ProfileCard person={leadershipData} />
            </section>

            {/* Directors */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center text-emerald-400">
                <FiBriefcase className="mr-2 w-5 h-5" />
                Board of Directors
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                {directors.map(director => (
                  <ProfileCard key={director.id} person={director} />
                ))}
              </div>
            </section>

            {/* Instructors */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center text-blue-400">
                <FiBook className="mr-2 w-5 h-5" />
                Legal and Consultancy
              </h2>
              <div className="grid grid-cols-2 gap-8 justify-items-center">
                {instructors.map(instructor => (
                  <ProfileCard key={instructor.id} person={instructor} />
                ))}
              </div>
            </section>

            {/* Support Staff */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center text-purple-400">
                <FiUserCheck className="mr-2 w-5 h-5" />
                Executive Support
              </h2>
              <div className="grid grid-cols-3 gap-8 justify-items-center">
                {supportStaff.map(staff => (
                  <ProfileCard key={staff.id} person={staff} />
                ))}
              </div>
            </section>

            {/* Divisional Organizers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center justify-center text-indigo-400">
                <FiUsers className="mr-2 w-5 h-5" />
                Regional Leadership
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
                {divisionalOrganizers.map(organizer => (
                  <ProfileCard key={organizer.id} person={organizer} />
                ))}
              </div>
            </section>
          </div>

          {/* Legend Section */}
          <section className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-center text-white">
              <FiAward className="mr-2 text-yellow-400" />
              Position Legend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { color: 'yellow-400', label: 'Executive', type: 'executive' },
                { color: 'emerald-400', label: 'Directors', type: 'director' },
                { color: 'blue-400', label: 'Instructors', type: 'instructor' },
                { color: 'purple-400', label: 'Support', type: 'support' },
                { color: 'indigo-400', label: 'Organizers', type: 'organizer' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center p-3 bg-gray-800 rounded-lg border border-gray-700">
                  <div className={`w-6 h-6 rounded-full bg-${item.color} mb-2 shadow-sm`}></div>
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;