import React from "react";
import "../board/boardStyle.scss";
import BoardMember from "../../components/boardMember/BoardMember";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function Board() {
  const { data, error } = useSWR(`${apiURL}/items/member`);

  if (error) {
    return (
      <div style={{ height: "40vh", textAlign: "center" }}>
        <h3>something went wrong, please reload the page</h3>;
      </div>
    );
  }

  if (data) {
    const { data: member } = data;

    console.log(member);

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
            accusantium dolore delectus libero fuga sunt? Sint. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Itaque unde facilis
            asperiores maiores non, enim laborum voluptatibus delectus quos ex!
            Sint totam possimus a neque sequi reiciendis architecto blanditiis
            corporis dolore quis temporibus repellat repudiandae tempore
            dignissimos ullam, repellendus, voluptatibus maxime nulla eum,
            praesentium porro soluta perspiciatis. Possimus, aut laborum!
          </p>
          <div className="board_content_list">
            {member
              .filter((e) => e.group == "board")
              .map((post) => {
                return (
                  <div key={post.id} className="board_content_list_item">
                    <BoardMember
                      fname={post.firstname}
                      lname={post.lastname}
                      imgId={post.photo}
                      degree={post.degree}
                      email={post.email}
                      department={post.department_id}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default Board;
