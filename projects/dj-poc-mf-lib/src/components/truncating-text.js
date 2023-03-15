import React, { useEffect, useRef, useState } from 'react';

import { Tooltip } from '@mui/material';

const TruncatingTextWithTooltip = (originalText, maxWidthPixels, className) => {
  const spanRef = useRef(null);
  const [text, setText] = useState(originalText);
  const [isOverflown, setIsOverflown] = useState(false);

  useEffect(() => {
    const span = spanRef.current;
    const spanWidth = span.offsetWidth;
    setIsOverflown(spanWidth > maxWidthPixels);

    if (isOverflown) {
      const ellipsis = '\u2026';
      span.innerHTML += ellipsis;
      while (span.offsetWidth > maxWidthPixels) {
        span.innerHTML = span.innerHTML.slice(0, -2) + ellipsis;
      }
    }

    setText(span.innerHTML);
  }, [originalText, maxWidthPixels, isOverflown]);

  const updateReference = element => (spanRef.current = element);

  const content = (
    <span
      ref={updateReference}
      className={className}
      style={{ whiteSpace: 'nowrap' }}
    >
      {text}
    </span>
  );

  return isOverflown
    ? (<Tooltip title={originalText}>{content}</Tooltip>)
    : content;
};

export default TruncatingTextWithTooltip;
