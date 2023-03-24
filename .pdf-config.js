

module.exports = {

    css: `.hljs {font-family: Fira Code;font-size:80%; break-inside: avoid}
     table {break-inside: avoid; }`
 ,
    body_class: "markdown-body",
    highlight_style: "atom-one-dark-reasonable",
    marked_options: {
      headerIds: true,
      smartypants: true,
      gfm:true
    },
    pdf_options: {
      format: "A4",
      margin: '20mm 20mm 30mm 20mm',
  },
    stylesheet_encoding: "utf-8"
  }