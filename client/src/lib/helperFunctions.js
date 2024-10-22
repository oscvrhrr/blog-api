

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

const sortPosts = (posts, sortValue) => {
  const newArr = [...posts]
  if(sortValue === 'latest') {
    newArr.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    return newArr
  } else if (sortValue === 'all') {
    return newArr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  return newArr
}





export { truncateContent, formatDate, sortPosts }


