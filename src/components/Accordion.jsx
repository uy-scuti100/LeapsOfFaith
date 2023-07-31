import ReactMarkdown from "react-markdown";
import SizeChart from "./SizeChart";

const Accordion = ({ header, content, isOpen, onToggle, table }) => {
  const isMarkdownContent = typeof content === "string"; // Check if the content is a Markdown string

  return (
    <section className="w-full">
      <div
        className="flex justify-between items-center cursor-pointer mb-5"
        onClick={onToggle}
      >
        <div className="text-2xl md:text-4xl uppercase py-3">{header}</div>
        <div className="text-4xl md:text-6xl">{isOpen ? "-" : "+"}</div>
      </div>
      <div className={`${isOpen ? "accordion show" : "accordion"}`}>
        {table ? (
          <SizeChart /> // Render SizeChart component if table is true
        ) : isMarkdownContent ? (
          <div className="markdown-content md:text-2xl p-5 border-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        ) : (
          <div className="jsx-content md:text-2xl p-5 border-none">
            {content}
          </div>
        )}
      </div>
    </section>
  );
};

export default Accordion;
