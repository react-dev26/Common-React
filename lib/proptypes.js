import PropTypes from 'prop-types';

export const photoPropType = PropTypes.shape({
  oneXPhoto: PropTypes.shape({
  url: PropTypes.string.isRequired
  }).isRequired,
  twoXPhoto: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  altText: PropTypes.string
});

export const smallAmenitiesPropType = PropTypes.arrayOf(PropTypes.shape({
  header: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
}));

export const bigAmenitiesPropType = PropTypes.arrayOf(PropTypes.shape({
  icon: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}));

export const homePropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  neighborhood: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
});

export const leaseableUnitPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  monthlyFee: PropTypes.number.isRequired,
  leaseableUnitFootnotes: PropTypes.arrayOf(PropTypes.string),
  mainPhoto: photoPropType.isRequired,
  bigAmenities: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string.isRequired
  })).isRequired,
  description: PropTypes.string,
  smallAmenities: smallAmenitiesPropType.isRequired,
  smallAmenitiesFootnotes: PropTypes.arrayOf(PropTypes.string),
  photoGrid: PropTypes.arrayOf(photoPropType)
});
