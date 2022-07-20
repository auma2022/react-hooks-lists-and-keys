import React from "react";
/* import the `color` module
2. create a color list, with 4 colors
3. create a div with a `h1` with the title `Top 5 CSS Colors`
4. render a list, with 4 html list items (one for each color)
5. style each list item, through the use of styled-components
6. add a `color` property to the styled-components props
7. pass the color prop to each styled-components styled li element
8. render the styled-components DOM tree*/
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
      </ol>
    </div>
  );
}

export default ColorList;
