export default ({ property = "all", ease = "ease", length = "0.3s" }) => `
    transition: ${property} ${length} ${ease}
`;
