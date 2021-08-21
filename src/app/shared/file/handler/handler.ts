export class ArquivoHandler {
  static generateFileLink(
    blobContent: any,
    type: string = "application/octet-stream"
  ) {
    const arquivo = new Blob([blobContent], { type });
    return URL.createObjectURL(arquivo);
  }

  static renderAndDownloadFile(blobContent: any, fileName: string = "arquivo") {
    const arquivo = new Blob([blobContent], {
      type: "application/octet-stream",
    });
    const downloadLink = document.createElement("a");

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.setAttribute("href", window.URL.createObjectURL(arquivo));
    downloadLink.setAttribute("download", fileName);
    downloadLink.setAttribute("target", "_blank");
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
