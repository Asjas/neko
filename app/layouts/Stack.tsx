import { ReactNode, CSSProperties } from "react";

interface IStack {
  as?: string;
  space?: string;
  splitAfter?: number;
  children: ReactNode;
}

export interface StackCustomCSS extends CSSProperties {
  "--margin-top": string | null;
}

export default function Stack({ as, space, splitAfter, children }: IStack) {
  let cssProperties: StackCustomCSS = {
    "--margin-top": space ? space : null,
  };

  return (
    <div className="stack" style={cssProperties}>
      <h2>Stack</h2>
      {children}
    </div>
  );
}
