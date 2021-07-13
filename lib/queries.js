export const SECTIONS_QUERY = `SELECT
      p.id AS page_id,
      p.title AS page_title,
      p.path AS page_path,
      p.order_ AS page_order,
      p.sectionid As page_sections_id,
      p.seoid AS page_seo_id,
      s.id AS section_id,
      s.title AS section_title,
      s.order_ AS section_order,
      s.type AS section_type,
      s.filter AS section_filter,
      s.blockid AS section_block_id,
      s.pageid AS section_page_id,

      b.id AS block_id,
      b.title AS block_title,
      b.lead AS block_lead,
      b.excerpt AS block_excerpt,
      b.content AS block_content,
      b.mediaid AS block_media_id,

      b.sectionid AS block_section_id,


      m.id AS media_id,
      m.title AS media_title,
      m.url AS media_url,
      m.alt AS media_alt,
      m.blockid AS media_block_id,
      m.seoid AS media_seo_id,
      seo.id AS seo_id,
      seo.title AS seo_title,
      seo.description AS seo_description,
      seo.keywords AS seo_keywords,
      seo.sitename AS seo_sitename,
      seo.url AS seo_url,
      seo.mediaid AS seo_media_id,
      seo.pageid AS seo_page_id
    FROM
      pages AS p
      LEFT JOIN seo ON seo.id = ANY (p.seoid)
      LEFT JOIN sections AS s ON s.id = ANY (p.sectionid)
      LEFT JOIN blocks AS b ON b.id = ANY (s.blockid)
      LEFT JOIN media AS m ON m.id = ANY (b.mediaid)
      ORDER BY p.id ASC, s.order_ ASC
    `;

export const PAGES_QUERY = `SELECT
    *,
    p.id AS page_id,
    p.title AS page_title,
    p.path AS page_path,
    p.order_ AS page_order,
    p.sectionid As page_sections_id,
    p.seoid AS page_seo_id,
    s.id AS section_id,
    s.title AS section_title,
    s.order_ AS section_order,
    s.type AS section_type,
    s.filter AS section_filter,
    s.blockid AS section_block_id,
    s.pageid AS section_page_id,
    s.widgetid AS section_widget_id,
    b.id AS block_id,
    b.title AS block_title,
    b.lead AS block_lead,
    b.excerpt AS block_excerpt,
    b.content AS block_content,
    b.mediaid AS block_media_id,
    b.linkid AS block_link_id,
    b.sectionid AS block_section_id,
    b.widgetid AS block_widget_id,
    b.listsid AS block_list_id,
    media.id AS media_id,
    media.title AS media_title,
    media.url AS media_url,
    media.alt AS media_alt,
    media.blockid AS media_block_id,
    media.seoid AS media_seo_id,
    media.testimonialsid AS media_testimonials_id,
	  media.listsid AS media_lists_id,
    m1.id AS media_id,
    m1.title AS media_title,
    m1.url AS media_url,
    m1.alt AS media_alt,
    m1.blockid AS media_block_id,
    m1.seoid AS media_seo_id,
    m1.testimonialsid AS media_testimonials_id,
	  m1.listsid AS media_lists_id,
	  m2.id AS media_id,
    m2.title AS media_title,
    m2.url AS media_url,
    m2.alt AS media_alt,
    m2.blockid AS media_block_id,
    m2.seoid AS media_seo_id,
    m2.testimonialsid AS media_testimonials_id,
	  m2.listsid AS media_lists_id,
    link.id AS link_id,
    link.title AS link_title,
    link.description AS link_description,
    link.href AS link_href,
    link.is_external AS link_is_external,
    link.type AS link_type,
    link.blockid AS link_block_id,
    w.id AS widget_id,
    w.title AS widget_title,
    w.type AS widget_type,
    w.filter AS widget_filter,
    w.mediaid AS widget_media_id,
    w.sectionid AS widget_section_id,
    w.blockid AS widget_block_id,
    w.testimonialid AS widget_testimonial_id,
    w.linkid AS widget_link_id,
    t.id AS testimonial_id,
    t.content AS testimonial_content,
    t.user_ AS testimonial_user,
    t.position AS testimonial_position,
    t.company AS testimonial_company,
    t.widgetid AS testimonial_widget_id,
    t.mediaid AS testimonial_media_id,
    li.id AS lists_id,
    li.title AS lists_title,
    li.name AS lists_name,
    li.order_ AS lists_order,
    li.mediaid AS lists_media_id,
    li.blockid AS lists_block_id,
    seo.id AS seo_id,
    seo.title AS seo_title,
    seo.description AS seo_description,
    seo.keywords AS seo_keywords,
    seo.sitename AS seo_sitename,
    seo.url AS seo_url,
    seo.mediaid AS seo_media_id,
    seo.pageid AS seo_page_id
FROM
    pages AS p
    LEFT JOIN seo ON seo.id = ANY (p.seoid)
    LEFT JOIN sections AS s ON s.id = ANY (p.sectionid)
    LEFT JOIN blocks AS b ON b.id = ANY (s.blockid)
    LEFT JOIN links AS link ON link.id = ANY(b.linkid)
    LEFT JOIN widgets AS w ON w.id = ANY(b.widgetid)
    LEFT JOIN lists AS li ON li.id = ANY(b.listsid)
    LEFT JOIN testimonials AS t ON t.id = ANY(w.testimonialid)
    LEFT JOIN media ON media.id = ANY (b.mediaid)
    LEFT JOIN media AS m1 ON m1.id = ANY (li.mediaid)
    LEFT JOIN media AS m2 ON m2.id = ANY (t.mediaid)
ORDER BY p.id ASC`;
