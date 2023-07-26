/** @format */

document.addEventListener('alpine:init', () => {
  Alpine.data('catalogue', () => ({
    featured: ['HP-E785dn', 'HP-E786dn', 'HP-E877dn', 'HP-E730dn', 'HP-E731dn', 'HP-E826dn', 'HP-E77650dn', 'HP-47528f'],
    brands: {
      HP: {
        logo: '/recarts-230527-preview/assets/images/categories/hp.svg',
        products: {
          'HP-E785dn': {
            id: 'HP-E785dn',
            model: 'HP E785dn',
            name: 'HP Color LaserJet Managed MFP E785dn',
            image: 'HP Color LaserJet Managed MFP E785dn.png',
            tagline: 'Powerful. Flexible. Secure.',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 23 - 28 ppm)', "HP's custom designed quad-core processor", 'Tailored on-device and cloud connected solutions', 'HP Wolf Enterprise Security', 'Energy efficient printing that meets EPEAT Gold, Blue Angel and Energy Star standards'],
          },
          'HP-E786dn': {
            id: 'HP-E786dn',
            model: 'HP E786dn',
            name: 'HP Color LaserJet Managed MFP E786dn',
            image: 'HP Color LaserJet Managed MFP E786dn.png',
            tagline: 'Powerful. Flexible. Secure.',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 25 - 35 ppm)', "HP's custom designed quad-core processor", 'Tailored on-device and cloud connected solutions', 'HP Wolf Enterprise Security', 'Energy efficient printing that meets EPEAT Gold, Blue Angel and Energy Star standards'],
          },
          'HP-E877dn': {
            id: 'HP-E877dn',
            model: 'HP E877dn',
            name: 'HP Color LaserJet Managed MFP E877dn',
            image: 'HP Color LaserJet Managed MFP E877dn.png',
            tagline: 'Powerful. Flexible. Secure.',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 40 - 70 ppm)', "HP's custom designed quad-core processor", 'Tailored on-device and cloud connected solutions', 'HP Wolf Enterprise Security', 'Energy efficient printing that meets EPEAT Gold, Blue Angel and Energy Star standards'],
          },
          'HP-E730dn': {
            id: 'HP-E730dn',
            model: 'HP E730dn',
            name: 'HP LaserJet Managed MFP E730dn',
            image: 'HP LaserJet Managed MFP E730dn.png',
            tagline: 'Powerful. Flexible. Secure.',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 25 - 30 ppm)', "HP's custom designed quad-core processor", 'Tailored on-device and cloud connected solutions', 'HP Wolf Enterprise Security', 'Energy efficient printing that meets EPEAT Gold, Blue Angel and Energy Star standards'],
          },
          'HP-E731dn': {
            id: 'HP-E731dn',
            model: 'HP E731dn',
            name: 'HP LaserJet Managed MFP E731dn',
            image: 'HP LaserJet Managed MFP E731dn.png',
            tagline: 'Powerful. Flexible. Secure.',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 30 - 40 ppm)', "HP's custom designed quad-core processor", 'Tailored on-device and cloud connected solutions', 'HP Wolf Enterprise Security', 'Energy efficient printing that meets EPEAT Gold, Blue Angel and Energy Star standards'],
          },
          'HP-E826dn': {
            id: 'HP-E826dn',
            model: 'HP E826dn',
            name: 'HP LaserJet Managed MFP E826dn',
            image: 'HP LaserJet Managed MFP E826dn.png',
            tagline: 'Powerful. Flexible. Secure.',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 50 - 70 ppm)', "HP's custom designed quad-core processor", 'Tailored on-device and cloud connected solutions', 'HP Wolf Enterprise Security', 'Energy efficient printing that meets EPEAT Gold, Blue Angel and Energy Star standards'],
          },
          'HP-E77650dn': {
            id: 'HP-E77650dn',
            model: 'HP E77650dn',
            name: 'HP PageWide Managed Color MFP E77650dn',
            image: 'HP PageWide Managed Color MFP E77650dn.png',
            tagline: 'HP PageWide delivers a breakthrough low color cost, maximum uptime, and the strongest security',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 50 - 70 ppm)', 'Affordable color printing for every office', 'Minimal interruptions. Maximum uptime', 'HP Sure Start', ''],
          },
          'HP-47528f': {
            id: 'HP-47528f',
            model: 'HP 47528f',
            name: 'HP Color LaserJet Managed MFP E47528f',
            image: 'HP Color LaserJet Managed MFP E47528f.png',
            tagline: "HP's entry-level Enterprise-class Color MFP",
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 27 - 29 ppm)', 'Easy to use, simple to manage', "The world's most secure printing", 'HP FutureSmart', ''],
          },
        },
      },
      Canon: {
        logo: '/assets/images/categories/canon.svg',
        products: {
          'CANON-IRAdv-C5250': {
            id: 'CANON-IRAdv-C5250',
            model: 'CANON IRAdv C5250',
            name: 'Canon imageRUNNER ADVANCE C5250',
            image: 'Canon imageRUNNER ADVANCE C5250.png',
            tagline: 'Designed for busy workgroups that demand outstanding efficiency',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 51 - 55 ppm)', 'Scan directly to Microsoft Word, PowerPoint and searchable PDF formats', 'Hard Disk Drive Lock and Erase', '', ''],
          },
          'CANON-IRAdv-C7580': {
            id: 'CANON-IRAdv-C7580',
            model: 'CANON IRAdv C7580',
            name: 'Canon imageRUNNER ADVANCE C7580i',
            image: 'Canon imageRUNNER ADVANCE C7580i.png',
            tagline: 'Outstanding colour quality, high performance, intuitive usability',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 70 - 80 ppm)', 'Scan directly to Microsoft Word, PowerPoint and searchable PDF formats', '', '', ''],
          },
          'CANON-IRAdv-6275': {
            id: 'CANON-IRAdv-6275',
            model: 'CANON IRAdv 6275',
            name: 'Canon imageRUNNER ADVANCE 6275',
            image: 'Canon imageRUNNER ADVANCE 6275.png',
            tagline: 'Designed for high-volume offices that demand exceptional productivity',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 75 ppm)', 'Scan directly to Microsoft Word, PowerPoint and searchable PDF formats', '', '', ''],
          },
          'CANON-IRAdv-8505': {
            id: 'CANON-IRAdv-8505',
            model: 'CANON IRAdv 8505',
            name: 'Canon imageRUNNER ADVANCE 8505',
            image: 'Canon imageRUNNER ADVANCE 8505.png',
            tagline: 'High performance, intuitive usability, versatile finishing',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black (Up to 105 ppm)', 'Scan directly to Microsoft Word, PowerPoint and searchable PDF formats', '', '', ''],
          },
          'CANON-IRAdv-C5535': {
            id: 'CANON-IRAdv-C5535',
            model: 'CANON IRAdv C5535',
            name: 'Canon imageRUNNER ADVANCE C5535',
            image: 'Canon imageRUNNER ADVANCE C5535.png',
            tagline: 'Intuitive usability, outstanding color quality, high productivity',
            features: ['Print, Copy, Scan, Fax', 'A4 and Letter, Black and Color (Up to 60 ppm)', 'Scan directly to Microsoft Word, PowerPoint and searchable PDF formats', '', '', ''],
          },
        },
      },
    },

    getProduct(id) {
      if (id === undefined) {
        id = new URL(window.location.href).searchParams.get('id');
      }

      return this.brands
        .map((brand) => brand.products)
        .flat()
        .find((product) => product.id === id);
    },
  }));
});
