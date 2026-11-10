import personal from './personal.js'

// Details taken from Hassan's CV. The BSSE semester comes from personal.js so it is updated in one place.
const education = [
  {
    id: 'isra-bsse',
    degree: 'Bachelor of Science in Software Engineering (BSSE)',
    university: personal.university,
    meta: '2023 – Present · Expected graduation: 2027',
    status: personal.semester,
  },
  {
    id: 'hssc',
    degree: 'Higher Secondary School Certificate (Intermediate)',
    university: 'Board of Intermediate & Secondary Education (B.I.S.E.), Hyderabad',
    meta: '',
    status: '2020',
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC, Engineering Group)',
    university: 'Board of Intermediate & Secondary Education (B.I.S.E.), Hyderabad',
    meta: '',
    status: '2018',
  },
]

export default education
