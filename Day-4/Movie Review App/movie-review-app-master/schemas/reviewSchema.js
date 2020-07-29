import * as yup from 'yup';

export default reviewSchema = yup.object({
    title: yup.string()
      .required()
      .min(4),
    body: yup.string()
      .required()
      .min(8),
    rating: yup.string()
      .required()
      .test('is-rating-1-5', 'Rating must be between 1-5', (val) => {
        return parseInt(val) <6 && parseInt(val) > 0
      })
})