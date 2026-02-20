import type React from "react";
import { SPageWrapper } from "./styles";

interface PropItem {
  id: number;
  prop: string;
  type: string;
  description: string;
}

interface PageWrapperProps {
  title: string;
  description: string;
    codeExample?: React.ReactNode;
    codeSnippet?: React.ReactNode;
    advancedCodeSnippet?: React.ReactNode;
    
  props?: PropItem[];
  features: string[];
}

export const PageWrapper = ({
  title,
  description,
  codeExample,
  codeSnippet,
  advancedCodeSnippet,
  props,
  features,
}: PageWrapperProps) => {
  return (
    <SPageWrapper>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="code-example">{codeExample}</div>

      <h3>Key Features:</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h3>Props:</h3>
      <table>
        <thead>
          <tr>
            <th>prop</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        {props?.map((prop) => (
          <tr key={prop.id}>
            <td>{prop.prop}</td>
            <td>{prop.type}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </table>

      <h3>Recommended usage:</h3>
      <div>{codeSnippet}</div>

      <h3>Advanced Usage Example (Custom images, step control, handlers):</h3>
      <div>{advancedCodeSnippet}</div>
    </SPageWrapper>
  );
};
