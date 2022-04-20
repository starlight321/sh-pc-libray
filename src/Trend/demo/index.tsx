import React, { memo } from 'react';
// @ts-ignore
import { Trend, renderRatio } from '@sh/pc-library';

const data = {
  value: 0,
  huanbiValue: 439,
  tongbiValue: 528,
  huanbiDiff: -439,
  tongbiDiff: -528,
  huanbiRatio: -1,
  tongbiRatio: -1,
};
export default memo(() => {
  return (
    <div>
      <Trend type={data.huanbiDiff > 0 ? 'up' : 'down'} />
      {Math.abs(data.huanbiDiff)}

      {renderRatio(data.huanbiRatio)}
    </div>
  );
});
