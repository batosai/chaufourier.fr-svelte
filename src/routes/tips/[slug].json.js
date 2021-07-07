import client from "$lib/prismic";

export async function get({ params }) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  const { slug } = params;

  // const response =  await client.query(Prismic.Predicates.at('document.type', 'home'));
  // const response = await client.getSingle('home');

  const response = await client.getByUID("tips", slug);

  return {
    body: {
      data: response.data,
      first_publication_date: response.first_publication_date,
      tags: response.tags,
    },
  };
}
