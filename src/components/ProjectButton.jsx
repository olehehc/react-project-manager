export default function ProjectButton({ children, onSelect, isSelected }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={isSelected ? "selected" : ""}
    >
      {children}
    </button>
  );
}
