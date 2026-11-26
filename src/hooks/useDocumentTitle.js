// 9-useDocumentTitle
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    if (typeof title === "string" && title.length > 0) {
      document.title = title;
    }
  }, [title]);
}