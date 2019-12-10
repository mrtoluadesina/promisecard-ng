import React, { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => <input {...props} ref={ref} />);

export const TextArea = forwardRef((props, ref) => (
  <textarea {...props} ref={ref} />
));
