export function camelize(str) {
  let arr = str.split("-");
  let capital = arr.map((item, index) =>
    index
      ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      : item.toLowerCase()
  );
  // ^-- change here.
  let capitalString = capital.join("");

  return capitalString;
}

export function removeNullValues(arr) {
  return arr?.map((obj) => {
    Object.keys(obj)?.forEach((key) => {
      if (isEmpty(obj[key])) delete obj[key];
    });
    return obj;
  });
}

export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export function groupBy(arr, key) {
  return arr.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);

    return rv;
  }, {});
}

export function sortRows(rows) {
  const interim = groupBy(rows, "title");
  return Object.keys(interim)?.map((key) => {
    const newKey = camelize(key);
    return {
      [newKey]: interim[key],
    };
  });
}

export function SECTION(data) {
  return {
    id: data?.section_id || "",
    title: data?.section_title || "",
    order: data?.section_order || "",
    type: data?.section_type || "",
    filter: data?.section_filter || "",
    block: {
      id: data?.block_id || "",
      lead: data?.block_lead || "",
      title: data?.block_title || "",
      excerpt: data?.block_excerpt || "",
      content: data?.block_content || "",
      media: {
        id: data?.media_id || "",
        title: data?.media_title || "",
        alt: data?.media_alt || "",
        url: data?.media_url || "",
      },
    },
  };
}

export function Seo(row) {
  return {
    id: row?.seo_id || "",
    title: row?.seo_title || "",
    description: row?.seo_description || "",
    keywords: row?.seo_keywords || "",
    mediaid: row?.seo_media_id || "",
    sitename: row?.seo_sitename || "",
    url: row?.seo_url || "",
  };
}

export function Page(row) {
  return {
    id: row?.section_id || "",
    title: row?.section_title || "",
    order: row?.section_order || "",
    type: row?.section_type || "",
    filter: row?.section_filter || "",
    block: {
      id: row?.block_id || "",
      order: row?.block_order || "",
      lead: row?.block_lead || "",
      title: row?.block_title || "",
      excerpt: row?.block_excerpt || "",
      content: row?.block_content || "",
      bullets: row?.block_bullets || "",
      media: {
        id: row?.media_id || "",
        title: row?.media_title || "",
        alt: row?.media_alt || "",
        url: row?.media_url || "",
      },
      links: {
        id: row?.link_id || "",
        title: row?.link_title || "",
        description: row?.link_description || "",
        href: row?.link_href || "",
        type: row?.link_type || "",
        isExternal: row?.link_is_external || "",
      },
    },
  };
}

export function PageBuild(rows) {
  const seo = new Seo(rows[0]);
  return {
    seo,
    page: rows?.length && rows?.map((row) => new Page(row)),
  };
}
