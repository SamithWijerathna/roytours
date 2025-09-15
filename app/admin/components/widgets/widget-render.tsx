"use client";

import dynamic from "next/dynamic";

interface WidgetRenderProps {
  templateName: string;
    short_code: number; 
}

export default function WidgetRender({ templateName, short_code }: WidgetRenderProps) {
 const Template = dynamic(() =>
  import(`./templates/${templateName}/index.tsx`), // relative path
  { ssr: false, loading: () => <div>Loading widget...</div> }
);


  return <Template short_code={short_code} />;
}
