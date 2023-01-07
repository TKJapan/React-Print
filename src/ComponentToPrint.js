import React from 'react';

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>この文字が印刷されるよ！</div>
  );
});

export default ComponentToPrint