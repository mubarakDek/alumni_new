import React from "react";
import "../news/newsPageStyle.scss";
import News from "../../components/News";
import SectionTitle from "../../components/SectionTitle";

function NewsPage() {
  return (
    <section className="newspage">
      <div className="newspage_content mx-auto mt-5 p-5">
        <SectionTitle title="All News" />
        <div className="newspage_content_list">
          <div className="newspage_content_list_item">
            <News />
          </div>
          <div className="newspage_content_list_item">
            <News />
          </div>
          <div className="newspage_content_list_item">
            <News />
          </div>
        </div>
        <button className="btn-primary mx-auto mt-4" type="button">
          Load more
        </button>
      </div>
    </section>
  );
}

export default NewsPage;
