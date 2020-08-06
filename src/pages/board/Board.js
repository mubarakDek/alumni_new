import React from "react";
import "../board/boardStyle.scss";
import BoardMember from "../../components/boardMember/BoardMember";

function Board() {
  return (
    <section className="board">
      <div className="board_content mx-auto p-5">
        <h1>Board Members</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          natus porro aperiam voluptas maxime totam, assumenda quibusdam,
          veritatis numquam at doloremque officiis saepe obcaecati labore
          provident deleniti minima blanditiis eos nisi quaerat? Iste amet
          nobis, deleniti optio, esse id laudantium sed, error cumque
          accusantium dolore delectus libero fuga sunt? Sint. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Itaque unde facilis asperiores
          maiores non, enim laborum voluptatibus delectus quos ex! Sint totam
          possimus a neque sequi reiciendis architecto blanditiis corporis
          dolore quis temporibus repellat repudiandae tempore dignissimos ullam,
          repellendus, voluptatibus maxime nulla eum, praesentium porro soluta
          perspiciatis. Possimus, aut laborum!
        </p>
        <div className="board_content_list">
          <div className="board_content_list_item">
            <BoardMember />
          </div>
          <div className="board_content_list_item">
            <BoardMember />
          </div>
          <div className="board_content_list_item">
            <BoardMember />
          </div>
          <div className="board_content_list_item">
            <BoardMember />
          </div>
          <div className="board_content_list_item">
            <BoardMember />
          </div>
          <div className="board_content_list_item">
            <BoardMember />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Board;
