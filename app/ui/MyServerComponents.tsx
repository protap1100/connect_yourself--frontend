const MyServerComponents = async () => {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(post);
  const postData = await post.json();
  return <div>MyServerComponents</div>;
};

export default MyServerComponents;
