import Post from "../Posts/Post/Post";
import SearchInput from "./SearchInput/SearchInput";

const Search = () => {
  return (
    <>
      <h1 style={{ marginTop: "70px" }}>Explora los mejores posts</h1>
      <div>
        <SearchInput />
        <Post />
      </div>
    </>
  );
};

export default Search;
