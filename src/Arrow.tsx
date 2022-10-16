export function Arrow({
                          children,
                          disabled,
                          onClick
                      }: {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
}) {
    return (
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
                userSelect: "none",
                minHeight: '50px',
                minWidth: '50px',
                alignSelf:'center',
                borderRadius: '50%',
                margin: '0 10px',
                backgroundColor: '#EAB4A9',
            }}
        >
            {children}
        </button>
    );
}