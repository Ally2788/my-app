import * as Yup from 'yup';

const validationSchema = Yup.object({
    date: Yup.string().required('Please choose a date.'),
    time: Yup.string().required('Please choose a time.'),
    guests: Yup.number()
      .min(1, 'Please enter a number of guests between 1 and 10.')
      .max(10, 'Please enter a number of guests between 1 and 10.')
      .required('Please enter the number of guests.'),
    occasion: Yup.string().required('Please select an occasion.')
  });
describe('BookingForm validation schema', () => {
  it('validates correct form data', async () => {
    const validData = {
      date: '2024-07-15',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday'
    };

    await expect(validationSchema.validate(validData)).resolves.toEqual(validData);
  });

  it('validates incorrect form data', async () => {
    const invalidData = {
      date: '',
      time: '',
      guests: 11,
      occasion: ''
    };

    await expect(validationSchema.validate(invalidData)).rejects.toThrow();
  });

  it('validates individual field errors', async () => {
    const invalidData = {
      date: '',
      time: '',
      guests: 11,
      occasion: ''
    };

    try {
      await validationSchema.validate(invalidData, { abortEarly: false });
    } catch (error) {
      console.log('Validation errors:', error.errors); // Log errors to see what is returned

      // Make sure to handle cases where `error.errors` might be undefined
      if (error.errors) {
        expect(error.errors).toContain('Please choose a date.');
        expect(error.errors).toContain('Please choose a time.');
        expect(error.errors).toContain('Please enter a number of guests between 1 and 10.');
        expect(error.errors).toContain('Please select an occasion.');
      } else {
        throw new Error('No validation errors returned');
      }
    }
  });
});
