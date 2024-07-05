import React, { FC } from "react";

interface Article {
  title: string;
  sections: string[];
}

interface ArticleBoxProps {
  article: Article;
}

const ArticleBox: React.FC<ArticleBoxProps> = ({ article }) => {
  return (
    <div className="py-4 space-y-2 text-sm">
      <div className="text-sm flex justify-center items-center">
        <h2>{article.title}</h2>
      </div>
      {article.sections.map((article, index) => (
        <div className="flex flex-row space-x-16 items-start">
          <p className="w-12 text-center">Stk.{index + 1}.</p>
          <p className="flex-1">{article}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleBox;
