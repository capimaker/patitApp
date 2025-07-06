import { Button, Modal as AntModal, List, Avatar } from "antd";
import "./CommentsModal.css";

const CommentsModal = ({ open, onClose, post }) => {
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
          renderItem={(comment) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={comment.user?.image} />}
                title={<span className="modal-title">{comment.user?.name}</span>}
                description={<span className="modal-description">{comment.text}</span>}
              />
            </List.Item>
          )}
        />
        <Button>Crear comentario</Button>
      </AntModal>
    </>
  );
};

export default CommentsModal;
