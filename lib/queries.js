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
    WHERE
      p.title IN ('launch')
    ORDER BY p.id ASC, s.order_ ASC`;

    export const GET_PAGE_QUERY = `SELECT
	p.id AS page_id,
	p.title AS page_title,
	p.sectionid AS page_sections_id,
	p.seoid AS pages_seo_id,
	s.id AS section_id,
	s.title AS section_title,
	s.order_ AS section_order,
	s.type AS section_type,
	s.filter AS section_filter,
	s.blockid AS section_block_id,
	b.id AS block_id,
	b.order_ AS block_order,
	b.title AS block_title,
	b.lead AS block_lead,
	b.excerpt AS block_excerpt,
	b.content AS block_content,
  b.bullets AS block_bullets,
	b.mediaid AS block_media_id,
	b.linkid AS block_link_id,
	m.id AS media_id,
	m.title AS media_title,
	m.url AS media_url,
	m.alt AS media_alt,
	m.blockid As media_block_id,
	m.seoid AS media_seo_id,
	links.id AS link_id,
	links.title AS link_title,
	links.description AS link_description,
	links.href AS link_href,
	links.type AS link_type,
	links.is_external AS link_is_externla,
	links.blockid AS link_block_id,
	seo.id AS seo_id,
	seo.title AS seo_title,
	seo.description AS seo_description,
	seo.keywords AS seo_keywords,
	seo.sitename AS seo_sitename,
	seo.url AS seo_url,
	seo.mediaid AS seo_media_id
FROM
	pages AS p
	LEFT JOIN seo ON seo.id = ANY (p.seoid)
	LEFT JOIN sections AS s ON s.id = ANY (p.sectionid)
	LEFT JOIN blocks AS b ON b.id = ANY (s.blockid)
	LEFT JOIN media AS m ON m.id = ANY (b.mediaid)
	LEFT JOIN links ON links.id = ANY (b.linkid)
WHERE
	p.title IN($1)
ORDER BY s.order_ ASC`;
