import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import * as DmnEditor from "@kogito-tooling/kie-editors-standalone/dist/dmn";
//import { Page } from "@patternfly/react-core";

function Dmn() {
  const dmnEditor = useRef(null);
  console.log(dmnEditor);
  const [editor, setEditor] = useState();

  // console.log('setEditor value '+ setEditor);

  useEffect(() => {
    const edtr = DmnEditor.open({
      container: document.getElementById("dmn-editor-container"),
      initialContent: Promise.resolve(""),
      readOnly: false,
    });

    setEditor(edtr);
  }, []);

  //console.log(JSON.stringify(editor));

  const redo1 = () => {
    // alert('redo');
    editor.redo();
  };
  const undo1 = () => {
    editor.undo();
    // alert('undo');
  };
  const download = () => {
    editor.getContent().then((content) => {
      const elem = window.document.createElement("a");
      elem.href =
        "data:text/plain;charset=utf-8," + encodeURIComponent(content);
      elem.download = "model.dmn";
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
      editor.markAsSaved();
    });
  };

  const downloadSvg = () => {
    editor.getPreview().then((svgContent) => {
      const elem = window.document.createElement("a");
      elem.href =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgContent);
      elem.download = "model.svg";
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    });
  };

  return (
    <>
      {/* <h6>DMN editor for React18</h6> */}
      <div className="toolbar">
        <span className="hidden"> File contains unsaved changes. </span>
        <Button id="undo" variant="secondary" onClick={undo1}>
          Undo
        </Button>{" "}
        <Button id="redo" variant="secondary" gap={2} onClick={redo1}>
          Redo
        </Button>{" "}
        {/* <Button id="download" onClick={download}>
          Download
        </Button>{" "} */}
        <Button id="downloadSvg" variant="success" onClick={downloadSvg}>
          Download SVG
        </Button>
      </div>

      <div
        className="margin-top-20"
        id="dmn-editor-container"
        ref={dmnEditor}
        style={{ height: "100vh" }}
      ></div>
    </>
  );
}

export default Dmn;
