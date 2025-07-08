import { Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllPost, getPostByTitle } from "../../../service/post/postSlice";
import "./SearchInput.css";
import { SearchOutlined } from "@ant-design/icons";

const SearchInput = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { postTitle } = useParams();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setText(value);

    if (value === "") {
      dispatch(getAllPost());
    }

    if (e.key === "Enter" && value.trim() !== "") {
      navigate(`/search/${value}`);
    }
  };

  useEffect(() => {
    if (postTitle) {
      dispatch(getPostByTitle(postTitle));
    }
  }, [postTitle, dispatch]);

  return (
    <div className="search-container">
      <Input
        size="large"
        prefix={<SearchOutlined />}
        onKeyUp={handleSearch}
        placeholder="Escríbe tu búsqueda y presiona 'Enter' "
        name="text"
      ></Input>
    </div>
  );
};

export default SearchInput;
