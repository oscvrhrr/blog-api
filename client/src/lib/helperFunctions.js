const truncateContent = (content, maxLength) => {
  if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
  }
  return content;
};

const formatDate = (date) => {
  const dateObj = new Date(date);
  const formatDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  return formatDate
};







export { truncateContent, formatDate }


