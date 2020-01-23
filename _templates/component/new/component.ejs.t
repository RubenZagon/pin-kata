---
to: src/components/<%= name%>/<%= name%>.tsx
---
import React, { FC } from "react";
import styled from '@emotion/styled';

interface <%= Name%>Props {
  className?: string;
}

export const <%= Name%>: FC<<%= Name%>Props> = (props) => {
return (
<>
<p> ✅ test component <%= Name%></p>

</>
);
};