import React from "react";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";
import { getSampleData } from "../data";

type Props = {
  params: { category: Category };
};
async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = getSampleData(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;
