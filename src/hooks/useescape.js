import useKey from "./usekey";

function useEscape(callback) {
  useKey("Escape", callback);
}

export default useEscape;
