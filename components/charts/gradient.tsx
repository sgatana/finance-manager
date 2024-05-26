const GradientComponent = ({id, stopColor}: {id: 'income' | 'expenses'; stopColor: '#a78bfa' | '#f472b6'}) => {
  return (
    <linearGradient id={id} x1='0' y1='0' x2='0' y2='1'>
      <stop offset='2%' stopColor={stopColor} stopOpacity={0.8} />
      <stop offset='98%' stopColor={stopColor} stopOpacity={0} />
    </linearGradient>
  );
};
export default GradientComponent;
