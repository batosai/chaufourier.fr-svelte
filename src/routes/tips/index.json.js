import client from "$lib/prismic";
import Prismic from "@prismicio/client";

export async function get({ url, params }) {
  let page = url.searchParams.has("page") ? url.searchParams.get("page") : 1;
  const search = url.searchParams.has("search") ? url.searchParams.get("search") : null;

  const predicates = [
    Prismic.Predicates.at("document.type", "tips"),
  ]

  if (search) {
    predicates.push(
      Prismic.Predicates.fulltext('document', search)
    );
  }

  const response = await client.query(
    predicates,
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
