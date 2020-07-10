(function () {
  let pdfInstance = null;

  let viewport = null;

  /**
   * render one page
   * @param page
   */
  function renderPage(page) {
    let pdfViewport = page.getViewport(1);

    const container = viewport.children[page.pageIndex];
    pdfViewport = page.getViewport(
      (2 * container.offsetWidth) / pdfViewport.width
    );
    const canvas = container.children[0];
    const context = canvas.getContext("2d");
    canvas.height = pdfViewport.height;
    canvas.width = pdfViewport.width;

    page.render({
      canvasContext: context,
      viewport: pdfViewport,
    });
  }

  /**
   * render PDF
   */
  function render() {
    const renderPagesPromises = [];
    for (let i = 0; i < pdfInstance.numPages; i += 1) {
      renderPagesPromises.push(pdfInstance.getPage(i + 1));
    }

    Promise.all(renderPagesPromises).then((pages) => {
      const pagesHTML = `<div style="width:100%"><canvas style="width:100%"></canvas></div>`.repeat(pages.length);
      viewport.innerHTML = pagesHTML;
      pages.forEach(renderPage);
    });
  }

  /**
   * init PDF viewer and first render page
   * @param pdfURL -- url for PDF
   * @param selector -- css selector for container DIV
   */
  window.initPDFViewer = function (pdfURL, selector) {
    selector = selector || "#pdf_view";
    viewport = document.querySelector(selector);

    pdfjsLib.getDocument(pdfURL).then((pdf) => {
      pdfInstance = pdf;
      render();
    });
  };
})();
