import { Link } from 'react-router-dom';

import heroImage from '../assets/hero-image.jpg';
import Header from '../components/Header';
import { companiesData } from '../data/companies';
import { cardData } from '../data/landingPageCardData';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="lg">
        <div className="w-full flex gap-10 justify-between">
          <div className="mt-20">
            <h1 className="text-5xl max-w-xs leading-10 tracking-wide">Welcome to </h1>
            <h1 className="mt-2 text-5xl font-medium tracking-wide">
              My<span className="text-primary-sky">Jobs</span>
            </h1>

            <Link
              to="/home"
              className="inline-block bg-primary-sky mt-6 px-4 py-1 rounded hover:bg-primary-sky/80 transition-all">
              Get Started
            </Link>
          </div>
          <div className="h-72 mt-12 z-10 hidden md:block">
            <img
              className="rounded-xl object-cover h-full w-full"
              src={heroImage}
              alt="hero"
            />
          </div>
        </div>
      </Header>

      <section className="bg-light-sky px-6 flex-1 w-full">
        <div className="max-w-4xl mx-auto font-semibold">
          <h2 className="text-not-dark-blue  mt-24">Why Us</h2>

          <div className="w-full mt-4 flex flex-col sm:flex-row gap-6 flex-wrap">
            {cardData.map((item) => (
              <div
                key={item.key}
                className="flex-1 bg-gray-50 p-3 shadow rounded-md hover:shadow-lg transition-all">
                <div className="text-primary-sky max-w-[7rem] capitalize">
                  {item.heading}
                </div>
                <p className="text-sm text-not-dark-blue/70 mt-3">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-not-dark-blue mt-12">Companies Who Trust Us</h2>
          <div className="flex gap-16 flex-wrap mt-4 mb-8 items-center justify-center">
            {companiesData.map((company) => (
              <div key={company.name}>
                <img className="w-28" src={company.img} alt={company.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
