/* eslint-disable react/require-default-props */
import { ReactNode, CSSProperties } from "react";

interface IStack {
  space?: string;
  splitAfter?: number;
  children: ReactNode;
}

export interface StackCustomCSS extends CSSProperties {
  "--margin-top": string | null;
}

export default function Stack({ space, splitAfter = 2, children }: IStack) {
  const cssProperties: StackCustomCSS = {
    "--margin-top": space ? space : null,
  };

  return (
    <div className="stack" style={cssProperties}>
      <h2>Stack</h2>
      {children}
    </div>
  );
}
