import { useRef, useState } from "react";
import DOMPurify from "dompurify";
import { useStateContext } from "../lib/hooks/useStateContext";
import { marked } from "marked";
import { Send } from "lucide-react";

marked.use({ gfm: true });

const SubmitForm = () => {
  const { setServerData, setLoading, setError } = useStateContext();

  const [userPrompt, setUserPrompt] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  function handldeKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // if (userPrompt.trim() === "") return;
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.blur();
      }
      handleSubmit();
    }
  }

  async function handleSubmit() {
    setLoading(true); // Set loading to true at the start
    setError(null); // Reset error before fetching
    setServerData({ html: "" }); // Clear previous server data

    if (userPrompt !== "") {
      try {
        const res = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: userPrompt }),
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        const htmlString = await marked(data); // Await if marked returns a Promise
        const html = DOMPurify.sanitize(htmlString); // Sanitize the result

        setServerData({ html }); // Update server data
        inputRef.current?.focus();
        setUserPrompt("");
      } catch (err: any) {
        console.error("An error occurred:", err);
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    } else {
      setLoading(false); // Ensure loading is set to false if no user prompt
    }
  }


  return (
    <form
      className="w-full max-w-3xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative flex">
        <textarea
          value={userPrompt}
          placeholder="Type your message here..."
          onChange={(e) => {
            setUserPrompt(e.target.value);
            // Auto-resize logic
            e.target.style.height = "auto"; // Reset height to auto to get new scroll height
            e.target.style.height = `${Math.min(e.target.scrollHeight, 360)}px`; // Limit to max height (360px here)
          }}
          onKeyDown={handldeKeyDown}
          ref={inputRef}
          rows={1}
          className="w-full resize-none min-h-fit overflow-y-auto focus:outline-none border border-gray-300 rounded-3xl p-4"
          style={{
            scrollbarWidth: "none",
          }}
        />
        <div className="absolute bottom-2 right-2  bg-slate-200 flex justify-center items-center rounded-full h-10 w-10">
          <button
            type="submit"
            className="h-8 w-8 flex justify-center items-center"
            disabled={!userPrompt.trim()}
            aria-label="Send message"
            onClick={handleSubmit}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>

    // <div
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     marginBottom: "1rem",
    //     justifyContent: "center",
    //   }}
    // >
    //   <textarea
    //     name=""
    //     id=""
    //     style={{ margin: "0", flexGrow: "1", overflowY: "hidden" }}
    //     placeholder="Type in Prompt ..."
    //     onChange={(e) => setUserPrompt(e.target.value)}
    //     onKeyDown={handldeKeyDown}
    //     ref={inputRef}
    //     value={userPrompt}
    //   ></textarea>
    //   <button
    //     style={{ margin: 0, flex: "1", marginLeft: "10px" }}
    //     onClick={handleSubmit}
    //   >
    //     Go
    //   </button>
    // </div>
  );
};

export default SubmitForm;
