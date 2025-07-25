import {
  Metric,
  onCLS,
  onFCP,
  onLCP,
  onTTFB,
} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
    onFCP(onPerfEntry);
  }
};

export default reportWebVitals;

