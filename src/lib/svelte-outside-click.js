export default function clickOutside(node, onEventFunction) {
  const handleClick = (event) => {
    const path = event.composedPath();

    if (!path.includes(node)) {
      onEventFunction();
    }
  };

  setTimeout(() => {
    document.addEventListener("click", handleClick);
  }, 1);

  return {
    destroy() {
      document.removeEventListener("click", handleClick);
    },
  };
}
