import { Button, Modal as AntModal, List, Avatar, Input } from "antd";
import "./CommentsModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateComment } from "../../../service/comments/commentSlice";

const CommentsModal = ({ open, onClose, post, onCommentUpdated }) => {
  const user = useSelector((state) => state.auth.user);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const dispatch = useDispatch();

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      console.log("Token desde redux:", token);

      const resultAction = await dispatch(
        updateComment({ commentId: editingCommentId, updatedComment: { text: editedText }, token })
      );
      if (updateComment.fulfilled.match(resultAction)) {
        onCommentUpdated(resultAction.payload);
        setEditingCommentId(null);
        setEditedText("");
      }
    } catch (error) {
      console.error("Error al actualizar comentario:", error);
    }
  };

  const renderComment = (comment) => {
    const isAuthor = user?._id === comment.user?._id;
    const isEditing = editingCommentId === comment._id;

    return (
      <List.Item
        key={comment._id}
        actions={
          isAuthor
            ? [
                isEditing ? (
                  <Button key="save" type="link" onClick={handleSave}>
                    Guardar
                  </Button>
                ) : (
                  <Button
                    key="edit"
                    type="link"
                    onClick={() => {
                      setEditingCommentId(comment._id);
                      setEditedText(comment.text);
                    }}
                  >
                    Editar
                  </Button>
                ),
              ]
            : []
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={comment.user?.image} />}
          title={<span className="modal-title">{comment.user?.name}</span>}
          description={
            isEditing ? (
              <Input.TextArea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                autoSize
              />
            ) : (
              <span className="modal-description">{comment.text}</span>
            )
          }
        />
      </List.Item>
    );
  };

  return (
    <>
      <AntModal
        title={<h4 className="modal-title">Comentarios del post</h4>}
        open={open}
        onCancel={onClose}
        footer={null}
      >
        <List
          itemLayout="horizontal"
          dataSource={post?.comments || []}
          renderItem={renderComment}
        />
        <Button>Crear comentario</Button>
      </AntModal>
    </>
  );
};

export default CommentsModal;
