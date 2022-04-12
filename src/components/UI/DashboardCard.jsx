import React from 'react';

const DashboardCard = ({
  figures,
  type,
  figureStyle,
  className,
  typeStyle,
}) => {
  return (
    <div className={className}>
      <h2 className={`${figureStyle}`}>{figures}</h2>
      <h6 className={`${typeStyle}`}>{type}</h6>
    </div>
  );
};

export default DashboardCard;
