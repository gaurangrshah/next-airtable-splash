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

export function Section(data) {
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

export function groupBy(arr, key) {
  return arr.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
