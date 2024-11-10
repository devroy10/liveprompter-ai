import { Skeleton } from "@/components/ui/skeleton";
import { useStateContext } from "../../lib/hooks/useStateContext";
import SubmitForm from "@/components/SubmitForm";
import { Helmet } from 'react-helmet';



const Chat = () => {
  const { error, serverData, loading } = useStateContext();

  // const API = import.meta.env.VITE_SERVER_URL;
  // const [serverData, setServerData] = useState({ html: "" });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [userPrompt, setUserPrompt] = useState("");
  // const inputRef = useRef(null);

  // function handldeKeyDown(e) {
  //   if (e.key === "Enter" && !e.shiftKey) {
  //     e.preventDefault();
  //     inputRef.current.blur();
  //     handleSubmit();
  //   }
  // }

  // function handleSubmit() {
  //   setLoading(true); // Set loading to true at the start
  //   setError(null); // Reset error before fetching
  //   setServerData(""); // Clear previous server data

  //   if (userPrompt !== "") {
  //     fetch("/api", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ prompt: userPrompt }),
  //     })
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         const html = DOMPurify.sanitize(marked(data));
  //         setServerData({ html }); // Update server data
  //         inputRef.current.focus();
  //         setUserPrompt("");
  //       })
  //       .catch((err) => {
  //         console.error("Error", err);
  //         setError(err.message); // Set error message
  //       })
  //       .finally(() => {
  //         setLoading(false); // Set loading to false after fetching
  //       });
  //   } else {
  //     setLoading(false); // Ensure loading is set to false if no user prompt
  //   }
  // }

  return (
    <section
      style={{
        height: "calc(100vh - 3rem)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
      className="flex flex-col max-w-screen-md mx-auto"
    >
      <Helmet>
        <title>Live Prompter | Chat</title>
        <meta name="description" content="This is a description of my page." />
        <link rel="canonical" href="/chat" />
      </Helmet>
      <h1
        style={{
          padding: "10px",
          fontSize: "1.5rem",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        LivePrompter Ai
      </h1>
      <div
        style={{
          margin: "0",
          flexGrow: "1",
          overflowY: "scroll",
          marginBottom: "1rem",
          scrollbarWidth: "none",
        }}
      >
        <div style={{ margin: "0", width: "100%", height: "100%" }}>
          {loading ? (
            <div className="p-4 flex flex-col gap-4">
              {/* Title Skeleton */}
              <Skeleton
                className=" w-full h-[40px] rounded-full"
                style={{ borderRadius: "8px" }}
              />
              {/* Paragraph Skeletons */}
              <Skeleton
                className=" w-full h-[20px] rounded-full"
                style={{ borderRadius: "8px" }}
              />
              <Skeleton
                className=" w-full h-[20px] rounded-full"
                style={{ borderRadius: "8px" }}
              />
              <Skeleton
                className=" w-full h-[20px] rounded-full"
                style={{ borderRadius: "8px" }}
              />
              {/* Image Skeleton */}
            </div>
          ) : error ? (
            <div style={{ color: "red" }}>Error: {error}</div>
          ) : (
            <article
              style={{ margin: "0" }}
              dangerouslySetInnerHTML={{ __html: serverData?.html || "" }}
            />
          )}
        </div>
      </div>
      <SubmitForm />
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
          justifyContent: "center",
        }}
      >
        <textarea
          name=""
          id=""
          style={{ margin: "0", flexGrow: "1", overflowY: "hidden" }}
          placeholder="Type in Prompt ..."
          onChange={(e) => setUserPrompt(e.target.value)}
          onKeyDown={handldeKeyDown}
          ref={inputRef}
          value={userPrompt}
        ></textarea>
        <button
          style={{ margin: 0, flex: "1", marginLeft: "10px" }}
          onClick={handleSubmit}
        >
          Go
        </button>
      </div> */}
    </section>
  );
}
export default Chat