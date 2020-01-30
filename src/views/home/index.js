import React, { Fragment } from 'react';
import PageBanner from '../../components/page-banner';
import AboutSegment from '../../components/about-segment';
import ServicesBanner from '../../components/services-banner';
import TestimonialsBanner from '../../components/testimonials-banner';
import StaffBanner from '../../components/staff-banner';
import LocationBanner from '../../components/location-banner';
// Home View
const Home = () => {
  return (
    <Fragment>
      <PageBanner />
      <AboutSegment />
      <ServicesBanner />
      <TestimonialsBanner />
      <StaffBanner />
      <LocationBanner />
    </Fragment>
  );
};

export default Home;
