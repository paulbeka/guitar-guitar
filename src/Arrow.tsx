export function Arrow({
  children,
  disabled,
  onClick,
  direction
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  direction: string;
}) {
  return (
    /*
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none"
      }}
    >
    */
    <img src = {'./src/assets/arrow' + direction + '.jpeg'}
        style = {{
            marginTop: '250px',
            cursor: "pointer",
            height: '50px',
            width: '50px',
        }}
        onClick={onClick}
    />
    /*
      {children}
    </button>
    */
  );
}
