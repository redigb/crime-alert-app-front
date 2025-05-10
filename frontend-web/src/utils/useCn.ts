const cn = (...classes: (string | false | undefined)[]) =>
    classes.filter(Boolean).join(" ");

export default cn;