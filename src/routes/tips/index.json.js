import client from "$lib/prismic";
import Prismic from "@prismicio/client";

export async function get({ query, params }) {
  let page = query.has("page") ? query.get("page") : 1;

  const response = await client.query(
    Prismic.Predicates.at("document.type", "tips"),
    { pageSize: 10, page }
  );

  return {
    body: {
      page: response.page,
      results_per_page: response.results_per_page,
      results_size: response.results_size,
      total_results_size: response.total_results_size,
      total_pages: response.total_pages,
      results: response.results,
    },
  };
}
