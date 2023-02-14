import React from "react";
import { Link } from "react-router-dom";
import Code from "../components/CodeBlock";

/*
[optional] A video version of the lesson
Bigger picture explanation
The text of the lesson (to be searchable)
Resources/references
In-class exercises
Link to Homework Page
* Learning confirmation assessment
*/

function LessonPage({ id }) {
  return (
    <div>
      <iframe
        src="https://drive.google.com/file/d/1GZ8KH5AT_ohIY2m4lY7K4yV9I0AVuPf8/preview"
        width="640"
        height="480"
        style={{ margin: "2em auto" }}
      ></iframe>
      <h1 className="text-3xl mb-4 font-bold text-center">CSS Selectors</h1>

      <section aria-labelledby="#bpl" className="mb-8">
        <h2 id="bpl" className="text-3xl mb-4 font-bold text-center">
          Big Picture Location
        </h2>
        <ul className="list-disc ml-4 pl-4">
          <li>
            Having learned to put content on the page with HTML you will have
            noticed that visually the appearance is basic.
          </li>
          <li>
            'Styling' (colours, spacing, fonts, etc.) are the domain of CSS
            (Cascading Style Sheets).
          </li>
          <li>
            To engage CSS on the various elements of the page we have to be able
            to tell CSS about those elements by selecting them.
          </li>
          <li>
            Today's lesson is about learning the methods of selection open to us
            within the CSS system.
          </li>
        </ul>
      </section>

      <section aria-labelledby="#outcomes" className="mb-8">
        <h2 id="outcomes" className="text-3xl mb-4 font-bold text-center">
          Outcomes
        </h2>
        <p className="mb-4">By the end of this section you will understand:</p>
        <ul className="list-disc ml-4 pl-4">
          <li>
            What CSS is? (
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS">
              MDN
            </a>
            )
          </li>
          <li>How to add CSS to your page</li>
          <li>
            How it enhances the user's experience - 3-layer model
            <ul className="list-disc ml-4 pl-4">
              <li>
                progressive enhancement - does the user's experience benefit
                from it
              </li>
              <li>
                graceful degradation - fallback - does the page still work
                without it
              </li>
            </ul>
          </li>

          <li>How it works to interact with elements</li>
          <li>
            What CSS comes included by default (User Agent Style Sheets) and how
            we standardise it cross-browser (Normalize.css)
          </li>
          <li>
            The syntax
            <ul className="list-disc ml-4 pl-4">
              <li>Comments</li>
              <li>
                Rules
                <ul className="list-disc ml-4 pl-4">
                  <li>Selectors</li>
                  <li>
                    Declarations
                    <ul className="list-disc ml-4 pl-4">
                      <li>Properties</li>
                      <li>Values</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            The various ways we can target elements in order to apply styling to
            them:
            <ul className="list-disc ml-4 pl-4">
              <li>Global Selector (*) which selects everything</li>
              <li>Root selector - which selects the top-level element</li>
              <li>
                element selector - which selects all tags of a certain type
                (e.g. all paragraphs)
              </li>
              <li>class selector </li>
              <li>Id selector </li>
              <li>Attribute selector </li>
              <li>
                Adjacent selectors (selecting by multiple selectors on the same
                element)
              </li>
              <li>Stacked selectors</li>
              <li>Pseudo classes (e.g. :hover, :nth-child(), etc.)</li>
              <li>Pseudo elements (e.g. ::selection, ::before, etc.)</li>
              <li>
                Combinators
                <ul className="list-disc ml-4 pl-4">
                  <li>Descendant</li>
                  <li>Immediate Child</li>
                  <li>
                    Adjacent (selecting when an element is adjacent to another)
                  </li>
                  <li>General Sibling</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            How the rules cascade (merge and override each other)
            <ul className="list-disc ml-4 pl-4">
              <li>based on the order in which they are written</li>
              <li>how specific they are (and how to calculate that)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section aria-labelledby="#lesson-text" className="mb-8">
        <h2 id="lesson-text" className="text-2xl font-bold text-center">
          Lesson Text
        </h2>
        <h3 className="text-1xl mb-4 font-bold text-center">What is CSS?</h3>
        <ul>
          <li>A language we use to control presentation</li>
          <li>Fully control how things look and sit on the page</li>
          <li>
            HTML should still be fully usable without CSS; if your CSS does not
            load the page function should not be hindered
          </li>
        </ul>
        <h3 className="text-1xl mb-4 font-bold text-center">
          User-agent stylesheet: Default styles
        </h3>
        <p>
          This is something which the browser adds automatically; styles which
          it adds to elements by itself without us doing anything; this is why
          things like headings, paragraphs etc look different to each other
          right out of the box
        </p>
        <p>
          As you can see in the styles panel on the dev tools, the styles for h1
          at the bottom are applied by the user-agent stylesheet.
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">
          Dealing with default styles
        </h3>
        <p>
          We can use a reset file to reset all of the default CSS styles, these
          were first defined by Erik Meyer: https://meyerweb.com/eric/css/ These
          files are typically called reset.css and they include things such as
          removed margin, padding, box-sizing etc that is added to elements by
          the user-agent.
        </p>
        <p>
          We can also use another called normalise, which is similar but does
          not remove everything; it is a bit less harsh than reset and is the
          one we will use here. We can locally host these files in our project
          if we wish, or we can outsource them and use a cdn to implement them.{" "}
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">
          A note on insertion order
        </h3>
        <p>
          Add the following tag to the head of your HTML file to include
          normalise.css CDN Please note, include this BEFORE your own CSS
          stylesheet; these files are loaded from top to bottom so if you
          include this after your own declared styles, normalise will take
          precedence:{" "}
        </p>
        <Code
          language={"HTML"}
          code={`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />`}
        />
        <p>
          Pay attention to the order that they are listed. This goes for all
          third party stylesheets we add as there are many that we could use;
          bootstrap etc. Your own stylesheet (styles.css) should always be the
          last one listed, and really normalize should always be the first.
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">
          Confirm CSS files
        </h3>
        <p>
          You want to know that your CSS files are definitely being loaded in
          the page and that you've added them correctly, otherwise you won't see
          your styles! Go to the network tab of your dev tools and go to the
          Network panel, reload the page and look for something like this…
        </p>
        <img src="" alt="" />
        <p>
          This shows all loaded resources and we can clearly see we have both
          normalize and styles both loaded in our page.
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">
          Case sensitivity{" "}
        </h3>
        <p>
          CSS is case sensitive when targeting by class and id, but not when
          targeting elements. It is best practise to keep all classes lower case
          and hyphenated, e.g: section-heading
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">
          Targeting elements
        </h3>
        <p>
          If we want to target everything, we can use the universal selector
          which is the star, so:{" "}
        </p>
        <Code
          language={"CSS"}
          code={`* {
   padding: 10px;
}`}
        />
        <p>will add 10px of padding to absolutely every element on the page.</p>
        <p>
          If we want to target by the html element, we simply type the tag name,
          so to target paragraph &lt;p&gt; elements, we would just type:
        </p>
        <Code
          language={"CSS"}
          code={`p {
   padding: 10px;
}`}
        />
        <p>
          Note that targeting in this way, will affect all &lt;p&gt; elements in
          documents that the stylesheet is associated with. We usually use these
          to define generic styles that we want our elements to follow unless we
          specify otherwise later.
        </p>
        <p>
          To target by a given class, we use the dot syntax. An element can have
          as many classes as you want it to, and it can take styles associated
          with them. So, to target this element &lt;p class="example-text"&gt;,
          we use:
        </p>
        <Code
          language={"CSS"}
          code={`.example-text {
   padding: 10px;
}`}
        />
        <p>
          Like before, this will affect all elements with the class
          “example-text” in documents that the stylesheet is associated with. We
          could then add a second class, &lt;p class=”example-text
          another-class”&gt; notice the space. Now we can target it
          .example-text, we can target it by .another-class or we can be more
          specific and use .example-text.another-class.{" "}
        </p>
        <Code
          language={"CSS"}
          code={`.example-text.another-class {
   padding: 10px;
}`}
        />
        <p>
          This selector would only target elements that had both of those
          classes defined, and this is more specific so any styles added to this
          selector would override anything previously defined.
        </p>
        <p>
          To target by a given id, we use the hash syntax. So, to target this
          element&lt;p id="example-text"&gt;, we use:
        </p>
        <Code
          language={"CSS"}
          code={`#example-text {
   padding: 10px;
}`}
        />
        <p>
          Like before, this will affect all elements with the id “example-text”
          in documents that the stylesheet is associated with.{" "}
          <strong>HOWEVER!</strong>
          It is bad practice to do this with id's. These are used to uniquely
          identify an element; any given id should only ever appear once. This
          becomes more apparent why in javascript and DOM manipulation, but…
          just don't do it.
        </p>
        <p>
          Targeting by attributes is another method and it comes in many forms.
          This is a way of targeting elements only if they have a certain
          attribute present, and for this we use square bracket syntax alongside
          the previous examples. For example, &lt;a&gt; elements with a "title"
          attribute would be targeted like so:
        </p>
        <Code
          language={"CSS"}
          code={`a[title] {
   padding: 10px;
}`}
        />
        This can also be done by targeting a class, and adding an attribute.
        This is only the most basic form of attribute selection, see them all
        here:{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">
          https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
        </a>
        <p>
          Then we have pseudo elements and classes. A pseudo element is a way to
          inject elements before and after a targeted elements, along with a
          whole host of others:{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements">
            https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
          </a>{" "}
        </p>
        <p>
          Pseudo classes are selectors we add to initiate change only on certain
          actions; hover, click, focus etc:{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">
            https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
          </a>
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">nth-child</h3>
        <p>
          A way on selecting elements based on their position amongst a group of
          other elements of the same level:{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child">
            https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child
          </a>
        </p>
        <p>
          There are many ways to specify the pattern in which you want to
          select; you can select just one child:
        </p>
        <Code
          language={"CSS"}
          code={`li:nth-child(2) {
   padding: 10px;
}`}
        />
        <p>This example would select the second list item.</p>
        <Code
          language={"CSS"}
          code={`li:nth-child(2n) {
   padding: 10px;
}`}
        />
        <Code
          language={"CSS"}
          code={`li:nth-child(even) {
   padding: 10px;
}`}
        />
        <p>Either of these would select all of the even list items</p>
        <Code
          language={"CSS"}
          code={`li:nth-child(2n+1) {
   padding: 10px;
}`}
        />
        <Code
          language={"CSS"}
          code={`li:nth-child(odd) {
   padding: 10px;
}`}
        />
        <p>would select the odd list items. </p>
        <p>
          There are more complicated selectors, see the codepen below for an
          outline of the various nth-child declarations you can use
          <a href="https://codepen.io/jmsherry/pen/wvvGrqY">
            https://codepen.io/jmsherry/pen/wvvGrqY
          </a>
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">
          Selector chains/Combinators
        </h3>
        <p>
          Are the initial declaration of the element that you wish to target.
          They can be selected by html element tag, by a defined class, a
          defined id, a defined attribute. REFER TO ABOVE IF YOU CONSIDER
          STYLING WITH ID.{" "}
        </p>
        <p>
          There are also many 'pseudo' selectors in CSS, which allow you to
          style elements only when a certain action takes place or elements meet
          the extra criteria defined by the pseudo selector. For example:
        </p>
        <Code
          language={"CSS"}
          code={`.example-class:hover {
   padding: 10px;
}`}
        />
        <p>
          is a pseudo selector that will only add styling to an element that is
          hovered by the cursor,{" "}
        </p>
        <Code
          language={"CSS"}
          code={`.example-class:focus {
   padding: 10px;
}`}
        />
        <p>will only style that element when it is focussed, and so on. </p>
        <h3 className="text-1xl mb-4 font-bold text-center">Combinators</h3>
        <p>
          Selector chains can be just one thing, a {} for example, or if you
          want to add the same styling to multiple elements etc, you could do
          this:
        </p>
        <Code
          language={"CSS"}
          code={`a, p, h2 {
   padding: 10px;
}`}
        />
        now all anchors, paragraphs and h2 elements will all receive the styles
        you give them (user-agent styles that you don't change here will remain
        as default). You can use selector chains to access child elements,
        perhaps you have a &lt;p&gt; inside &lt;div class="container"&gt;. You
        could give the &lt;p&gt; its own class and target it that way. You could
        just target all &lt;p&gt; tags. Or, you could do this:
        <Code
          language={"CSS"}
          code={`.container p {
   padding: 10px;
}`}
        />
        <p>
          A selector chain like this will now target any &lt;p&gt; tags only if
          they are a child element on anything with class=”container”. This is
          what we call greedy selection though, because it doesn't only select
          immediate child elements, rather it will select all descendants.{" "}
        </p>
        <p>We can counter this with the immediate child selector:</p>
        <Code
          language={"CSS"}
          code={`.container > p {
   padding: 10px;
}`}
        />
        <p>Now only the immediate children will be selected.</p>
        <p>
          We can select adjacent elements by using the + symbol; so for example:
        </p>
        <Code
          language={"CSS"}
          code={`input:valid + label {
   padding: 10px;
}`}
        />
        <p>
          using the pseudo class :valid, we check if an input is valid and
          target a label that is the element immediately after it
        </p>
        <Code
          language={"CSS"}
          code={`input:valid ~ label {
 padding: 10px;
}`}
        />
        <p>
          This is a similar selector, but instead of only selecting the adjacent
          label to the input, it will affect all labels after the input; so all
          following siblings rather than only the immediate following sibling
        </p>
        <h2 className="text-2xl font-bold text-center">Overrides</h2>
        <p>
          The outcome of the CSS stylesheet is determined by the parser. This
          checks all the declarations and decides what rules are eventually
          applied; this is called the cascade. These are decided by order and
          specificity.{" "}
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">Order</h3>
        <p>
          The position of a declaration on a stylesheet can affect whether or
          not it is used. If a declaration of the same level of specificity is
          called against an element that has already been previously styled,
          then whatever is in this declaration will override the previous
          because it has been parsed later in the process, for example:
        </p>
        <Code
          language={"CSS"}
          code={`h1 {
   color: red;
   font-size: 20px;
}`}
        />
        <Code
          language={"CSS"}
          code={`h1 {
   color: blue;
}`}
        />
        <p>
          What you would eventually see on the page is a blue h1 at 20px font
          size, due to the 'color' being overridden later in the stylesheet.{" "}
        </p>
        <h3 className="text-1xl mb-4 font-bold text-center">Specificity</h3>
        <p>
          This poster outlines CSS' order of specificity; that being the natural
          order of overrides according to the selection method that you use. Any
          selector chain that comes after the previous on this table, will
          override it. This needs to be studied and remembered or you may find
          yourself very puzzled!
        </p>
        <img
          src="https://www.standardista.com/wp-content/uploads/2012/01/specificityimg.png"
          alt="Estelle Weyl: Specifishity"
        />
      </section>

      <section aria-labelledby="#homework" className="mb-8">
        <h2 id="homework" className="text-3xl mb-4 font-bold text-center">
          Homework
        </h2>
        <Link to={`/homework/${id}`}>Go Here for homework</Link>
      </section>
      <section aria-labelledby="#cementing" className="mb-8">
        <h2 id="cementing" className="text-3xl mb-4 font-bold text-center">
          Cementing Test
        </h2>
        <p>
          Exercises Test your memory of and understanding of everything above.
        </p>
        <a href="https://codepen.io/jmsherry/pen/VwZEMGe">Codepen</a>
      </section>
    </div>
  );
}

export default LessonPage;
