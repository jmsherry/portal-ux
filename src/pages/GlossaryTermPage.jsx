import React from "react";
import Code from "../components/CodeBlock";
import ErrorBoundaryUI from "../components/ErrorBoundary";

const CSSCode = `
  .list-item {
    width: 200px;
    flex-basis: auto;
    // flex-basis: 200px;
  }
`;

function GlossaryTermPage() {
  return (
    <ErrorBoundaryUI>
      <div>
        <h1 className="text-3xl font-bold">Flex-basis</h1>
        <dl className="flex">
          <dt className="mr-1 py-4">Role:</dt>
          <dd className="mr-4 py-4">Layout</dd>
          <dt className="mr-1 py-4">System:</dt>
          <dd className="mr-2 py-4">Flexbox</dd>
        </dl>
        <p>
          <code>flex-basis</code> is a property of flexbox which is used during
          the flexing.
        </p>
        <p>
          When determining size during the 'flex' it is a replacement for
          width/height and does 2 things:
        </p>
        <ul className="list-disc pl-4 m-4">
          <li>
            Determines the base size of an element <strong>before</strong> any
            remaining space is distributed
          </li>
          <li>
            It intelligently switches between width/height depending on the
            flex-direction. So what is a width when the direction is 'row'
            becomes a height when the direction is 'column'.
          </li>
        </ul>
        <h2  className="text-2xl font-bold mb-2">Usage</h2>
        <Code language="CSS" code={CSSCode} classes="mb-8" />

        <h2 className="text-2xl font-bold mb-2">Demo</h2>
        <iFrame
          height="1000"
          style={{ width: "100%" }}
          scrolling="no"
          title="flex-basis visualised"
          src="https://codepen.io/jmsherry/embed/XWYWGrK?default-tab=html%2Cresult"
          frameBorder="no"
          loading="lazy"
          allowTransparency="true"
          allowFullscreen="true"
        >
          See the Pen{" "}
          <a href="https://codepen.io/jmsherry/pen/XWYWGrK">
            flex-basis visualised
          </a>{" "}
          by James Sherry (<a href="https://codepen.io/jmsherry">@jmsherry</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iFrame>
      </div>
    </ErrorBoundaryUI>
  );
}

export default GlossaryTermPage;
