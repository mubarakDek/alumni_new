import React from "react";
import "../news/newsPageStyle.scss";
import News from "../../components/News";
import SectionTitle from "../../components/SectionTitle";

// api url
import { apiURL } from "../../globals";

// swr library
import useSWR from "swr";

function NewsPage() {
  const { data, error } = useSWR(`${apiURL}/items/news`);

  if (error) {
    return (
      <div style={{ height: "40vh", textAlign: "center" }}>
        <h3>something wenet wrong, please reload page</h3>;
      </div>
    );
  }

  if (data) {
    const { data: news } = data;

    return (
      <section className="newspage">
        <div className="newspage_content mx-auto mt-5 p-5">
          <SectionTitle title="All News" />
          <div className="newspage_content_list">
            {news.map((post) => {
              return (
                <div key={post.id} className="newspage_content_list_item">
                  <News
                    title={post.title}
                    createOn={post.created_on}
                    imgId={post.photo}
                    newsId={post.id}
                  />
                </div>
              );
            })}
          </div>
          <button className="btn-primary mx-auto mt-4" type="button">
            Load more
          </button>
        </div>
      </section>
    );
  }

  return null;
}

export default NewsPage;
