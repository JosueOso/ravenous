const apiKey = 'RrPWJ1z9UYg8XRTmMBzGOs0Y8w-8jMsx01_tkwZAGKkm3387rU3DHuoirF-hs6z4QY1tvhBbTp8rielgDdCgOdZ19KgNlE8uDinp8S4wNt4eF8u1kp-Q6MvTM-3DYXYx'

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp; 