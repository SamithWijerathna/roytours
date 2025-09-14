"use client";

import dynamic from "next/dynamic";

interface WidgetRenderProps {
  templateName: string;
}

export default function WidgetRender({ templateName }: WidgetRenderProps) {
 const Template = dynamic(() =>
  import(`./templates/${templateName}/index.tsx`), // relative path
  { ssr: false, loading: () => <div>Loading widget...</div> }
);


  return <Template />;
}
