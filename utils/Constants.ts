export const PetFriendly = ['No Pets', 'Cats Only', 'Dog & Cats Only', 'Yes']
export const PropertyTypes = ['House', 'Apartment', 'Condominium']
export const StateLocations = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

export const States = [
  { value: 'Alabama', label: 'AL' },
  { value: 'Alaska', label: 'AK' },
  { value: 'Arizona', label: 'AZ' },
  { value: 'Arkansas', label: 'AR' },
  { value: 'California', label: 'CA' },
  { value: 'Colorado', label: 'CO' },
  { value: 'Connecticut', label: 'CT' },
  { value: 'Delaware', label: 'DE' },
  { value: 'Florida', label: 'FL' },
  { value: 'Georgia', label: 'GA' },
  { value: 'Hawaii', label: 'HI' },
  { value: 'Idaho', label: 'ID' },
  { value: 'Illinois', label: 'IL' },
  { value: 'Indiana', label: 'IN' },
  { value: 'Iowa', label: 'IA' },
  { value: 'Kansas', label: 'KS' },
  { value: 'Kentucky', label: 'KY' },
  { value: 'Louisiana', label: 'LA' },
  { value: 'Maine', label: 'ME' },
  { value: 'Maryland', label: 'MD' },
  { value: 'Massachusetts', label: 'MA' },
  { value: 'Michigan', label: 'MI' },
  { value: 'Minnesota', label: 'MN' },
  { value: 'Mississippi', label: 'MS' },
  { value: 'Missouri', label: 'MO' },
  { value: 'Montana', label: 'MT' },
  { value: 'Nebraska', label: 'NE' },
  { value: 'Nevada', label: 'NV' },
  { value: 'New Hampshire', label: 'NH' },
  { value: 'New Jersey', label: 'NJ' },
  { value: 'New Mexico', label: 'NM' },
  { value: 'New York', label: 'NY' },
  { value: 'North Carolina', label: 'NC' },
  { value: 'North Dakota', label: 'ND' },
  { value: 'Ohio', label: 'OH' },
  { value: 'Oklahoma', label: 'OK' },
  { value: 'Oregon', label: 'OR' },
  { value: 'Pennsylvania', label: 'PA' },
  { value: 'Rhode Island', label: 'RI' },
  { value: 'South Carolina', label: 'SC' },
  { value: 'South Dakota', label: 'SD' },
  { value: 'Tennessee', label: 'TN' },
  { value: 'Texas', label: 'TX' },
  { value: 'Utah', label: 'UT' },
  { value: 'Vermont', label: 'VT' },
  { value: 'Virginia', label: 'VA' },
  { value: 'Washington', label: 'WA' },
  { value: 'West Virginia', label: 'WV' },
  { value: 'Wisconsin', label: 'WI' },
  { value: 'Wyoming', label: 'WY' },
]

export const inputProps = [
  {
    xs: 12,
    sm: 6,
    name: 'firstName',
    label: 'First Name',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 6,
    name: 'lastName',
    label: 'Last Name',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 6,
    name: 'email',
    label: 'Email',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 6,
    name: 'phone',
    label: 'Phone',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 12,
    name: 'streetAddress',
    label: 'Address',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 12,
    name: 'city',
    label: 'City',
    type: 'textfield',
  },
  {
    xs: 6,
    sm: 6,
    name: 'state',
    label: 'State',
    type: 'select',
    options: StateLocations,
  },
  {
    xs: 6,
    sm: 6,
    name: 'zipcode',
    label: 'Zipcode',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 6,
    name: 'latitude',
    label: 'Latitude',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 6,
    name: 'longitude',
    label: 'Longitude',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 12,
    name: 'price',
    label: 'Price',
    type: 'textfield',
  },
  {
    xs: 12,
    sm: 12,
    name: 'images',
    label: 'Upload',
    type: 'file',
  },
  {
    xs: 6,
    sm: 6,
    name: 'bathrooms',
    label: 'Bathrooms',
    type: 'select',
    options: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    xs: 6,
    sm: 6,
    name: 'bedrooms',
    label: 'Bedrooms',
    type: 'select',
    options: [0, 1, 2, 3, 4, 5, 6],
  },
  { xs: 6, sm: 6, name: 'sqft', label: 'Sqft', type: 'textfield' },
  {
    xs: 6,
    sm: 6,
    name: 'carSpaces',
    label: 'Car Spaces',
    type: 'select',
    options: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    xs: 6,
    sm: 6,
    name: 'type',
    label: 'Property Type',
    type: 'select',
    options: ['Apartment', 'House', 'Condominium'],
  },
  {
    xs: 8,
    sm: 8,
    name: 'datePosted',
    label: 'Date Posted',
    type: 'Date Picker',
  },
]
