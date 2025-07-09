import { UploadOutlined } from "@ant-design/icons";
import { Input, Upload } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Mybutton } from "../../Elements/Button/Button";
import { createPost } from "../../../service/post/postSlice";

const NewPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    body: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  //Antd no deja usar e.target
  const handleImageChange = ({ file }) => {
    setData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("image", data.image);

    try {
      await dispatch(createPost(formData));
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Crea tu nuevo post!</h1>
      <div style={{ padding: "0 24px" }}></div>
      <form onSubmit={handleSubmit} className="new-post-form">
        <Input
          name="title"
          placeholder="Título del post"
          value={data.title}
          onChange={handleChange}
          size="large"
          style={{ color: "#d06000", marginBottom: "16px" }}
        ></Input>
        <Input.TextArea
          name="body"
          placeholder="Escribe aquí tu descripción del post"
          value={data.body}
          onChange={handleChange}
          size="large"
          style={{ color: "#d06000", marginBottom: "16px" }}
        ></Input.TextArea>
        <Upload
          beforeUpload={() => false}
          maxCount={1}
          listType="picture"
          onChange={handleImageChange}
        >
          <Mybutton
            style={{
              backgroundColor: "#d06000",
              borderRadius: "999px",
              marginBottom: "16px",
            }}
            icon={<UploadOutlined />}
          >
            Seleccionar imagen
          </Mybutton>
        </Upload>

        <Mybutton
          htmlType="submit"
          style={{
            backgroundColor: "#d06000",
            borderRadius: "999px",
            marginBottom: "16px",
          }}
        >
          Publicar post
        </Mybutton>
      </form>
    </>
  );
};

export default NewPost;
